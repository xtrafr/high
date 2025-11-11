import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PaymentMethods = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const paymentMethods = [
    { name: 'Stripe', logo: '/stripe.png' },
    { name: 'PayPal', logo: '/paypal.png' },
    { name: 'Google Pay', logo: '/google pay.png' },
    { name: 'Apple Pay', logo: '/apple pay.png' },
    { name: 'Visa', logo: 'https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg' },
    { name: 'Mastercard', logo: '/mastercard.png' },
  ];

  return (
    <section id="payments" className="py-20 md:py-32 px-4 md:px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            Payment Methods
          </h2>
          <p className="text-lg md:text-2xl text-gray-400 font-light">
            Secure and trusted payment options
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-purple-500/50 rounded-2xl p-6 md:p-8 transition-all duration-300 flex items-center justify-center h-32 md:h-40">
                <img 
                  src={method.logo} 
                  alt={method.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-bold text-white" style={{ display: 'none' }}>
                  {method.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-gray-500 text-sm md:text-base">
            All transactions are secured with industry-standard encryption
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentMethods;
