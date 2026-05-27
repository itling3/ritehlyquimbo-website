import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Loader2, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
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

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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
        onClose();
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass-morphism border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] p-8 md:p-10"
          >
            {/* Soft gradient backgrounds inside the modal */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/5 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all z-20 cursor-pointer"
              aria-label="Close form"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <div className="text-center">
                <span className="text-[10px] text-blue-400 font-black tracking-[0.2em] uppercase">Limited Time Proposal</span>
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mt-1 mb-2">Claim Your Offer</h2>
                <p className="text-gray-400 text-xs font-semibold max-w-sm mx-auto">
                  Fill out the form below to book your high-performance strategy session.
                </p>
              </div>

              <form id="modal-contact-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group space-y-1.5">
                  <label htmlFor="modal_user_name" className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    type="text"
                    id="modal_user_name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="e.g., Jane Doe"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-gray-600"
                  />
                </div>

                <div className="form-group space-y-1.5">
                  <label htmlFor="modal_user_email" className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    id="modal_user_email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="e.g., jane.doe@example.com"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-gray-600"
                  />
                </div>

                <div className="form-group space-y-1.5">
                  <label htmlFor="modal_user_title" className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Subject / Title
                  </label>
                  <input
                    type="text"
                    id="modal_user_title"
                    value={userTitle}
                    onChange={(e) => setUserTitle(e.target.value)}
                    placeholder="What is this regarding?"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-gray-600"
                  />
                </div>

                <div className="form-group space-y-1.5">
                  <label htmlFor="modal_user_message" className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    id="modal_user_message"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Describe your current site goals or limitations..."
                    required
                    rows={4}
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-gray-600 resize-y min-h-[100px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 mt-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-black uppercase italic tracking-wider text-xs sm:text-sm rounded-xl transition-all shadow-lg hover:shadow-orange-600/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting proposal...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      CLAIM OFFER NOW
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;
