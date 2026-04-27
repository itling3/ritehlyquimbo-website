
import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, ChevronLeft, ExternalLink } from 'lucide-react';
import SEO from './SEO';

interface ResumeViewProps {
  onBack: () => void;
}

const ResumeView: React.FC<ResumeViewProps> = ({ onBack }) => {
  const resumeId = '1WmUL7Xh9Ifjcc1pz-uDihecyKA9OtOOh';
  const previewUrl = `https://drive.google.com/file/d/${resumeId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${resumeId}`;

  return (
    <div className="min-h-screen bg-[#030712] pt-4 md:pt-6 pb-20 px-6">
      <SEO 
        title="SEO Specialist Resume | Growth Engineer Track Record | Ritehly Quimbo" 
        description="View the professional trajectory and technical mastery of Ritehly Quimbo, a top-tier SEO specialist and growth marketing engineer." 
      />
      <div className="max-w-4xl mx-auto">


        <div className="grid lg:grid-cols-[1fr,300px] gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">Professional <span className="text-blue-500">Resume</span></h1>
              <p className="text-gray-400 font-medium">Growth Marketing & Full-Stack SEO Specialist</p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="aspect-[1/1.4] w-full bg-white/5 rounded-3xl border border-white/10 overflow-hidden relative group"
            >
              <iframe 
                src={previewUrl} 
                className="w-full h-full border-none"
                allow="autoplay"
              ></iframe>
              
              {/* Overlay Tip */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <div className="flex flex-col items-center gap-3">
                  <FileText className="w-12 h-12 text-blue-500" />
                  <span className="text-white font-black uppercase tracking-widest text-sm">Interactive Preview</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass-morphism p-8 rounded-3xl border border-white/10 sticky top-32">
              <h3 className="text-xl font-black text-white mb-4 uppercase italic">Ready to Scale?</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Take a closer look at my technical expertise and past performance records in this detailed CV.
              </p>

              <div className="space-y-3">
                <a 
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-blue-500/20"
                >
                  <Download className="w-5 h-5" />
                  <span className="uppercase tracking-widest text-sm italic">Download PDF</span>
                </a>

                <a 
                  href={`https://drive.google.com/file/d/${resumeId}/view?usp=sharing`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-5 bg-white/5 hover:bg-white/10 text-gray-300 font-black rounded-2xl transition-all border border-white/10"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="uppercase tracking-widest text-xs italic">View on Drive</span>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest italic">Open for New Projects</span>
                </div>
                <p className="text-[10px] text-gray-500 uppercase font-bold leading-relaxed tracking-wider">
                  Specializing in PH & International Market Penetration via Enterprise SEO.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResumeView;
