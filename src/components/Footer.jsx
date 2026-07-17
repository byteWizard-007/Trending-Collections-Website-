import React from 'react';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-surface border-t border-gray-100 dark:border-dark-border py-20 px-6 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-gradient block">TRENDIFY</Link>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Redefining fashion through intelligence. Our AI-driven platform personalizes your style journey, ensuring every piece you wear is a reflection of you.
          </p>
          <div className="flex space-x-4">
            <Instagram className="text-gray-400 hover:text-primary transition-colors cursor-pointer" size={20} />
            <Twitter className="text-gray-400 hover:text-primary transition-colors cursor-pointer" size={20} />
            <Facebook className="text-gray-400 hover:text-primary transition-colors cursor-pointer" size={20} />
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-gray-900 dark:text-white">SHOP</h4>
          <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li><Link to="/shop" className="hover:text-primary transition-colors">New Arrivals</Link></li>
            <li><Link to="/categories" className="hover:text-primary transition-colors">Categories</Link></li>
            <li><Link to="/ai-picks" className="hover:text-primary transition-colors">AI Personalized Picks</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-gray-900 dark:text-white">SUPPORT</h4>
          <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li><Link to="/returns" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-gray-900 dark:text-white">LEGAL</h4>
          <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-display font-bold">NEWSLETTER</p>
          <div className="flex relative">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-accent-cream dark:bg-dark-bg border border-gray-200 dark:border-dark-border px-4 py-3 w-full rounded-xl focus:outline-none focus:border-primary transition-colors text-sm"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-primary text-white px-4 rounded-lg hover:bg-primary-dark transition-colors">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20 pt-8 border-t border-gray-100 dark:border-dark-border text-center text-xs text-gray-400 uppercase tracking-widest font-bold">
        © 2026 TRENDIFY. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
