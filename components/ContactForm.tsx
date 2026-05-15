
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Loader2, User, Mail, Globe, MessageSquare } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Simulate API call to /api/contact (we will add this to server.ts)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', website: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-12 text-center space-y-6"
      >
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-white uppercase italic">Message Transmitted</h3>
          <p className="text-gray-400 text-sm font-medium">I've received your data. Expect a response within 24 hours.</p>
        </div>
        <button 
          onClick={() => setStatus('idle')}
          className="text-blue-500 font-black uppercase tracking-widest text-[10px] italic hover:text-blue-400 transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2 italic">Full Name</label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-blue-500 transition-colors" />
            <input 
              required
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500 transition-all font-medium"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2 italic">Email Address</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-blue-500 transition-colors" />
            <input 
              required
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500 transition-all font-medium"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2 italic">Website / Domain</label>
        <div className="relative group">
          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-blue-500 transition-colors" />
          <input 
            type="url"
            placeholder="https://example.com"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500 transition-all font-medium"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2 italic">Project Brief</label>
        <div className="relative group">
          <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-gray-600 group-focus-within:text-blue-500 transition-colors" />
          <textarea 
            required
            rows={4}
            placeholder="Describe your current bottleneck..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500 transition-all font-medium resize-none"
          />
        </div>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-xs font-bold animate-shake">
          <AlertCircle className="w-4 h-4" />
          Failed to transmit. Please check your connection or retry later.
        </div>
      )}

      <button 
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-black rounded-2xl uppercase tracking-widest text-sm italic transition-all flex items-center justify-center gap-3 group shadow-xl shadow-blue-600/20 active:scale-[0.98]"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Transmitting...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            Initialize Connection
          </>
        )}
      </button>

      <p className="text-center text-[9px] text-gray-600 uppercase font-black tracking-widest italic">
        Data encrypted. Confidential growth strategy session.
      </p>
    </form>
  );
};

export default ContactForm;
