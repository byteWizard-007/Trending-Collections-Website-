import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center py-32 px-6"
    >
      <div className="text-center max-w-lg">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle size={48} />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4">Order Confirmed!</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8 text-lg">
          Thank you for shopping with Trendify. Your order <span className="font-bold text-gray-900 dark:text-white">#TRD-84729</span> has been placed successfully.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/orders" className="bg-white dark:bg-dark-surface border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
            VIEW ORDER
          </Link>
          <Link to="/shop" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors inline-flex items-center justify-center gap-2">
            CONTINUE SHOPPING <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </motion.main>
  );
};

export default OrderSuccess;
