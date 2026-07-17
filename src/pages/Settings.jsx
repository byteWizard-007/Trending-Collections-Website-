import React from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, CreditCard } from 'lucide-react';

const Settings = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 container mx-auto px-6 min-h-screen max-w-4xl"
    >
      <h1 className="text-4xl font-display font-extrabold mb-10">Account Settings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-2">
          <button className="w-full text-left px-4 py-3 bg-primary/10 text-primary font-bold rounded-xl flex items-center gap-3">
            <User size={18} /> Profile
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 font-medium rounded-xl flex items-center gap-3 transition-colors">
            <Bell size={18} /> Notifications
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 font-medium rounded-xl flex items-center gap-3 transition-colors">
            <Shield size={18} /> Security
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 font-medium rounded-xl flex items-center gap-3 transition-colors">
            <CreditCard size={18} /> Payment Methods
          </button>
        </div>
        
        <div className="md:col-span-3 bg-white dark:bg-dark-surface p-8 rounded-3xl border border-gray-100 dark:border-white/10">
          <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">First Name</label>
                <input type="text" defaultValue="John" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Last Name</label>
                <input type="text" defaultValue="Doe" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Email Address</label>
              <input type="email" defaultValue="john.doe@example.com" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Style Preference</label>
              <select className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary">
                <option>Minimalist</option>
                <option>Streetwear</option>
                <option>Vintage</option>
                <option>Avant-Garde</option>
              </select>
            </div>
            <button className="bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-primary-dark transition-colors">
              SAVE CHANGES
            </button>
          </form>
        </div>
      </div>
    </motion.main>
  );
};

export default Settings;
