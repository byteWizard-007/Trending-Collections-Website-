import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imgSrc, setImgSrc] = useState(product.image);

  const handleImageError = () => {
    // Fallback image if Unsplash fails
    setImgSrc('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[3/4] rounded-2xl glass-card border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500">
        {/* Badge */}
        {product.isAIRecommended && (
          <div className="absolute top-4 left-4 z-10 bg-primary/90 text-white text-[10px] px-3 py-1.5 rounded-full backdrop-blur-md font-bold tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            AI Pick
          </div>
        )}

        {/* Wishlist Button */}
        <button 
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md hover:bg-white dark:hover:bg-dark-bg transition-colors"
        >
          <Heart 
            size={18} 
            className={`transition-colors duration-300 ${isWishlisted ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-900 dark:text-white'}`} 
          />
        </button>

        {/* Images */}
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <motion.img 
            src={imgSrc} 
            alt={product.name}
            onError={handleImageError}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          />
          {product.hoverImage && (
            <motion.img 
              src={product.hoverImage} 
              alt={product.name + " alternate view"}
              onError={handleImageError}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />
          )}
        </Link>

        {/* Quick View Overlay */}
        <div className={`absolute bottom-0 left-0 right-0 p-6 flex justify-center gap-4 transition-transform duration-500 z-10 ${isHovered ? 'translate-y-0' : 'translate-y-20'}`}>
          <button className="p-3.5 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all shadow-lg hover:scale-110">
            <ShoppingCart size={20} />
          </button>
          <Link to={`/product/${product.id}`} className="p-3.5 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all shadow-lg hover:scale-110">
            <Eye size={20} />
          </Link>
        </div>
        
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </div>

      <div className="mt-5 space-y-1">
        <div className="flex justify-between items-start gap-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
          </Link>
          <p className="text-lg font-extrabold text-primary">${product.price}</p>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium tracking-wide uppercase">{product.category}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
