import React from 'react';
import { motion } from 'framer-motion';
import { stories } from '../data/mockData';

const StoryBar = () => {
  return (
    <div className="container mx-auto px-6 py-10 overflow-x-auto no-scrollbar flex space-x-8 items-center justify-center md:justify-start">
      {stories.map((story) => (
        <motion.div 
          key={story.id}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center space-y-2 cursor-pointer min-w-[80px]"
        >
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-primary to-secondary-dark ring-2 ring-white dark:ring-dark-bg">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white dark:border-dark-bg">
              <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-white dark:bg-dark-surface text-[8px] font-bold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap border border-gray-100 dark:border-dark-border">
              NEW
            </div>
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400">{story.title}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default StoryBar;
