
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Mail, Phone, MapPin, MessageSquare, ExternalLink, Calendar, Send, Sparkles, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import SEO from './SEO';

interface ContactViewProps {
  onBack: () => void;
  onBook: () => void;
}

const ContactView: React.FC<ContactViewProps> = ({ onBack, onBook }) => {
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ customer_name: '', customer_email: '', customer_message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-[#030712] pt-32 pb-20 px-4 md:px-6">
      <SEO 
        title="Contact SEO Expert | Scale Your Business Leads | Ritehly Quimbo" 
        description="Get in touch with SEO expert Ritehly Quimbo to discuss your next growth engine. ROI-focused strategies for search, ads, and AI." 
      />
      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none"
          >
            Let's Start a <span className="text-blue-500">Growth Engine</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Ready to scale your leads and automate your revenue? Use the form for a project inquiry or book a direct strategy call.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.a 
                href="mailto:Ritehlyquimbo@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-8 glass-morphism rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-5 h-5 text-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-sm font-black text-white uppercase tracking-widest italic mb-1">Email Me</h3>
                <p className="text-xs text-gray-500 font-bold truncate">Ritehlyquimbo@gmail.com</p>
              </motion.a>

              <motion.a 
                href="tel:09611525318"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-8 glass-morphism rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-5 h-5 text-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-sm font-black text-white uppercase tracking-widest italic mb-1">Call Me</h3>
                <p className="text-xs text-gray-500 font-bold">09611525318</p>
              </motion.a>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 glass-morphism rounded-[2.5rem] border border-white/5 flex items-center gap-6"
            >
              <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-widest italic mb-1">Base of Operations</h3>
                <p className="text-xs text-gray-500 font-bold">Cebu, Philippines (Global Remote Service)</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-10 glass-morphism rounded-[3rem] border border-blue-500/20 bg-blue-600/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Calendar className="w-16 h-16 text-blue-500" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">Direct Strategy Session</h3>
              <p className="text-gray-400 text-sm font-medium mb-8 leading-relaxed">
                Skip the back-and-forth. Book a 30-minute discovery call directly into my calendar to discuss your SEO, Paid Ads, or AI Automation goals.
              </p>
              <button 
                onClick={onBook}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl uppercase tracking-widest text-[10px] italic transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex items-center gap-2"
              >
                Open Calendar <ArrowLeft className="w-3 h-3 rotate-180" />
              </button>
            </motion.div>
          </div>

          {/* Right: Actual Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="p-10 md:p-12 glass-morphism rounded-[3rem] border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">Inquiry Form</h2>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Share your project goals</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="customer_name" className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] ml-2">Full Name</label>
                  <input
                    type="text"
                    id="customer_name"
                    name="customer_name"
                    required
                    value={formData.customer_name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 text-white text-sm font-medium focus:border-blue-500/50 focus:bg-white/10 transition-all outline-none placeholder:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="customer_email" className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] ml-2">Email Address</label>
                  <input
                    type="email"
                    id="customer_email"
                    name="customer_email"
                    required
                    value={formData.customer_email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 text-white text-sm font-medium focus:border-blue-500/50 focus:bg-white/10 transition-all outline-none placeholder:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="customer_message" className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] ml-2">Message</label>
                  <textarea
                    id="customer_message"
                    name="customer_message"
                    required
                    value={formData.customer_message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your growth goals..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm font-medium focus:border-blue-500/50 focus:bg-white/10 transition-all outline-none placeholder:text-gray-600 resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full h-16 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-800 disabled:cursor-not-allowed text-white font-black rounded-2xl uppercase tracking-[0.2em] italic transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                  >
                    <AnimatePresence mode="wait">
                      {status === 'loading' ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Processing...</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <span>Send Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <p className="text-xs text-green-200 font-bold">Growth request received! I'll be in touch within 24 hours.</p>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      <p className="text-xs text-red-200 font-bold">{errorMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-center gap-4 text-[10px] text-gray-600 font-bold uppercase tracking-widest pt-4">
                  <Sparkles className="w-3 h-3 text-blue-500" />
                  <span>Secure Submission via Web3Forms</span>
                  <Sparkles className="w-3 h-3 text-blue-500" />
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
