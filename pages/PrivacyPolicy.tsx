import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <SEO 
        title="Privacy Policy | Ritehly Quimbo" 
        description="Learn how we collect, use, and protect your personal information at Ritehly Quimbo."
      />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-morphism p-12 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            
            <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-8 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent underline decoration-blue-500 underline-offset-8">
              Privacy Policy
            </h1>
            
            <div className="space-y-8 text-gray-400 leading-relaxed font-medium">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight italic">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you book a consultation, fill out a contact form, or sign up for our newsletter. This may include your name, email address, phone number, and business details.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight italic">2. How We Use Your Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, to communicate with you about your projects, and to provide you with marketing and promotional materials that may be of interest to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight italic">3. Information Sharing</h2>
                <p>
                  We do not sell or rent your personal information to third parties. We may share your information with service providers who perform services on our behalf, or when required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight italic">4. Security</h2>
                <p>
                  We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight italic">5. Your Choices</h2>
                <p>
                  You may opt out of receiving promotional emails from us by following the instructions in those emails. You may also contact us to request access to, correction of, or deletion of personal information that you have provided to us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight italic">6. Updates to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.
                </p>
              </section>

              <div className="pt-12 border-t border-white/5">
                <p className="text-xs font-black uppercase tracking-widest text-gray-600 italic">
                  Last Updated: May 20, 2024
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
