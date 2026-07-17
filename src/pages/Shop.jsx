import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, Grid, List, Search } from 'lucide-react';
import { products } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(50);

  const categories = ['All', 'Men', 'Women', 'Streetwear', 'Accessories'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-display font-extrabold tracking-tighter">THE <span className="text-gradient">COLLECTION</span></h1>
            <p className="text-gray-500 max-w-md">Discover our latest pieces, curated by AI and crafted with precision for the modern identity.</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search collection..." 
                className="w-full bg-white dark:bg-dark-surface border border-gray-100 dark:border-dark-border rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary transition-all"
              />
            </div>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="p-3 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center gap-2 font-bold text-sm"
            >
              <Filter size={18} /> FILTERS
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card rounded-[2rem] p-8 mb-12 grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${filter === cat ? 'bg-primary text-white' : 'bg-gray-50 dark:bg-dark-bg'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Price Range</h4>
                <input type="range" className="w-full accent-primary" />
                <div className="flex justify-between text-[10px] font-bold text-gray-500">
                  <span>$0</span>
                  <span>$1000+</span>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Sort By</h4>
                <div className="relative">
                  <select className="w-full bg-gray-50 dark:bg-dark-bg border-none rounded-xl py-3 px-4 text-xs font-bold focus:ring-1 focus:ring-primary appearance-none">
                    <option>Featured</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                </div>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-primary/10 text-primary py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                  RESET ALL
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {filteredProducts.slice(0, visibleCount).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredProducts.length && (
          <div className="mt-20 flex justify-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 50)}
              className="px-12 py-4 rounded-full border border-gray-200 dark:border-dark-border font-bold tracking-[0.2em] text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            >
              LOAD MORE (SHOWING {visibleCount} OF {filteredProducts.length})
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Shop;
