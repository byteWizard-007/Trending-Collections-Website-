"use client";

import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

const FashionCrowdCanvas = ({ imageUrls }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Colorful palette for the borders/shadows
    const colors = ["#E0BBE4", "#957DAD", "#D291BC", "#FEC8D8", "#FFDFD3", "#B2E2F2"];

    // UTILS
    const randomRange = (min, max) => min + Math.random() * (max - min);
    const randomIndex = (array) => randomRange(0, array.length) | 0;
    const removeFromArray = (array, i) => array.splice(i, 1)[0];
    const removeItemFromArray = (array, item) => removeFromArray(array, array.indexOf(item));
    const removeRandomFromArray = (array) => removeFromArray(array, randomIndex(array));
    const getRandomFromArray = (array) => array[randomIndex(array) | 0];

    // TWEEN FACTORIES
    const resetPeep = ({ stage, peep }) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const offsetY = 100 - 350 * Math.pow(Math.random(), 2);
      const startY = stage.height - peep.height + offsetY - 50;
      let startX;
      let endX;

      if (direction === 1) {
        startX = -peep.width;
        endX = stage.width;
        peep.scaleX = 1;
      } else {
        startX = stage.width + peep.width;
        endX = 0;
        peep.scaleX = -1;
      }

      peep.x = startX;
      peep.y = startY;
      peep.anchorY = startY;

      return {
        startX,
        startY,
        endX,
      };
    };

    const normalWalk = ({ peep, props }) => {
      const { startX, startY, endX } = props;
      const xDuration = randomRange(15, 30); // Slowed down for a floaty feel
      const yDuration = randomRange(0.4, 0.8);

      const tl = gsap.timeline();
      tl.timeScale(randomRange(0.5, 1.2));
      tl.to(
        peep,
        {
          duration: xDuration,
          x: endX,
          ease: "none",
        },
        0,
      );
      tl.to(
        peep,
        {
          duration: yDuration,
          repeat: Math.ceil(xDuration / yDuration),
          yoyo: true,
          y: startY - randomRange(10, 25), // Bobbing up and down
          ease: "sine.inOut"
        },
        0,
      );

      return tl;
    };

    const walks = [normalWalk];

    // FACTORY FUNCTIONS
    const createPeep = ({ image }) => {
      const peep = {
        image,
        width: 100, // Standard avatar size
        height: 100,
        x: 0,
        y: 0,
        anchorY: 0,
        scaleX: 1,
        walk: null,
        color: getRandomFromArray(colors),
        render: (ctx) => {
          ctx.save();
          ctx.translate(peep.x, peep.y);
          ctx.scale(peep.scaleX, 1);

          const size = peep.width;

          // Drop shadow for that colorful glowing effect
          ctx.shadowColor = peep.color;
          ctx.shadowBlur = 15;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 10;

          // Draw Circular Image
          ctx.beginPath();
          ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
          ctx.closePath();
          
          ctx.save();
          ctx.clip(); // Clip to circle

          if (peep.image) {
            // Object-fit: cover equivalent logic
            const imgRatio = peep.image.naturalWidth / peep.image.naturalHeight;
            let drawW = size;
            let drawH = size;
            let offsetX = 0;
            let offsetY = 0;

            if (imgRatio > 1) { // Landscape
              drawW = size * imgRatio;
              offsetX = -(drawW - size) / 2;
            } else { // Portrait
              drawH = size / imgRatio;
              offsetY = -(drawH - size) / 2;
            }

            // Render image without shadow so the shadow only applies to the clipping border
            ctx.shadowColor = 'transparent';
            ctx.drawImage(peep.image, offsetX, offsetY, drawW, drawH);
          } else {
            // Fallback if image fails to load
            ctx.fillStyle = peep.color;
            ctx.fill();
          }
          ctx.restore(); // Restore clip

          // Draw colorful stroke
          ctx.beginPath();
          ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
          ctx.strokeStyle = peep.color;
          ctx.lineWidth = 3;
          ctx.stroke();

          ctx.restore();
        },
      };

      return peep;
    };

    // MAIN
    const stage = {
      width: 0,
      height: 0,
    };

    const allPeeps = [];
    const availablePeeps = [];
    const crowd = [];

    const initCrowd = () => {
      while (availablePeeps.length) {
        addPeepToCrowd().walk.progress(Math.random());
      }
    };

    const addPeepToCrowd = () => {
      const peep = removeRandomFromArray(availablePeeps);
      const walk = getRandomFromArray(walks)({
        peep,
        props: resetPeep({
          peep,
          stage,
        }),
      }).eventCallback("onComplete", () => {
        removePeepFromCrowd(peep);
        addPeepToCrowd();
      });

      peep.walk = walk;

      crowd.push(peep);
      crowd.sort((a, b) => a.anchorY - b.anchorY);

      return peep;
    };

    const removePeepFromCrowd = (peep) => {
      removeItemFromArray(crowd, peep);
      availablePeeps.push(peep);
    };

    const render = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      crowd.forEach((peep) => {
        peep.render(ctx);
      });

      ctx.restore();
    };

    const resize = () => {
      if (!canvas) return;
      stage.width = canvas.clientWidth;
      stage.height = canvas.clientHeight;
      canvas.width = stage.width * window.devicePixelRatio;
      canvas.height = stage.height * window.devicePixelRatio;

      crowd.forEach((peep) => {
        if(peep.walk) peep.walk.kill();
      });

      crowd.length = 0;
      availablePeeps.length = 0;
      availablePeeps.push(...allPeeps);

      if(allPeeps.length > 0) initCrowd();
    };

    const loadImagesAndInit = async () => {
      try {
        const promises = imageUrls.map((url) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => {
              console.warn(`Failed to load ${url}`);
              resolve(null);
            };
            img.src = url;
          });
        });

        const results = await Promise.all(promises);
        const loadedImages = results.filter(img => img !== null);
        
        // Create 25 total avatars by reusing the loaded images randomly
        const totalAvatars = 25;
        for (let i = 0; i < totalAvatars; i++) {
          if (loadedImages.length > 0) {
            const randomImage = loadedImages[i % loadedImages.length];
            allPeeps.push(createPeep({ image: randomImage }));
          } else {
            allPeeps.push(createPeep({ image: null }));
          }
        }

        resize();
        gsap.ticker.add(render);
      } catch (err) {
        console.error("Error loading images for canvas:", err);
      }
    };

    loadImagesAndInit();

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove(render);
      crowd.forEach((peep) => {
        if (peep.walk) peep.walk.kill();
      });
    };
  }, [imageUrls]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

export const FashionCrowd = () => {
  const sampleImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=80",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&q=80",
    "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=200&q=80",
    "https://images.unsplash.com/photo-1584917033904-491a3c393bc3?w=200&q=80",
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&q=80",
    "https://images.unsplash.com/photo-1594932224828-b4b059b6f6f9?w=200&q=80",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200&q=80"
  ];

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-accent-cream dark:bg-gradient-to-br dark:from-dark-bg dark:via-[#1A1A24] dark:to-[#2D1B33]">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none px-6">
        <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-black to-secondary-dark dark:from-primary-light dark:via-white dark:to-secondary-light mb-4 drop-shadow-lg">
          THE TRENDIFY COMMUNITY
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-lg text-sm md:text-base leading-relaxed">
          Join thousands of fashion enthusiasts shaping the future of virtual couture. Your identity, reimagined by AI.
        </p>
      </div>
      
      {/* Decorative colorful glowing orbs in the background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-dark/20 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-mint/10 rounded-full blur-[80px]"></div>

      {/* The Crowd Canvas */}
      <FashionCrowdCanvas imageUrls={sampleImages} />
    </div>
  );
};

export default FashionCrowd;
