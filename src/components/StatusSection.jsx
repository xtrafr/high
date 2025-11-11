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
    <section id="status" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
              All Systems Operational
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
            Detection Status
          </h2>
          <p className="text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-4">
            Real-time monitoring for all products
          </p>
          <p className="text-sm text-gray-500">
            Last updated: {currentTime.toLocaleTimeString()} UTC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [&>*:nth-child(7)]:lg:col-start-2">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -10, transition: { type: "spring", stiffness: 400, damping: 17 } }}
              className="group relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/5 to-green-500/0"
                initial={false}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 3,
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
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                  <div className="relative flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full backdrop-blur-sm">
                    <motion.div
                      className="absolute inset-0 bg-green-500/10 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 1,
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
                          duration: 0.8,
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
                          duration: 0.8,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </div>
                    <span className="text-green-400 font-semibold text-sm uppercase tracking-wide relative">
                      {product.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4,
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
