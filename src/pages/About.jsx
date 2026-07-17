import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 container mx-auto px-6 min-h-screen max-w-4xl"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">About Trendify</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          We are redefining the intersection of artificial intelligence and high-end fashion, creating an entirely personalized shopping experience.
        </p>
      </div>

      <div className="aspect-video w-full rounded-3xl overflow-hidden mb-16 relative">
        <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80" className="w-full h-full object-cover" alt="About Trendify" />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-display font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Trendify was born from a simple idea: shopping for clothes shouldn't be overwhelming. In a world of fast fashion and endless choices, finding pieces that truly represent your style is difficult. We built an AI engine that understands aesthetics, mapping millions of data points to curate the perfect wardrobe specifically for you.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-display font-bold mb-4">Sustainability</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            By ensuring you only buy what you truly love and what fits your unique style profile, we drastically reduce return rates and fashion waste. Our premium partners are carefully vetted for their sustainable practices and ethical manufacturing processes.
          </p>
        </section>
      </div>
    </motion.main>
  );
};

export default About;
