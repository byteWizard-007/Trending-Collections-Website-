import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, Sparkles } from "lucide-react";

const products = [
  { id: 1, img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80", title: "Streetwear Look" },
  { id: 2, img: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80", title: "Casual Outfit" },
  { id: 3, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80", title: "Premium Style" },
  { id: 4, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80", title: "Luxury Edge" },
  { id: 5, img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=800&q=80", title: "Ethereal Silk" }
];

export default function ScrollGallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const [selected, setSelected] = useState(null);

  return (
    <section
      ref={ref}
      className="h-[150vh] bg-accent-cream dark:bg-dark-bg text-black dark:text-white flex flex-col items-center justify-start relative overflow-hidden pt-32"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Title */}
      <div className="text-center z-10 mb-20 space-y-4 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
          <Sparkles size={16} className="text-primary" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">AI Selected</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter">
          Dynamic Styles
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto text-sm md:text-base">
          Scroll to explore curated looks that match your personal aesthetic, mapped in 3D space.
        </p>
      </div>

      {/* Sticky Gallery Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {products.map((item, i) => {
          // Calculate varied movements for a parallax/3D effect
          // Using slightly randomized but predictable offsets based on index
          const multiplier = i % 2 === 0 ? 1 : -1;
          const xOffset = (i - 2) * 200;
          const yOffset = multiplier * 100 + (i * 20);

          const x = useTransform(scrollYProgress, [0, 1], [xOffset * 1.5, -xOffset]);
          const y = useTransform(scrollYProgress, [0, 1], [yOffset * 2, -yOffset]);
          const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
          const rotate = useTransform(scrollYProgress, [0, 1], [multiplier * 15, multiplier * -5]);

          return (
            <motion.div
              key={item.id}
              style={{ x, y, scale, rotate }}
              className="absolute group"
            >
              <div
                className="relative w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-2xl shadow-black/50 border border-white/10 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-primary/20"
                onClick={() => setSelected(item)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-dark-surface border border-gray-100 dark:border-white/10 text-black dark:text-white p-6 rounded-3xl max-w-sm w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-primary transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="rounded-2xl overflow-hidden mb-6 aspect-[4/5]">
                <img src={selected.img} className="w-full h-full object-cover" alt={selected.title} />
              </div>

              <div className="space-y-2 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-2">
                  98% Match
                </span>
                <h2 className="text-2xl font-display font-bold">{selected.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Fashion based on your recent interactions. Perfect for your upcoming events. ✨
                </p>
                <button className="w-full mt-6 bg-black dark:bg-white text-white dark:text-black font-bold py-3 rounded-xl hover:bg-primary dark:hover:bg-primary transition-colors">
                  SHOP THIS LOOK
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
