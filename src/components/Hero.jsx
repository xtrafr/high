import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] bg-purple-600/30 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] bg-cyan-600/20 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]" style={{ animationDelay: '2s' }}></div>
        </motion.div>
      </div>
      
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-4 md:px-6 max-w-6xl"
      >
        <motion.div
          initial={!prefersReducedMotion && { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <motion.div
            initial={!prefersReducedMotion && { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="mb-6 md:mb-8"
          >
            <span className="inline-block px-4 sm:px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-xs sm:text-sm font-medium text-white/80 mb-6 sm:mb-8">
              Premium Digital Tools
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px] font-bold text-white mb-4 sm:mb-6 md:mb-8 tracking-tight leading-none px-2"
            initial={!prefersReducedMotion && { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            Hooked<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">.wtf</span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400 mb-2 sm:mb-3 md:mb-4 font-light max-w-3xl mx-auto leading-relaxed px-4"
            initial={!prefersReducedMotion && { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            Elevate your experience with tools designed for perfection
          </motion.p>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto px-4"
            initial={!prefersReducedMotion && { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Reliable. Fast. Secure.
          </motion.p>
          
          <motion.div
            initial={!prefersReducedMotion && { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="flex gap-3 md:gap-4 justify-center items-center flex-wrap px-4 w-full max-w-md mx-auto"
          >
            <button
              onClick={scrollToProducts}
              className="group relative flex-1 min-w-[140px] px-6 md:px-8 py-3 md:py-4 text-sm md:text-base bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-white/20"
            >
              <span className="relative z-10">Explore Products</span>
            </button>
            <button
              onClick={scrollToProducts}
              className="flex-1 min-w-[140px] px-6 md:px-8 py-3 md:py-4 text-sm md:text-base bg-transparent text-white font-semibold rounded-full border border-white/20 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 active:bg-white/5 hover:border-white/40"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="hidden md:block absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={!prefersReducedMotion && { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity }}
      >
        <svg className="w-6 h-6 text-white/40" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
