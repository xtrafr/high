import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is the cheat safe?",
      answer: "Yes! All our products are completely undetected and built with advanced security features. We use state-of-the-art protection methods to ensure maximum safety during usage."
    },
    {
      question: "Can I get banned?",
      answer: "Our products are totally undetected and we take security extremely seriously. While we maintain a 0% ban rate, we always recommend using our products responsibly and following all guidelines provided."
    },
    {
      question: "Will I get fast support?",
      answer: "Absolutely! Our dedicated support team is available 24/7 on Discord to help you with any questions or issues. We pride ourselves on providing quick responses and solutions to ensure the best experience."
    },
    {
      question: "How can I activate our product?",
      answer: "After purchase, you'll instantly receive a unique activation key via email. Simply run our loader, enter your key, and you're ready to go! Detailed setup instructions are provided with every purchase."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 px-4 md:px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-900/5 to-black"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            Everything you need to know
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-purple-400 transition-transform duration-500 ease-[cubic-bezier(0.04,0.62,0.23,0.98)] flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.04,0.62,0.23,0.98)] ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="https://discord.gg/hooked"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515a.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0a12.64 12.64 0 00-.617-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057a19.9 19.9 0 005.993 3.03a.078.078 0 00.084-.028a14.09 14.09 0 001.226-1.994a.076.076 0 00-.041-.106a13.107 13.107 0 01-1.872-.892a.077.077 0 01-.008-.128a10.2 10.2 0 00.372-.292a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127a12.299 12.299 0 01-1.873.892a.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028a19.839 19.839 0 006.002-3.03a.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Join our Discord
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
