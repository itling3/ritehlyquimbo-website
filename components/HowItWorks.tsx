
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      phase: "01",
      title: "Strategic Discovery",
      description: "We start by dissecting your business DNA. I analyze your offer, your margins, and your competitors to find the 'hidden' growth levers that most agencies overlook.",
      tags: ["Market Analysis", "Intent Mapping"]
    },
    {
      phase: "02",
      title: "Technical Blueprint",
      description: "A comprehensive site audit meets a 12-month aggressive roadmap. We define the exact technical fixes, keyword clusters, and content silos needed for rank dominance.",
      tags: ["SEO Audit", "Roadmap Design"]
    },
    {
      phase: "03",
      title: "Systems Integration",
      description: "The build phase. I deploy the technical architecture, AI-automated content workflows, and high-performance web development that forms your growth engine.",
      tags: ["Dev & SEO", "AI Ops"]
    },
    {
      phase: "04",
      title: "Scaling & Domination",
      description: "We don't stop at ranking. I monitor real-time conversion data and recursively optimize your systems to ensure your traffic compounds into predictable revenue.",
      tags: ["ROI Scaling", "Ongoing Opto"]
    }
  ];

  return (
    <section id="process" className="py-24 px-6 relative bg-black/20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-4 text-white uppercase italic tracking-tighter">
            The <span className="gradient-text">Growth Path</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto uppercase text-xs font-bold tracking-[0.3em]">
            A systematic journey from obscurity to market authority
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                {/* Connector for Mobile/Tablet */}
                {i !== steps.length - 1 && (
                  <div className="lg:hidden absolute bottom-[-32px] left-1/2 -translate-x-1/2 w-[1px] h-8 bg-blue-500/20"></div>
                )}

                <div className="glass-morphism p-8 rounded-[2rem] border border-white/5 h-full transition-all duration-500 hover:border-blue-500/30 group-hover:-translate-y-2 flex flex-col">
                  {/* Phase Indicator */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 font-black italic">
                      {step.phase}
                    </div>
                    <div className="h-[1px] flex-1 mx-4 bg-white/5 group-hover:bg-blue-500/20 transition-colors"></div>
                  </div>

                  <h3 className="text-xl font-black text-white mb-4 uppercase italic tracking-tighter">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {step.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {step.tags.map((tag, j) => (
                      <span key={j} className="text-[9px] font-black uppercase tracking-widest text-blue-400/60 group-hover:text-blue-400 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action for Process */}
        <div className="mt-20 text-center">
          <a 
            href="tel:09611525318" 
            className="inline-flex items-center gap-4 text-xs font-black text-gray-400 hover:text-white uppercase tracking-[0.3em] transition-all group"
          >
            Start Your Journey Today
            <span className="w-8 h-[1px] bg-blue-500 group-hover:w-12 transition-all"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
