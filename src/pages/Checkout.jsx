import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Shield } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate('/order-success'), 2000);
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 container mx-auto px-6 min-h-screen"
    >
      <h1 className="text-4xl font-display font-extrabold mb-12">Secure Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <form id="checkout-form" onSubmit={handleCheckout} className="space-y-8">
            {/* Shipping Info */}
            <div className="bg-white dark:bg-dark-surface p-8 rounded-3xl border border-gray-100 dark:border-white/10">
              <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="text" placeholder="First Name" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
                <input required type="text" placeholder="Last Name" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
                <input required type="text" placeholder="Address" className="w-full md:col-span-2 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
                <input required type="text" placeholder="City" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
                <input required type="text" placeholder="Postal Code" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white dark:bg-dark-surface p-8 rounded-3xl border border-gray-100 dark:border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold">Payment Details</h2>
                <Shield className="text-green-500" size={20} />
              </div>
              <div className="space-y-4">
                <input required type="text" placeholder="Card Number" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
                <div className="grid grid-cols-2 gap-4">
                  <input required type="text" placeholder="MM/YY" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
                  <input required type="text" placeholder="CVC" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white dark:bg-dark-surface p-8 rounded-3xl border border-gray-100 dark:border-white/10 sticky top-32">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-bold">$240.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span className="font-bold">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Taxes</span>
                <span className="font-bold">$24.00</span>
              </div>
              <div className="border-t border-gray-100 dark:border-dark-border pt-4 flex justify-between text-xl">
                <span className="font-bold">Total</span>
                <span className="font-extrabold text-primary">$264.00</span>
              </div>
            </div>
            <button 
              type="submit"
              form="checkout-form"
              disabled={loading}
              className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-70 flex justify-center items-center"
            >
              {loading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "PAY $264.00"}
            </button>
            <p className="text-center text-xs text-gray-500 mt-4 flex justify-center items-center gap-1">
              <CheckCircle size={12} /> Securely processed
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Checkout;
