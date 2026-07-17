import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12 h-full">
        {/* Left Content */}
        <div className="relative z-10 space-y-8 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Spring Summer 2026
            </span>
            <h1 className="text-6xl lg:text-8xl font-display font-extrabold tracking-tighter leading-[0.95]">
              VIRTUAL <br />
              <span className="text-gradient">COUTURE</span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
              Experience the future of fashion. AI-integrated designs tailored to your digital and physical identity.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex gap-4"
          >
            <Link to="/shop" className="bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold tracking-widest text-sm hover:scale-105 transition-transform text-center flex items-center">
              EXPLORE
            </Link>
            <Link to="/categories" className="px-10 py-4 rounded-full font-bold tracking-widest text-sm border border-gray-200 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-center flex items-center">
              WATCH REEL
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-12 pt-12 border-t border-gray-100 dark:border-white/10"
          >
            <div>
              <p className="text-3xl font-display font-bold">12k+</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Designs</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold">98%</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Fit Accuracy</p>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative h-full flex items-center justify-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-lg aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://loremflickr.com/1000/1200/clothing,dress,apparel?lock=999" 
              alt="Fashion Apparel" 
              className="w-full h-full object-cover"
            />
            
            {/* AI Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute bottom-8 left-[-10%] glass-card p-4 rounded-2xl flex items-center gap-4 max-w-[200px]"
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold">AI</div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Analysis</p>
                <p className="text-xs font-bold">Fabric: Premium Silk</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
