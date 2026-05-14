
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, Terminal } from 'lucide-react';
import { WEB_DEVELOPMENT_PORTFOLIO } from '../constants';

const WebPortfolio: React.FC = () => {
  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-6">
              WEB <br />
              <span className="text-purple-500">DEVELOPMENT</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-medium italic leading-relaxed">
              High-performance, SEO-first websites built for local dominance and conversion. Every pixel is engineered for speed and search visibility.
            </p>
          </div>
          <div className="flex items-center gap-4 border border-white/10 px-6 py-4 rounded-2xl bg-white/5">
            <Terminal className="w-5 h-5 text-purple-500" />
            <span className="text-[10px] font-black text-white uppercase tracking-widest italic leading-none pt-0.5">
              React + Tailwind + GSC Ready
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WEB_DEVELOPMENT_PORTFOLIO.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-6 hover:bg-white/[0.04] transition-all flex flex-col h-full overflow-hidden"
            >
              <div className="relative mb-6 rounded-3xl overflow-hidden aspect-video bg-gray-900 border border-white/5 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-white text-black font-black rounded-xl flex items-center justify-center gap-2 uppercase italic tracking-tighter text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    View Live Site <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium italic leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="text-[9px] font-black text-purple-400 uppercase tracking-widest italic border border-purple-500/20 px-2.5 py-1 rounded-md bg-purple-500/5 group-hover:bg-purple-500/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Verification Footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 opacity-40">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="h-6 grayscale" alt="React" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" className="h-4 grayscale" alt="Tailwind" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Firebase_Logo.svg" className="h-5 grayscale" alt="Firebase" />
          </div>
          <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] italic">
            © 2026 Web Development Excellence • Ritehly Quimbo
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebPortfolio;
