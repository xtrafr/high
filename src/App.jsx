import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Stats from './components/Stats';
import StatusSection from './components/StatusSection';
import PaymentMethods from './components/PaymentMethods';
import Reviews from './components/Reviews';
import Features from './components/Features';
import FAQ from './components/FAQ';
import TOS from './components/TOS';
import Footer from './components/Footer';
import { products } from './data/mockData';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';

function HomePage() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      if (e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.shiftKey && e.key === 'J') ||
          (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      
      <section id="products" className="py-20 md:py-32 px-4 md:px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={!prefersReducedMotion && { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight px-4">
              Our Products
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-light px-4">
              Premium tools crafted for excellence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <StatusSection />
      <PaymentMethods />
      
      <div id="reviews">
        <Reviews />
      </div>
      
      <div id="features">
        <Features />
      </div>
      
      <FAQ />
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tos" element={<TOS />} />
      </Routes>
    </Router>
  );
}

export default App;
