
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from './SEO';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-4">
      <SEO 
        title="404 - Page Not Found" 
        description="The page you are looking for does not exist. Return to Ritehly Quimbo's main site for SEO and Growth solutions." 
      />
      
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-500 font-black text-8xl md:text-9xl mb-4 block italic select-none">404</span>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">
            This Page <span className="text-blue-500">Does Not Exist</span>
          </h1>
          <p className="text-gray-400 max-w-md mx-auto mb-10 text-lg">
            Sorry, the page you are looking for could not be found. It's just an accident that was not intentional.
          </p>
          
          <button
            onClick={() => navigate('/')}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-black text-white uppercase italic tracking-tighter overflow-hidden rounded-full transition-all duration-300"
          >
            <div className="absolute inset-0 bg-blue-600 transition-all duration-300 group-hover:bg-blue-700"></div>
            <span className="relative flex items-center gap-2">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </span>
          </button>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    </div>
  );
};

export default NotFound;
