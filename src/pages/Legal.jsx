import React from 'react';
import { motion } from 'framer-motion';

const LegalLayout = ({ title, lastUpdated, children }) => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 container mx-auto px-6 min-h-screen max-w-3xl"
    >
      <div className="mb-12 border-b border-gray-200 dark:border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4">{title}</h1>
        <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
        {children}
      </div>
    </motion.main>
  );
};

export const Terms = () => (
  <LegalLayout title="Terms & Conditions" lastUpdated="April 25, 2026">
    <p>Welcome to Trendify. These terms and conditions outline the rules and regulations for the use of Trendify's Website.</p>
    <h3 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h3>
    <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Trendify if you do not agree to take all of the terms and conditions stated on this page.</p>
    <h3 className="text-xl font-bold mt-8 mb-4">2. AI Stylist Features</h3>
    <p>Our AI recommendations are provided "as is" and rely on your past behavior and preferences. We do not guarantee the availability of items suggested by the AI.</p>
  </LegalLayout>
);

export const Privacy = () => (
  <LegalLayout title="Privacy Policy" lastUpdated="April 25, 2026">
    <p>At Trendify, accessible from trendify.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Trendify and how we use it.</p>
    <h3 className="text-xl font-bold mt-8 mb-4">Data Collection</h3>
    <p>We collect browsing data, purchase history, and interaction metrics exclusively to improve your AI styling experience.</p>
  </LegalLayout>
);

export const Returns = () => (
  <LegalLayout title="Returns & Refunds" lastUpdated="April 25, 2026">
    <p>We want you to love your purchase. If you are not completely satisfied, you can return the item to us within 30 days of delivery.</p>
    <h3 className="text-xl font-bold mt-8 mb-4">Conditions</h3>
    <ul className="list-disc pl-6 space-y-2 mt-4">
      <li>Items must be unworn and unwashed.</li>
      <li>Original tags must be attached.</li>
      <li>Sale items are final and cannot be returned.</li>
    </ul>
  </LegalLayout>
);
