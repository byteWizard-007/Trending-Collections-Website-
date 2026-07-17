import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import StoryBar from '../components/StoryBar';
import ProductCard from '../components/ProductCard';
import ScrollShowcase from '../components/ScrollShowcase';
import ScrollGallery from '../components/ScrollGallery';
import FashionCrowd from '../components/FashionCrowd';
import { products, aiSuggestions } from '../data/mockData';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="pt-20">
      <Hero />
      <ScrollGallery />
      <StoryBar />

      {/* AI Recommendation Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 rounded-xl bg-primary text-white">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold">AI Personalized Picks</h2>
              <p className="text-gray-500 dark:text-gray-400">Curated specifically for your style profile</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.filter(p => p.isAIRecommended).slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Style Pulse Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl space-y-6">
              <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Style Pulse</span>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold leading-tight">
                Your AI Stylist is <span className="text-gradient">Analyzing</span> the Trends.
              </h2>
              <div className="space-y-4">
                {aiSuggestions.map(suggest => (
                  <motion.div 
                    key={suggest.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-dark-bg/50 border border-white/20"
                  >
                    <div className={`w-2 h-2 rounded-full ${suggest.type === 'trend' ? 'bg-blue-400' : 'bg-primary'}`}></div>
                    <p className="text-sm italic">{suggest.text}</p>
                  </motion.div>
                ))}
              </div>
              <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                VIEW FULL REPORT <ArrowRight size={18} />
              </button>
            </div>
            <div className="relative group">
               <div className="absolute -inset-4 bg-primary/20 blur-3xl group-hover:bg-primary/40 transition-all rounded-full"></div>
               <img 
                 src="https://loremflickr.com/600/800/clothing,dress?lock=899" 
                 alt="Style" 
                 className="relative rounded-2xl shadow-2xl w-full max-w-sm"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Animations Section */}
      <ScrollShowcase />

      {/* Trending Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold">Trending Now</h2>
            <p className="text-gray-500 mt-2">What the world is wearing right now.</p>
          </div>
          <Link to="/shop" className="text-sm font-bold tracking-widest border-b-2 border-primary pb-1 hover:text-primary transition-colors">VIEW ALL</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.slice(0, 8).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Fashion Crowd Canvas Section */}
      <FashionCrowd />
    </main>
  );
};

export default Home;
