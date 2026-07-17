import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { products } from '../data/mockData';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { ...products[0], quantity: 1 },
    { ...products[2], quantity: 1 }
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 20;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-6 pt-32">
        <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-3xl font-display font-bold">Your bag is empty</h2>
        <Link to="/shop" className="bg-primary text-white px-10 py-4 rounded-full font-bold tracking-widest">CONTINUE SHOPPING</Link>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-display font-extrabold mb-12">SHOPPING BAG <span className="text-gray-400 text-xl font-normal">({cartItems.length} items)</span></h1>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex gap-6 pb-8 border-b border-gray-100 dark:border-dark-border"
                >
                  <div className="w-32 h-40 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-display font-bold">{item.name}</h3>
                        <p className="text-gray-400 text-sm mt-1 uppercase tracking-widest">Size: M • {item.style}</p>
                      </div>
                      <p className="text-xl font-bold">${item.price * item.quantity}</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 bg-gray-50 dark:bg-dark-bg px-4 py-2 rounded-xl">
                        <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-primary transition-colors">
                          <Minus size={16} />
                        </button>
                        <span className="font-bold w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-primary transition-colors">
                          <Plus size={16} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                      >
                        <Trash2 size={16} /> REMOVE
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary Card */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-[2.5rem] p-10 sticky top-32">
              <h2 className="text-2xl font-display font-bold mb-8">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Estimated Shipping</span>
                  <span>${shipping}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="pt-4 border-t border-gray-100 dark:border-dark-border flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span className="text-gradient">${total}</span>
                </div>
              </div>
              
              <button className="w-full bg-black dark:bg-white text-white dark:text-black h-16 rounded-2xl font-bold tracking-widest flex items-center justify-center gap-3 hover:scale-105 transition-transform group">
                CHECKOUT NOW <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  AI Security Enabled
                </div>
                <p className="text-[10px] text-gray-400 leading-relaxed">
                  Your purchase is protected by our AI-driven fraud detection system. 
                  Secure checkout with 256-bit SSL encryption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
