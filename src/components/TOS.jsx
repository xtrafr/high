import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TOS = () => {
  return (
    <div className="min-h-screen bg-black">
      <nav className="border-b border-white/10 py-6 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            Hooked<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">.wtf</span>
          </Link>
          <Link to="/" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-400 mb-12">Last updated: 2025</p>
            
            <div className="space-y-6 text-gray-300">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 shadow-2xl">
                <p className="leading-relaxed font-semibold text-white text-lg">
                  BY USING OUR SERVICES, YOU AUTOMATICALLY AGREE TO THE TERMS AND CONDITIONS OUTLINED BELOW. FAILURE TO COMPLY MAY RESULT IN PERMANENT RESTRICTIONS AND LEGAL CONSEQUENCES.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-purple-400">⚠️</span> Refund Policy
                </h2>
                <p className="leading-relaxed mb-4 text-gray-300">
                  You are <span className="text-red-400 font-semibold">explicitly NOT eligible for any refund</span> under the following conditions:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>More than <strong className="text-white">12 hours</strong> have passed since your purchase. You must contact us immediately if the product fails to operate as intended.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>You have failed to follow the instructions provided by our team during usage.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>The product is functioning correctly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>You have been <strong className="text-white">banned from Valorant</strong> for any reason and attempt to request a refund.</span>
                  </li>
                </ul>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <p className="leading-relaxed text-red-300">
                    <strong className="text-red-400">IMPORTANT:</strong> Any attempt to bypass this policy and request a refund through <strong>PayPal, Stripe, or any other payment processor</strong> <strong>without prior authorization from Hooked.wtf</strong> constitutes <strong>fraudulent activity</strong>. Legal action may be pursued in such cases. Our refund policy is <strong>strictly enforced</strong> and non-negotiable.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-purple-400">🔄</span> Replacement Policy
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Users must contact us <strong className="text-white">immediately</strong> if a purchased key fails to function. We will provide assistance to resolve operational issues.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-white">Lost or misplaced keys are entirely the responsibility of the user.</strong> Hooked.wtf is under no obligation to replace lost keys or provide any refund. Users are strongly advised to <strong className="text-white">store their keys securely in a location that cannot be accidentally deleted or lost</strong>.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-purple-400">📚</span> Educational Intent
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Products offered by Hooked.wtf are provided <strong className="text-white">for educational purposes only</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Users are responsible for ensuring that their use of the product complies with applicable laws and any third-party terms of service.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Hooked.wtf <strong className="text-white">does not control and is not responsible for</strong> how users utilize the products after purchase.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-purple-400">🔗</span> Third-Party Services
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Hooked.wtf may provide access to or advertise third-party services.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>We are <strong className="text-white">not liable</strong> for any interactions, outcomes, or consequences arising from engagement with third-party services.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Users must review and comply with the terms, policies, and guidelines of any third-party platforms they interact with.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-purple-400">🚫</span> Prohibited Activities
                </h2>
                <p className="leading-relaxed mb-4">
                  Users are <strong className="text-white">strictly prohibited</strong> from using Hooked.wtf services for any unlawful, malicious, or harassing purposes, including but not limited to:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Hacking, phishing, or participating in any form of cybercrime.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Harassment, intimidation, or malicious actions directed at individuals or organizations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Any activity that breaches local, national, or international law.</span>
                  </li>
                </ul>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
                  <p className="leading-relaxed text-orange-300">
                    Violation of this section may result in <strong className="text-orange-400">immediate and permanent termination</strong> of access to Hooked.wtf services and potential legal consequences.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-purple-400">⚖️</span> Limitation of Liability
                </h2>
                <p className="leading-relaxed mb-4">
                  Hooked.wtf shall <strong className="text-white">not be held liable</strong> for any direct, indirect, incidental, or consequential damages arising from the use of its services, including but not limited to:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Loss of profits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Loss of data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Loss of reputation or goodwill</span>
                  </li>
                </ul>
                <p className="leading-relaxed text-gray-400">
                  Users acknowledge and accept that use of Hooked.wtf services is <strong className="text-white">entirely at their own risk</strong>, and liability is <strong className="text-white">strictly limited to the maximum extent permitted by law</strong>.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-purple-400">📝</span> Modifications to Terms
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Hooked.wtf reserves the right to modify, update, or amend these Terms of Service at any time without prior notice.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Users will be notified of significant changes through their account interface or via email.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Continued use of Hooked.wtf services following changes constitutes <strong className="text-white">full acceptance</strong> of the revised Terms.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-purple-400">⚡</span> Legal Enforcement
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>These Terms of Service are <strong className="text-white">legally binding</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Attempting to circumvent the refund policy, including requesting unauthorized refunds via <strong className="text-white">PayPal, Stripe, or any other payment processor</strong>, is considered <strong className="text-white">fraudulent and actionable</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Users agree to resolve any disputes in accordance with these Terms and acknowledge that violations may result in <strong className="text-white">permanent account suspension and legal recourse</strong>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TOS;
