import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: "Streetwear", count: 124, img: "https://images.unsplash.com/photo-1523398002811-999aa8e9ddaa?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Minimalist", count: 86, img: "https://images.unsplash.com/photo-1485230865900-51f04b127ed6?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Avant-Garde", count: 42, img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Athleisure", count: 215, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Vintage", count: 156, img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "Accessories", count: 340, img: "https://images.unsplash.com/photo-1584917033904-491a3c393bc3?auto=format&fit=crop&w=800&q=80" },
];

const Categories = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 container mx-auto px-6 min-h-screen"
    >
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-4">Curated Categories</h1>
        <p className="text-gray-500 dark:text-gray-400">Explore fashion through the lens of aesthetic archetypes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <Link to="/shop" key={cat.id}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
            >
              <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                <div>
                  <h3 className="text-white text-3xl font-display font-bold">{cat.name}</h3>
                  <p className="text-white/70 text-sm font-bold tracking-widest uppercase mt-2">{cat.count} ITEMS</p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.main>
  );
};

export default Categories;
