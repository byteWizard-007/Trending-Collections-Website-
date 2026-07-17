import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Star, ChevronRight, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { products } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const [selectedSize, setSelectedSize] = useState('M');
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest mb-10">
          <Link to="/">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-gray-900 dark:text-white font-bold">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden group cursor-zoom-in"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
            
            <div className="grid grid-cols-3 gap-6">
              {[product.image, product.hoverImage, product.image].map((img, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-border">
                  <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer" alt="Preview" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              {product.isAIRecommended && (
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-4">
                  Smart Suggestion: High Match (98%)
                </span>
              )}
              <h1 className="text-5xl font-display font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" className="opacity-30" />
                </div>
                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>
              <p className="text-3xl font-bold mb-8">${product.price}</p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selector */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold uppercase tracking-widest">Select Size</span>
                <button className="text-xs text-primary font-bold underline">Size Guide</button>
              </div>
              <div className="flex gap-4">
                {product.size.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold transition-all ${
                      selectedSize === size 
                      ? 'bg-black text-white dark:bg-white dark:text-black scale-110 shadow-lg' 
                      : 'border border-gray-200 dark:border-dark-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-white h-16 rounded-2xl font-bold tracking-widest flex items-center justify-center gap-3 hover:bg-primary-dark transition-all relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {isAdded ? (
                    <motion.span 
                      key="added"
                      initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }}
                      className="flex items-center gap-2"
                    >
                      <ShieldCheck /> ADDED TO BAG
                    </motion.span>
                  ) : (
                    <motion.span 
                      key="add"
                      initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }}
                      className="flex items-center gap-2"
                    >
                      <ShoppingBag /> ADD TO BAG
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <button className="w-16 h-16 rounded-2xl border border-gray-200 dark:border-dark-border flex items-center justify-center hover:bg-gray-50 dark:hover:bg-dark-bg transition-all">
                <Heart size={24} />
              </button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-12 border-t border-gray-100 dark:border-dark-border">
              <div className="text-center space-y-2">
                <div className="mx-auto w-10 h-10 rounded-full bg-gray-50 dark:bg-dark-bg flex items-center justify-center text-gray-400">
                  <Truck size={20} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-tighter">Fast Shipping</p>
              </div>
              <div className="text-center space-y-2">
                <div className="mx-auto w-10 h-10 rounded-full bg-gray-50 dark:bg-dark-bg flex items-center justify-center text-gray-400">
                  <RefreshCw size={20} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-tighter">Easy Returns</p>
              </div>
              <div className="text-center space-y-2">
                <div className="mx-auto w-10 h-10 rounded-full bg-gray-50 dark:bg-dark-bg flex items-center justify-center text-gray-400">
                  <ShieldCheck size={20} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-tighter">Secure Payment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Complete the Look (AI Combo) */}
        <section className="mt-32">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-white">
              <Sparkles size={20} />
            </div>
            <h2 className="text-3xl font-display font-bold">Complete the Look</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.slice(1, 5).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetail;
