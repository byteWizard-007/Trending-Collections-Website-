import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';

const AIPicks = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 container mx-auto px-6 min-h-screen"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <div className="p-4 rounded-full bg-primary/10 text-primary mb-6 relative">
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
          ></motion.div>
          <Sparkles size={32} className="relative z-10" />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-4">Your AI Stylist</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl">Based on your recent browsing history and saved items, our AI has curated these styles uniquely for you.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product, i) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <ProductCard product={{ ...product, isAIRecommended: true }} />
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
};

export default AIPicks;
