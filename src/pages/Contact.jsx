import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 container mx-auto px-6 min-h-screen max-w-5xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6">Get in Touch</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-12">
            Have a question about your order, need styling advice, or want to partner with us? Our team is here to help.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary/10 text-primary rounded-full">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                <p className="text-gray-500">support@trendify.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary/10 text-primary rounded-full">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Call Us</h3>
                <p className="text-gray-500">+1 (800) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary/10 text-primary rounded-full">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Visit HQ</h3>
                <p className="text-gray-500">123 Fashion Avenue<br/>New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-dark-surface p-8 rounded-3xl border border-gray-100 dark:border-white/10">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Name</label>
              <input type="text" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input type="email" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea rows={4} className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary"></textarea>
            </div>
            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition-colors">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;
