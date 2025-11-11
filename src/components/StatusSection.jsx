import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const StatusSection = () => {
  const products = [
    { name: 'Chromatic', status: 'undetected', lastUpdate: '2 hours ago' },
    { name: 'Alteron', status: 'undetected', lastUpdate: '5 hours ago' },
    { name: 'Aether', status: 'undetected', lastUpdate: '1 hour ago' },
    { name: 'Void', status: 'undetected', lastUpdate: '3 hours ago' },
    { name: 'Permanent Spoofer', status: 'undetected', lastUpdate: '4 hours ago' },
    { name: 'Phantom', status: 'undetected', lastUpdate: '6 hours ago' },
    { name: 'CS2-SLOTTED', status: 'undetected', lastUpdate: '1 hour ago' },
  ];

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="status" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-green-600/20 rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-green-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              All Systems Operational
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text px-4">
            Detection Status
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-3 sm:mb-4 px-4">
            Real-time monitoring for all products
          </p>
          <p className="text-xs sm:text-sm text-gray-500 px-4">
            Last updated: {currentTime.toLocaleTimeString()} UTC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 [&>*:nth-child(7)]:lg:col-start-2">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -10, transition: { type: "spring", stiffness: 400, damping: 17 } }}
              className="group relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/5 to-green-500/0"
                initial={false}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ backgroundSize: '200% 200%' }}
              />

              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{product.name}</h3>
                  <div className="relative flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full backdrop-blur-sm flex-shrink-0">
                    <motion.div
                      className="absolute inset-0 bg-green-500/10 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <div className="relative">
                      <motion.div
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{
                          boxShadow: [
                            '0 0 0px rgba(34, 197, 94, 0.5)',
                            '0 0 10px rgba(34, 197, 94, 0.8)',
                            '0 0 0px rgba(34, 197, 94, 0.5)',
                          ],
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full"
                        animate={{
                          scale: [1, 1.8, 1],
                          opacity: [0.8, 0, 0.8],
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </div>
                    <span className="text-green-400 font-semibold text-xs sm:text-sm uppercase tracking-wide relative">
                      {product.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 text-xs sm:text-sm">
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </motion.svg>
                  Updated {product.lastUpdate}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatusSection;
