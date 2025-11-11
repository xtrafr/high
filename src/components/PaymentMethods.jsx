import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PaymentMethods = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const paymentMethods = [
    {
      name: 'Stripe',
      logo: '/stripe.png',
      color: 'from-indigo-500 via-purple-500 to-pink-500'
    },
    {
      name: 'PayPal',
      logo: '/paypal.png',
      color: 'from-blue-500 via-blue-600 to-cyan-500'
    },
    {
      name: 'Google Pay',
      logo: '/google pay.png',
      color: 'from-green-400 via-emerald-500 to-teal-500'
    },
    {
      name: 'Apple Pay',
      logo: '/apple pay.png',
      color: 'from-gray-700 via-gray-800 to-black'
    },
    {
      name: 'Visa',
      logo: 'https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg',
      color: 'from-blue-600 via-blue-700 to-indigo-800'
    },
    {
      name: 'Mastercard',
      logo: '/mastercard.png',
      color: 'from-red-500 via-orange-500 to-yellow-500'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % paymentMethods.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

  const getCardPosition = (index) => {
    const totalCards = paymentMethods.length;
    const angleStep = 360 / totalCards;
    const offset = (index - currentIndex + totalCards) % totalCards;
    const angle = offset * angleStep;
    const radius = 300;
    
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;
    const rotateY = -angle;
    
    const isCenter = offset === 0;
    const scale = isCenter ? 1.15 : Math.max(0.7, 1 - Math.abs(z) / radius * 0.4);
    const opacity = 1;
    
    return { x, z, rotateY, scale, opacity };
  };

  return (
    <section id="payments" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-[200px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Payment Methods
          </h2>
          <p className="text-2xl text-gray-400 font-light max-w-3xl mx-auto">
            Secure, fast, and trusted worldwide
          </p>
        </motion.div>

        <div className="flex justify-center items-center w-full">
          <div className="relative h-80 w-full max-w-3xl flex items-center justify-center" style={{ perspective: '2000px' }}>
            <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
              {paymentMethods.map((method, index) => {
                const { x, z, rotateY, scale, opacity } = getCardPosition(index);
                const isCenter = (index - currentIndex + paymentMethods.length) % paymentMethods.length === 0;

                return (
                  <motion.div
                    key={method.name}
                    animate={{
                      x,
                      z,
                      rotateY,
                      scale,
                      opacity,
                    }}
                    transition={{ 
                      duration: 1.2, 
                      ease: [0.22, 1, 0.36, 1],
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    onClick={() => handleCardClick(index)}
                    className="absolute cursor-pointer"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      zIndex: isCenter ? 50 : Math.round(opacity * 10)
                    }}
                  >
                    <div className={`bg-gradient-to-br ${method.color} p-8 rounded-2xl shadow-xl border-2 ${isCenter ? 'border-white/40' : 'border-white/10'} w-[280px] h-[200px] flex flex-col items-center justify-center transition-all duration-600`}>
                      <div className="text-white mb-4 transform transition-transform duration-300 hover:scale-110 bg-white rounded-xl p-4 w-full h-24 flex items-center justify-center shadow-inner">
                        <img 
                          src={method.logo} 
                          alt={method.name}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <div className="text-4xl font-bold text-gray-800" style={{ display: 'none' }}>
                          {method.name}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white" style={{ WebkitFontSmoothing: 'antialiased', textRendering: 'optimizeLegibility' }}>
                        {method.name}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-16">
          {paymentMethods.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'bg-white w-10 h-3' 
                  : 'bg-white/30 hover:bg-white/50 w-3 h-3'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
