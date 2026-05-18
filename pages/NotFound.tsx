import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Home, Search, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <SEO 
        title="404 - Page Not Found | Ritehly Quimbo"
        description="The page you are looking for doesn't exist or has been moved."
      />

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8 italic">
            <AlertCircle className="w-3 h-3" />
            Error 404
          </div>

          <h1 className="text-[12rem] md:text-[20rem] font-black leading-none tracking-tighter italic select-none opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            404
          </h1>

          <div className="relative">
             <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-8">
               Lost in the <span className="text-blue-500">Algorithm?</span>
             </h2>
          </div>

          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-lg mx-auto">
            The page you're looking for has been crawled into oblivion or never existed in the first place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-black rounded-xl uppercase tracking-tighter flex items-center justify-center gap-2 hover:scale-105 transition-transform italic"
            >
              <Home className="w-4 h-4" />
              Back to Safety
            </Link>
            <Link 
              to="/services"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl uppercase tracking-tighter flex items-center justify-center gap-2 hover:bg-white/10 transition-all italic"
            >
              <Search className="w-4 h-4" />
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* Decorative Grid/Lines */}
        <div className="mt-24 grid grid-cols-4 gap-4 opacity-10">
          {[1,2,3,4].map(i => (
            <div key={i} className="h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          ))}
        </div>

        <div className="mt-12 text-[10px] font-black text-gray-700 uppercase tracking-[0.6em] italic">
          Ritehly Quimbo • Search Authority
        </div>
      </div>
    </div>
  );
};

export default NotFound;
