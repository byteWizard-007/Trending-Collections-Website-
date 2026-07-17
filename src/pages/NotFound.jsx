import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-6 text-center"
    >
      <h1 className="text-9xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary-dark mb-4 drop-shadow-xl">404</h1>
      <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-10">
        It looks like the outfit you're looking for is out of stock or doesn't exist. Let's get you back to the runway.
      </p>
      <Link to="/" className="bg-primary text-white font-bold py-4 px-10 rounded-xl hover:bg-primary-dark transition-colors">
        RETURN HOME
      </Link>
    </motion.main>
  );
};

export default NotFound;
