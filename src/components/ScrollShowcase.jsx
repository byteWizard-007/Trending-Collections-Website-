import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import { cn } from "../lib/utils";

const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}) => {
  const isSpace = char === " ";

  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0]
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0]
  );

  return (
    <motion.span
      className={cn("inline-block text-primary", isSpace && "w-4")}
      style={{
        x,
        rotateX,
      }}
    >
      {char}
    </motion.span>
  );
};

const CharacterV2 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [Math.abs(distanceFromCenter) * 50, 0]
  );

  return (
    <motion.img
      src={char}
      className={cn("inline-block w-20 h-28 object-cover rounded-xl shadow-2xl mx-1", isSpace && "w-4 opacity-0")}
      style={{
        x,
        scale,
        y,
        transformOrigin: "center",
      }}
      alt="Fashion showcase"
    />
  );
};

const CharacterV3 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 90, 0]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-Math.abs(distanceFromCenter) * 20, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  return (
    <motion.img
      src={char}
      className={cn("inline-block w-24 h-32 object-cover rounded-2xl shadow-xl mx-2", isSpace && "w-4 opacity-0")}
      style={{
        x,
        rotate,
        y,
        scale,
        transformOrigin: "center",
      }}
      alt="Fashion showcase"
    />
  );
};

const ScrollShowcase = () => {
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: targetRef3,
  });

  const text = "DISCOVER PURE LUXURY";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  // Fashion images for V2 and V3
  const fashionIcons = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80",
    "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&q=80",
    "https://images.unsplash.com/photo-1584917033904-491a3c393bc3?w=400&q=80",
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80",
    "https://images.unsplash.com/photo-1594932224828-b4b059b6f6f9?w=400&q=80",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80",
  ];
  const iconCenterIndex = Math.floor(fashionIcons.length / 2);

  return (
    <ReactLenis root>
      <div className="w-full relative z-10 bg-accent-cream dark:bg-dark-bg">
        <div className="absolute left-1/2 top-10 z-20 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black dark:text-white">
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-transparent after:to-current after:content-[''] font-bold tracking-widest">
            Keep Scrolling
          </span>
        </div>
        
        {/* Section 1: Text Expanding */}
        <div
          ref={targetRef}
          className="relative box-border flex h-[150vh] items-center justify-center gap-[2vw] overflow-hidden p-[2vw]"
        >
          <div
            className="w-full max-w-5xl text-center text-4xl md:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-tighter text-black dark:text-white"
            style={{
              perspective: "500px",
            }}
          >
            {characters.map((char, index) => (
              <CharacterV1
                key={index}
                char={char}
                index={index}
                centerIndex={centerIndex}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Section 2: Images Expanding (V2) */}
        <div
          ref={targetRef2}
          className="relative -mt-[50vh] box-border flex h-[150vh] flex-col items-center justify-center gap-12 overflow-hidden p-[2vw]"
        >
          <p className="font-display flex items-center justify-center gap-3 text-xl md:text-2xl font-bold tracking-widest text-black dark:text-white uppercase">
            <Bracket className="h-10 text-primary" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-dark">
              Curated Collections
            </span>
            <Bracket className="h-10 scale-x-[-1] text-primary" />
          </p>
          <div className="w-full flex items-center justify-center">
            {fashionIcons.map((char, index) => (
              <CharacterV2
                key={index}
                char={char}
                index={index}
                centerIndex={iconCenterIndex}
                scrollYProgress={scrollYProgress2}
              />
            ))}
          </div>
        </div>

        {/* Section 3: Images Rotating (V3) */}
        <div
          ref={targetRef3}
          className="relative -mt-[50vh] box-border flex h-[150vh] flex-col items-center justify-center gap-12 overflow-hidden p-[2vw]"
        >
          <p className="font-display flex items-center justify-center gap-3 text-xl md:text-2xl font-bold tracking-widest text-black dark:text-white uppercase">
            <Bracket className="h-10 text-primary" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-dark">
              Express Your Identity
            </span>
            <Bracket className="h-10 scale-x-[-1] text-primary" />
          </p>
          <div
            className="w-full flex items-center justify-center"
            style={{
              perspective: "500px",
            }}
          >
            {fashionIcons.map((char, index) => (
              <CharacterV3
                key={index}
                char={char}
                index={index}
                centerIndex={iconCenterIndex}
                scrollYProgress={scrollYProgress3}
              />
            ))}
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default ScrollShowcase;

const Bracket = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={className}
    >
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      ></path>
    </svg>
  );
};
