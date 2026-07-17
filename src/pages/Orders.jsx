import React from 'react';
import { motion } from 'framer-motion';
import { Package, Clock } from 'lucide-react';

const orders = [
  { id: "TRD-84729", date: "Oct 24, 2026", total: "$264.00", status: "Processing", items: 2 },
  { id: "TRD-73912", date: "Sep 15, 2026", total: "$120.00", status: "Delivered", items: 1 },
  { id: "TRD-62840", date: "Aug 02, 2026", total: "$450.50", status: "Delivered", items: 4 },
];

const Orders = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 container mx-auto px-6 min-h-screen max-w-4xl"
    >
      <h1 className="text-4xl font-display font-extrabold mb-10">Order History</h1>
      
      <div className="space-y-6">
        {orders.map((order, i) => (
          <motion.div 
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-dark-surface p-6 rounded-3xl border border-gray-100 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6"
          >
            <div className="flex items-center gap-6 w-full sm:w-auto">
              <div className="w-16 h-16 bg-gray-100 dark:bg-black/50 rounded-2xl flex items-center justify-center text-primary">
                <Package size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{order.id}</h3>
                <p className="text-sm text-gray-500">{order.date} • {order.items} Items</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-0 border-gray-100 dark:border-white/5 pt-4 sm:pt-0">
              <div className="text-left sm:text-right">
                <p className="font-bold text-lg">{order.total}</p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  {order.status === 'Processing' ? <Clock size={14} className="text-orange-500"/> : null}
                  <span className={order.status === 'Delivered' ? 'text-green-500' : 'text-orange-500'}>{order.status}</span>
                </div>
              </div>
              <button className="px-6 py-2 bg-gray-100 dark:bg-white/5 rounded-xl font-bold text-sm hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                DETAILS
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
};

export default Orders;
