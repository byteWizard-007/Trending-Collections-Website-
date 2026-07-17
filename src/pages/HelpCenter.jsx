import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HelpCircle, RefreshCcw, Truck, CreditCard } from 'lucide-react';

const HelpCenter = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 container mx-auto px-6 min-h-screen max-w-5xl"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">How can we help?</h1>
        <div className="max-w-2xl mx-auto relative">
          <input type="text" placeholder="Search for answers..." className="w-full bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-2xl px-6 py-5 focus:outline-none focus:border-primary shadow-xl" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Link to="/faq" className="bg-white dark:bg-dark-surface p-8 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-primary transition-colors text-center group">
          <HelpCircle size={40} className="mx-auto mb-4 text-gray-400 group-hover:text-primary transition-colors" />
          <h3 className="font-bold text-lg">General FAQ</h3>
        </Link>
        <Link to="/returns" className="bg-white dark:bg-dark-surface p-8 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-primary transition-colors text-center group">
          <RefreshCcw size={40} className="mx-auto mb-4 text-gray-400 group-hover:text-primary transition-colors" />
          <h3 className="font-bold text-lg">Returns & Exchanges</h3>
        </Link>
        <div className="bg-white dark:bg-dark-surface p-8 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-primary transition-colors text-center group cursor-pointer">
          <Truck size={40} className="mx-auto mb-4 text-gray-400 group-hover:text-primary transition-colors" />
          <h3 className="font-bold text-lg">Shipping Info</h3>
        </div>
        <div className="bg-white dark:bg-dark-surface p-8 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-primary transition-colors text-center group cursor-pointer">
          <CreditCard size={40} className="mx-auto mb-4 text-gray-400 group-hover:text-primary transition-colors" />
          <h3 className="font-bold text-lg">Payments</h3>
        </div>
      </div>
    </motion.main>
  );
};

export default HelpCenter;
