
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Phone, MapPin, MessageSquare, ExternalLink, Calendar, Send, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import SEO from './SEO';
import emailjs from '@emailjs/browser';

interface ContactViewProps {
  onBack: () => void;
  onBook: () => void;
}

const ContactView: React.FC<ContactViewProps> = ({ onBack, onBook }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userTitle, setUserTitle] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Initialize EmailJS with Public Key
    emailjs.init("2u38pcxlm3qFJZwF2");
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Map fields exactly to your EmailJS template variables
    const templateParams = {
      name: userName,
      email: userEmail,
      title: userTitle,
      message: userMessage
    };

    // Send the email via EmailJS
    emailjs.send('service_5agas0d', 'template_4ueajd1', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setUserName('');
        setUserEmail('');
        setUserTitle('');
        setUserMessage('');
        alert('Your message has been sent successfully!');
      }, function(error) {
        console.log('FAILED...', error);
        setSubmitStatus('error');
        alert('Failed to send the message. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <div className="min-h-screen bg-[#030712] pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
      <SEO 
        title="Contact SEO Expert | Scale Your Business Leads | Ritehly Quimbo" 
        description="Get in touch with SEO expert Ritehly Quimbo to discuss your next growth engine. ROI-focused strategies for search, ads, and AI." 
      />
      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-10 md:mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-4 md:mb-6 leading-none"
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

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
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
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl uppercase tracking-widest text-[10px] italic transition-all shadow-lg shadow-orange-500/20 active:scale-95"
              >
                Open Calendar →
              </button>
            </motion.div>
          </div>

          {/* Right: Interactive Contact Form (EmailJS) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="p-8 md:p-10 glass-morphism rounded-[2.5rem] border border-white/10 relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-2">Get in Touch</h2>
                <p className="text-gray-400 text-xs font-semibold max-w-sm mx-auto mb-6">
                  Fill out the form below to initiate organic search & AI platform scaling.
                </p>
              </div>

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group space-y-1.5">
                  <label htmlFor="user_name" className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="user_name" 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="e.g., Jane Doe" 
                    required
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-gray-600"
                  />
                </div>

                <div className="form-group space-y-1.5">
                  <label htmlFor="user_email" className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="user_email" 
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="e.g., jane.doe@example.com" 
                    required
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-gray-600"
                  />
                </div>

                <div className="form-group space-y-1.5">
                  <label htmlFor="user_title" className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Subject / Title
                  </label>
                  <input 
                    type="text" 
                    id="user_title" 
                    value={userTitle}
                    onChange={(e) => setUserTitle(e.target.value)}
                    placeholder="What is this regarding?" 
                    required
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-gray-600"
                  />
                </div>

                <div className="form-group space-y-1.5">
                  <label htmlFor="user_message" className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea 
                    id="user_message" 
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Type your message here..." 
                    required
                    rows={4}
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-gray-600 resize-y min-h-[100px]"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 mt-2 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase italic tracking-wider text-xs sm:text-sm rounded-xl transition-all shadow-lg hover:shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2.5 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  Sent successfully!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2.5 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-center justify-center">
                  Failed to send. Please try again later.
                </div>
              )}

              <div className="pt-4 border-t border-white/5 text-center">
                <p className="text-[10px] text-gray-500 font-bold mb-2 uppercase tracking-wider">
                  Or complete our detailed workbook
                </p>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdb7q2wXizC43nv4NnNxfwfGQ1xLhqNqcBQ24uu4VxJGz9E_A/viewform?usp=preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-white transition-colors uppercase font-black italic tracking-wider"
                >
                  Detailed Questionnaire Form <ExternalLink className="w-3.5 h-3.5 text-blue-500" />
                </a>
              </div>

              <div className="pt-4 flex items-center justify-center gap-4 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-blue-500" />
                <span>Response time: &lt; 24 Hours</span>
                <Sparkles className="w-3 h-3 text-blue-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
