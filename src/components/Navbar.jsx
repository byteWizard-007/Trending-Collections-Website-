import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-tighter font-display text-gradient">
          TRENDIFY
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-sm tracking-widest uppercase">
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <Link to="/categories" className="hover:text-primary transition-colors">Categories</Link>
          <Link to="/ai-picks" className="hover:text-primary transition-colors flex items-center gap-1">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            AI Picks
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-gray-800 dark:text-gray-200">
          <button className="p-2 hidden sm:block hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <Link to="/wishlist" className="p-2 hover:text-primary transition-colors">
            <Heart size={20} />
          </Link>
          <Link to="/profile" className="p-2 hover:text-primary transition-colors">
            <User size={20} />
          </Link>
          <Link to="/cart" className="p-2 relative hover:text-primary transition-colors">
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
          </Link>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav overflow-hidden border-t border-gray-100 dark:border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4 text-center tracking-widest uppercase text-sm font-bold text-gray-800 dark:text-gray-200">
              <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">Shop</Link>
              <Link to="/categories" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">Categories</Link>
              <Link to="/ai-picks" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">AI Picks</Link>
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">Login / Register</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
