import React from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    { q: "How does the AI Stylist work?", a: "Our AI engine analyzes your browsing patterns, saved items, and past purchases to build a unique style profile, updating its recommendations in real-time." },
    { q: "What is your return policy?", a: "We offer a 30-day return policy for all unworn items with original tags attached. Sustainable returns are free of charge." },
    { q: "Do you ship internationally?", a: "Yes, we ship to over 150 countries worldwide. Shipping costs are calculated at checkout based on your location." },
    { q: "How can I track my order?", a: "Once your order is dispatched, you will receive a tracking link via email. You can also view it in your Orders dashboard." }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 container mx-auto px-6 min-h-screen max-w-3xl"
    >
      <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-10 text-center">Frequently Asked Questions</h1>
      
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white dark:bg-dark-surface p-8 rounded-3xl border border-gray-100 dark:border-white/10">
            <h3 className="text-xl font-bold mb-4">{faq.q}</h3>
            <p className="text-gray-500 dark:text-gray-400">{faq.a}</p>
          </div>
        ))}
      </div>
    </motion.main>
  );
};

export default FAQ;
