import { motion } from 'framer-motion';
import { reviews } from '../data/mockData';

const Reviews = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-700'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-black via-purple-950/30 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/20 rounded-full blur-[100px] md:blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-cyan-600/20 rounded-full blur-[80px] md:blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mb-6"
          >
            <div className="flex gap-1 md:gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight px-4">
            Trusted by thousands
          </h2>
          <p className="text-lg md:text-2xl text-gray-400 font-light px-4">Real reviews from real users</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-12">
          {reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl md:rounded-3xl blur-lg md:blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="flex gap-0.5 md:gap-1 mb-4 md:mb-6">
                  {renderStars(review.rating)}
                </div>

                <p className="text-gray-200 text-base md:text-xl mb-6 md:mb-8 leading-relaxed flex-grow font-light">
                  "{review.comment}"
                </p>

                <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-white/10">
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${review.color} rounded-full blur-sm opacity-50`}></div>
                    <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-base md:text-lg border-2 border-white/20`}>
                      {review.initials}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base md:text-lg">{review.username}</h4>
                    <p className="text-gray-500 text-xs md:text-sm">{review.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {reviews.slice(3, 5).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl md:rounded-3xl blur-lg md:blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="flex gap-0.5 md:gap-1 mb-4 md:mb-6">
                  {renderStars(review.rating)}
                </div>

                <p className="text-gray-200 text-base md:text-xl mb-6 md:mb-8 leading-relaxed flex-grow font-light">
                  "{review.comment}"
                </p>

                <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-white/10">
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${review.color} rounded-full blur-sm opacity-50`}></div>
                    <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-base md:text-lg border-2 border-white/20`}>
                      {review.initials}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base md:text-lg">{review.username}</h4>
                    <p className="text-gray-500 text-xs md:text-sm">{review.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
