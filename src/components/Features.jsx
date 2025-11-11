import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: 'Instant Delivery',
      description: 'Immediate access to your purchase. No waiting, no hassle.',
      gradient: 'from-yellow-400 via-orange-500 to-red-500'
    },
    {
      title: 'Bank-Level Security',
      description: 'Military-grade encryption protects every transaction.',
      gradient: 'from-green-400 via-emerald-500 to-teal-600'
    },
    {
      title: '24/7 Support',
      description: 'Expert team always online. Get help whenever you need it.',
      gradient: 'from-blue-400 via-cyan-500 to-teal-500'
    },
    {
      title: 'Proven Quality',
      description: 'Trusted by thousands. Excellence guaranteed.',
      gradient: 'from-purple-400 via-pink-500 to-red-500'
    }
  ];

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-purple-400 to-cyan-500 text-transparent bg-clip-text">
            Why choose Hooked
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-500 text-center">
                <div className={`inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r ${feature.gradient} text-transparent bg-clip-text font-bold text-2xl`}>
                  {feature.title}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500">
            <div className="flex-1 text-left">
              <h3 className="text-3xl font-bold text-white mb-3">Ready to get started?</h3>
              <p className="text-gray-400 text-lg">Join thousands of satisfied users today</p>
            </div>
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 whitespace-nowrap"
            >
              Browse Products
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
