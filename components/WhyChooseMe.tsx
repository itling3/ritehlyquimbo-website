
import React from 'react';

const WhyChooseMe: React.FC = () => {
  const reasons = [
    {
      title: "I Speak Human",
      description: "I pride myself on translating the technical complexities of SEO into plain English. You will never feel left in the dark. I ensure you understand the 'why' behind every recommendation, empowering you to make better business decisions.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Scalable Systems, Not Quick Fixes",
      description: "I refuse to engage in black-hat tactics or short-term spikes that lead to Google penalties. I build organic growth engines designed to withstand algorithm updates and provide sustainable traffic for years to come.",
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Audience Intimacy",
      description: "Before I write a single line of code or draft a keyword list, I study your customers. I dig into their pain points, search habits, and language to ensure we are attracting qualified traffic that actually wants what you offer.",
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Responsive & Reliable",
      description: "When you have a question, you get an answer. I treat your business with the same urgency and care I would my own, acting as an extension of your in-house team rather than an outsourced vendor.",
      icon: (
        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-choose-me" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <div className="md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter italic leading-none">
              Why Choose Me? <br className="hidden md:block" />
              <span className="text-blue-500">(Your Success is My Success)</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
              Hiring an SEO can feel like hiring a magician who refuses to reveal their tricks. I take a different approach. I believe in transparency, education, and building a strategy that grows with you.
            </p>
          </div>
          <div className="md:w-1/3 flex items-center justify-end">
             <div className="flex flex-col items-end gap-2 bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="text-3xl font-black text-blue-500">100%</div>
                <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] text-right">
                    Transparency <br /> & Data Clarity
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {reasons.map((reason, i) => (
            <div key={i} className="glass-morphism p-8 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/20 transition-all duration-500 group">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600/10 transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-4 uppercase italic tracking-tighter">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base font-medium">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Powerful Closing Statement */}
        <div className="relative glass-morphism p-10 md:p-16 rounded-[3rem] border border-blue-500/20 bg-blue-600/5 text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <h4 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter leading-tight relative z-10">
            "I’m not just here to improve your rankings; <br className="hidden md:block" />
            <span className="text-blue-500">I’m here to improve your business.</span>"
          </h4>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
