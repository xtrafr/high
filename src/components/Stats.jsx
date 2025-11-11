import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { stats } from '../data/mockData';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counts, setCounts] = useState({
    productsSold: 0,
    totalCustomers: 0,
    reviewsReceived: 0,
    averageRating: 0
  });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        productsSold: Math.floor(stats.productsSold * progress),
        totalCustomers: Math.floor(stats.totalCustomers * progress),
        reviewsReceived: Math.floor(stats.reviewsReceived * progress),
        averageRating: parseFloat((stats.averageRating * progress).toFixed(2))
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(stats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView]);

  const statItems = [
    { 
      label: 'Products Sold',
      value: counts.productsSold,
    },
    {
      label: 'Total Customers',
      value: counts.totalCustomers,
    },
    {
      label: 'Reviews',
      value: counts.reviewsReceived,
    },
    {
      label: 'Average Rating',
      value: counts.averageRating.toFixed(2),
      suffix: '/5.0'
    }
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Trusted worldwide
          </h2>
          <p className="text-xl text-gray-400 font-light">By thousands of satisfied users</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
                {item.value}{item.suffix && <span className="text-3xl text-gray-500">{item.suffix}</span>}
              </div>
              <div className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wider">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
