import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <SEO 
        title="Terms of Service | Ritehly Quimbo" 
        description="Review the terms and conditions for using the services provided by Ritehly Quimbo."
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
              Terms of Service
            </h1>
            
            <div className="space-y-8 text-gray-400 leading-relaxed font-medium">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight italic">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight italic">2. Services</h2>
                <p>
                  We provide digital marketing, SEO, and web development services. We reserve the right to modify or discontinue any service at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight italic">3. Intellectual Property</h2>
                <p>
                  All content, trademarks, and data on this website are the property of Ritehly Quimbo and are protected by applicable intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight italic">4. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight italic">5. Payment and Fees</h2>
                <p>
                  Payment terms are specified in individual service agreements. We reserve the right to adjust our pricing with notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight italic">6. Governing Law</h2>
                <p>
                  These terms are governed by and construed in accordance with the laws of the Philippines. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in the Philippines.
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

export default TermsOfService;
