
import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Phone, MapPin, Globe, Target, Code, Brain, Rocket, Zap, MessageSquare } from 'lucide-react';
import SEO from './SEO';

interface AboutViewProps {
  onBack: () => void;
  onBook: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onBack, onBook }) => {
  const coreExperience = {
    title: "Primary Focus: SEO Specialist",
    duration: "8 Years",
    focus: "Technical SEO, Authority Building, & Topical Mapping",
    description: "Since 2018, I have dedicated my career to mastering search intelligence. My core expertise lies in architecting deep topical maps and technical SEO frameworks that allow small and medium businesses to outrank massive competitors. I don't just deliver 'traffic'; I build digital assets that own their market and stay there.",
    icon: <Target className="w-8 h-8 text-blue-500" />
  };

  const sideSkills = [
    {
      title: "AI Automation",
      duration: "1 Year",
      focus: "Custom AI Agents & Workflow Engineering",
      icon: <Brain className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Google Ads",
      duration: "2 Years",
      focus: "Search Intelligence & ROI Optimization",
      icon: <Zap className="w-5 h-5 text-yellow-500" />
    },
    {
      title: "Web Development",
      duration: "4 Years",
      focus: "WordPress & Elementor Performance Engines",
      icon: <Code className="w-5 h-5 text-purple-500" />
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/ritehly/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
      color: "hover:text-blue-500"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ritehly-quimbo/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      color: "hover:text-blue-400"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@ritseo",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      color: "hover:text-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] pb-12 md:pb-20">
      <SEO 
        title="About SEO Specialist | Growth Engineer Mission | Ritehly Quimbo" 
        description="Learn about the mission and expertise of Ritehly Quimbo, an SEO specialist focused on building autonomous growth systems." 
      />
      {/* Hero Section with Cover Photo */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_" 
            alt="Ritehly Quimbo Background"
            className="w-full h-full object-cover object-top opacity-30 grayscale blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-end px-4 md:px-6 pb-8 md:pb-12">

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-end gap-6 md:gap-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden border-2 border-white/10 relative z-10 bg-[#0f172a]">
                <img 
                  src="https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_" 
                  alt="Ritehly Quimbo"
                  className="w-full h-full object-cover scale-[1.1] object-top"
                />
              </div>
            </div>
            
            <div className="flex-1 space-y-2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
                Ritehly <span className="text-blue-500">Quimbo</span>
              </h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span className="text-sm md:text-base text-blue-400 font-black uppercase tracking-[0.2em] italic">SEO Specialist (70%) • Growth Engineer (30%)</span>
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-widest">Cebu, Philippines</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-10 md:mt-16 grid lg:grid-cols-3 gap-8 md:gap-12">
        {/* Left Column: Bio & Core Mission */}
        <div className="lg:col-span-2 space-y-8 md:space-y-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tight flex items-center gap-3">
              <span className="w-8 h-[2px] bg-blue-500"></span>
              The 70/30 Growth Strategy
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
              I am Ritehly Quimbo, and I focus 70% of my energy on high-level <span className="text-white font-bold italic">SEO Intelligence</span>. The remaining 30% is dedicated to <span className="text-white font-bold italic">Growth Engineering</span>—building the AI tools, web infrastructure, and Google Ads frameworks that small and medium businesses need to dominate their markets.
            </p>
            <p className="text-gray-500 leading-relaxed">
              With 8 years of dedicated search experience, I help SMB owners eliminate marketing guess-work. I don't just build sites or run ads; I architect <span className="text-gray-300 font-bold italic">Topical Authority lattices</span> that tell search engines exactly why your business is the only logical choice in your niche.
            </p>
          </motion.section>

          {/* Core Spotlight */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-white/5 rounded-[3rem] border border-blue-500/30 relative overflow-hidden group hover:border-blue-500 transition-all"
          >
             <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target className="w-48 h-48 text-blue-500" />
             </div>
             
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                    <Target className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-1">Core: SEO Specialist</h3>
                    <span className="text-sm font-black text-blue-500 uppercase tracking-[0.2em]">70% Focus • 8 Years Mastery</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-400 font-medium text-lg leading-relaxed">Since 2018, I have lived and breathed search intelligence. My core mastery lies in architecting deep topical maps and technical SEO frameworks that allow small businesses to outrank enterprise giants.</p>
                  <div className="text-xs text-blue-400 font-black uppercase tracking-widest italic">Technical SEO, Authority Building, & Topical Mapping</div>
                </div>
              </div>
          </motion.section>

          {/* Side Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] pl-2 flex items-center gap-3">
              <span className="w-4 h-[1px] bg-gray-700"></span> 30% Growth Engineering Arsenal
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
               {sideSkills.map((skill, i) => (
                  <div key={i} className="p-6 glass-morphism rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-2 bg-white/5 rounded-xl group-hover:bg-blue-600/10 transition-colors">
                        {skill.icon}
                      </div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{skill.duration}</span>
                    </div>
                    <h3 className="text-sm font-black text-white uppercase italic tracking-tight mb-1">{skill.title}</h3>
                    <p className="text-[10px] text-gray-500 font-medium leading-relaxed">{skill.focus}</p>
                  </div>
               ))}
            </div>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 glass-morphism rounded-[3rem] border border-blue-500/20 bg-blue-600/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Brain className="w-24 h-24 text-blue-500" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">AI-Powered <span className="text-blue-500">Innovation</span></h2>
              <p className="text-gray-400 font-medium leading-relaxed mb-6">
                I don't just build websites; I build <span className="text-white italic underline decoration-blue-500/30">digital employees that never sleep</span>. My passion is providing SMBs with the same level of automation usually reserved for enterprise giants—handling everything from lead qualification to technical SEO auditing on complete autopilot.
              </p>
              <button 
                onClick={onBook}
                className="flex items-center gap-2 text-blue-500 font-black uppercase tracking-widest text-[10px] italic hover:gap-4 transition-all"
              >
                Discuss a custom tool <Rocket className="w-4 h-4" />
              </button>
            </div>
          </motion.section>
        </div>

        {/* Right Column: Contact & Socials */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 glass-morphism rounded-[2.5rem] border border-white/10 space-y-8"
          >
            <div>
              <h3 className="text-white font-black uppercase italic tracking-widest text-xs mb-6 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-blue-500"></span> Direct Contact
              </h3>
              <div className="space-y-4">
                <a href="mailto:Ritehlyquimbo@gmail.com" className="flex items-center gap-4 group p-3 hover:bg-white/5 rounded-2xl transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Email</div>
                    <div className="text-xs font-bold text-white truncate italic">Ritehlyquimbo@gmail.com</div>
                  </div>
                </a>
                <a href="tel:09611525318" className="flex items-center gap-4 group p-3 hover:bg-white/5 rounded-2xl transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Phone</div>
                    <div className="text-xs font-bold text-white italic">09611525318</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-3 rounded-2xl transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Location</div>
                    <div className="text-xs font-bold text-white italic">Cebu, Philippines</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-black uppercase italic tracking-widest text-xs mb-6 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-blue-500"></span> Social Intelligence
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link, i) => (
                  <a 
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-2xl glass-morphism border border-white/5 flex items-center justify-center text-gray-400 transition-all hover:scale-110 hover:border-blue-500/30 ${link.color}`}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <button 
              onClick={onBook}
              className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl uppercase tracking-widest text-xs italic transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]"
            >
              Let's Build Something New
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 glass-morphism rounded-[2.5rem] border border-white/5 text-center space-y-4"
          >
            <MessageSquare className="w-8 h-8 text-blue-500 mx-auto" />
            <h4 className="text-white font-black uppercase italic text-sm">Need a quick consultation?</h4>
            <p className="text-xs text-gray-500 font-medium">Available for small & medium business strategy audits.</p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdb7q2wXizC43nv4NnNxfwfGQ1xLhqNqcBQ24uu4VxJGz9E_A/viewform?usp=preview" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-[10px] text-blue-500 font-black uppercase tracking-widest underline underline-offset-4"
            >
              Open Google Form →
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
