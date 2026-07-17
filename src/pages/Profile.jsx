import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Package, Heart, LogOut, ShieldCheck, MapPin, CreditCard } from 'lucide-react';
import { products } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const Profile = () => {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex flex-col items-center text-center p-8 glass-card rounded-[2.5rem]">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" alt="Avatar" />
              </div>
              <h2 className="text-xl font-display font-bold">Sophia Sterling</h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Elite Style Member</p>
            </div>

            <nav className="space-y-2">
              <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl bg-primary text-white font-bold transition-all shadow-lg shadow-primary/20">
                <Package size={20} /> Orders
              </button>
              <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-dark-surface font-medium text-gray-500 transition-all">
                <Heart size={20} /> Wishlist
              </button>
              <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-dark-surface font-medium text-gray-500 transition-all">
                <MapPin size={20} /> Addresses
              </button>
              <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-dark-surface font-medium text-gray-500 transition-all">
                <CreditCard size={20} /> Payments
              </button>
              <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-dark-surface font-medium text-gray-500 transition-all">
                <Settings size={20} /> Settings
              </button>
              <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-500 font-medium transition-all">
                <LogOut size={20} /> Logout
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Stats Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 glass-card rounded-[2rem] bg-gradient-to-br from-white/60 to-primary/5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Style Points</p>
                <h3 className="text-3xl font-display font-bold">2,450</h3>
              </div>
              <div className="p-8 glass-card rounded-[2rem] bg-gradient-to-br from-white/60 to-secondary/5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Items Bought</p>
                <h3 className="text-3xl font-display font-bold">12</h3>
              </div>
              <div className="p-8 glass-card rounded-[2rem] bg-gradient-to-br from-white/60 to-accent-mint/5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Member Since</p>
                <h3 className="text-3xl font-display font-bold">2024</h3>
              </div>
            </div>

            {/* Recent Orders */}
            <section>
              <h2 className="text-2xl font-display font-bold mb-6">Recent Orders</h2>
              <div className="space-y-4">
                {[1, 2].map(order => (
                  <div key={order} className="p-6 glass-card rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-20 rounded-lg overflow-hidden bg-gray-50">
                        <img src={products[order].image} alt="Product" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Order #TR-892{order}</p>
                        <p className="text-xs text-gray-500 mt-1 uppercase">Delivered April 20, 2026</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-[10px] font-bold uppercase">Delivered</span>
                      <button className="text-xs font-bold text-primary underline">VIEW DETAILS</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Saved Outfits */}
            <section>
              <h2 className="text-2xl font-display font-bold mb-6">Your AI Wishlist</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.slice(0, 3).map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
