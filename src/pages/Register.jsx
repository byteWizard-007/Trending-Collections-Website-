import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate('/profile'), 1500);
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center py-32 px-6 bg-accent-cream dark:bg-dark-bg"
    >
      <div className="w-full max-w-md bg-white dark:bg-dark-surface p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-extrabold text-gradient mb-2">Join Trendify</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Create an account to unlock your personalized AI Stylist</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
            <input 
              type="text" 
              required
              className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-gray-900 dark:text-white"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input 
              type="email" 
              required
              className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-gray-900 dark:text-white"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input 
              type="password" 
              required
              className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-gray-900 dark:text-white"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-70 flex justify-center items-center"
          >
            {loading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "CREATE ACCOUNT"}
          </button>
        </form>

        <p className="text-center mt-8 text-gray-600 dark:text-gray-400 text-sm">
          Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Sign in</Link>
        </p>
      </div>
    </motion.main>
  );
};

export default Register;
