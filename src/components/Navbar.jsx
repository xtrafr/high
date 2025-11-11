import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 50);
    });
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10 py-3 md:py-3'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl sm:text-2xl font-bold text-white cursor-pointer"
        >
          Hooked<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">.wtf</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['Products', 'Features', 'Reviews'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-black text-xs sm:text-sm font-semibold rounded-full hover:scale-105 transition-transform duration-300"
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;