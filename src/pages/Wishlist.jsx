import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';

const Wishlist = () => {
  // Mock wishlist data
  const wishlistItems = products.slice(0, 3);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 container mx-auto px-6 min-h-screen"
    >
      <div className="flex items-center gap-4 mb-12 border-b border-gray-100 dark:border-dark-border pb-8">
        <Heart className="text-primary" fill="currentColor" size={32} />
        <h1 className="text-4xl font-display font-extrabold">Your Wishlist</h1>
        <span className="ml-auto bg-gray-100 dark:bg-dark-surface px-4 py-1 rounded-full text-sm font-bold">{wishlistItems.length} ITEMS</span>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <Heart className="mx-auto text-gray-200 dark:text-gray-700 mb-6" size={64} />
          <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-8">Save items you love to build your perfect wardrobe.</p>
          <Link to="/shop" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors inline-flex items-center gap-2">
            START SHOPPING
          </Link>
        </div>
      )}
    </motion.main>
  );
};

export default Wishlist;
