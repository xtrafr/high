import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const getStatusColor = (status) => {
    if (status === 'Low stock') return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    if (status === 'Sold out') return 'bg-red-500/20 text-red-300 border-red-500/30';
    return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
  };

  const handlePurchase = () => {
    if (product.status !== 'Sold out' && product.purchaseUrl) {
      window.open(product.purchaseUrl, '_blank');
    }
  };

  return (
    <motion.div
      initial={!prefersReducedMotion && { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.04, 0.62, 0.23, 0.98] }}
      className="relative h-full"
    >
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-full bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08] overflow-hidden flex flex-col"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10 opacity-0 transition-opacity duration-300"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
        ></motion.div>

        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-4 md:mb-6">
            <div className="flex-1">
              <span className={`inline-block px-2.5 md:px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(product.status)} mb-3 md:mb-4`}>
                {product.status}
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-3 tracking-tight">
                {product.name}
              </h3>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-4 md:mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-6 md:mb-8">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl md:text-4xl font-bold text-white">
                {product.price.split('–')[0].trim()}
              </span>
              <span className="text-gray-500">–</span>
              <span className="text-xl md:text-2xl font-semibold text-gray-300">
                {product.price.split('–')[1].trim()}
              </span>
            </div>
            <p className="text-xs md:text-sm text-gray-500">{product.stock} units available</p>
          </div>

          <motion.div
            initial={false}
            animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden mb-4 md:mb-6"
          >
            <div className="space-y-2 md:space-y-2.5 pt-2">
              {product.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
                  transition={{ delay: idx * 0.05, duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="flex items-center gap-2 md:gap-3 text-gray-300 text-xs md:text-sm"
                >
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex-shrink-0"></div>
                  {feature}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="flex justify-center mt-auto">
            <button
              onClick={handlePurchase}
              disabled={product.status === 'Sold out'}
              className="w-full max-w-xs py-3 md:py-4 text-sm md:text-base bg-white text-black font-semibold rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {product.status === 'Sold out' ? 'Out of Stock' : 'Purchase'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
