
import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Calendar, Cpu, Workflow, Boxes, ShieldCheck, Microscope, LineChart, Zap } from 'lucide-react';
import SEO from './SEO';

interface AIAutomationPricingViewProps {
  onBack: () => void;
  onBook: () => void;
  onForm?: () => void;
}

const AIAutomationPricingView: React.FC<AIAutomationPricingViewProps> = ({ onBack, onBook, onForm }) => {
  const hourlyRates = [
    {
      role: "AI Strategy & Scoping",
      rate: "$250 – $400 / hr",
      bestFor: "Identifying high-ROI automation opportunities and mapping architecture.",
      icon: <Microscope className="w-5 h-5 text-blue-500" />
    },
    {
      role: "Senior AI Implementation",
      rate: "$150 – $250 / hr",
      bestFor: "Building complex agents, API integrations, and custom RAG systems.",
      icon: <Cpu className="w-5 h-5 text-purple-500" />
    },
    {
      role: "Support & Optimization",
      rate: "$100 – $150 / hr",
      bestFor: "Maintenance, prompt fine-tuning, and performance monitoring.",
      icon: <Zap className="w-5 h-5 text-blue-400" />
    }
  ];

  const tiers = [
    {
      name: "The AI Kickstart",
      subtitle: "MVP Tier",
      price: "$5,000 – $10,000",
      timeline: "1–3 weeks",
      icon: <Boxes className="w-6 h-6 text-blue-500" />,
      features: [
        "One core automated workflow (e.g., Automated Lead Qualification)",
        "Integration between 2–3 apps (e.g., Gmail → CRM → Slack)",
        "Basic AI Agent setup (standard LLM)",
        "Technical documentation & handover"
      ]
    },
    {
      name: "The Workflow Engine",
      subtitle: "Standard Tier",
      price: "$15,000 – $35,000",
      timeline: "4–8 weeks",
      isPopular: true,
      icon: <Workflow className="w-6 h-6 text-purple-500" />,
      features: [
        "Multi-step autonomous agents (Researchers, Writers, Pipeline Managers)",
        "Custom Knowledge Base (RAG) implementation",
        "Proprietary company data integration",
        "Error handling & safety guardrails",
        "Human-in-the-loop checkpoints"
      ]
    },
    {
      name: "Enterprise Agentic System",
      subtitle: "Enterprise Tier",
      price: "$50,000 – $150,000+",
      timeline: "3–6 months",
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      features: [
        "Full department-wide automation (CS + Inventory + Logistics)",
        "Multi-agent orchestration frameworks",
        "Specialized agents communication logic",
        "Custom internal UI / Performance Dashboards",
        "Deep enterprise security & compliance",
        "Dedicated implementation team"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] pt-32 pb-20 px-4 md:px-6">
      <SEO 
        title="AI Automation Pricing | High-Performance Marketing Ops | Ritehly Quimbo" 
        description="Scale your marketing operations with AI-driven automation. See our pricing plans for custom AI workflows and growth systems." 
      />
      <div className="max-w-7xl mx-auto">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-widest italic">Return to home</span>
        </motion.button>

        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none"
          >
            AI Automation <span className="text-blue-500">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Don't just build a bot. Build an AI-driven growth machine. ROI-focused, agentic architectures designed for scalability.
          </motion.p>
        </div>

        {/* Hourly Rates Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/5 pb-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
                1. Hourly <span className="text-blue-500">Consulting</span>
              </h2>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest leading-none">Strategy Sessions • Workflow Audits • Training</p>
            </div>
            <div className="bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-xl">
              <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] italic">Pro Tip: Start with a paid $1,500 Audit</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {hourlyRates.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-morphism p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all flex flex-col h-full group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-black uppercase italic tracking-tight text-sm leading-none mb-1">{item.role}</h3>
                    <div className="text-blue-500 font-black text-lg italic tracking-tighter leading-none">{item.rate}</div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-medium leading-relaxed flex-1">
                  {item.bestFor}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Tiers Section */}
        <div className="mb-24">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
              2. Per-Project <span className="text-blue-500">Tiered</span> Pricing
            </h2>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest leading-none italic">Build → Deploy → Optimize Phase Management</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className={`relative glass-morphism p-8 md:p-10 rounded-[2.5rem] border flex flex-col h-full group transition-all ${
                  tier.isPopular ? 'border-blue-500/50 bg-blue-600/5' : 'border-white/5'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/30 italic">
                    Preferred by Clients
                  </div>
                )}

                <div className="mb-8 flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-1">{tier.name}</h3>
                    <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{tier.subtitle}</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                    {tier.icon}
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-3xl font-black text-white italic mb-2 tracking-tighter">{tier.price}</div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                    <Calendar className="w-3 h-3 text-gray-500" />
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{tier.timeline}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-1">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex gap-3">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span className="text-xs text-gray-300 font-medium leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={onBook}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] italic transition-all active:scale-[0.98] ${
                    tier.isPopular 
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/20' 
                      : 'bg-white/10 hover:bg-white/15 text-white'
                  }`}
                >
                  Request {tier.subtitle} Proposal
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Retainer & Performance Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="p-10 glass-morphism rounded-[3rem] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
              <RefreshCw className="w-12 h-12 text-blue-500/10" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">
              3. Recurring <span className="text-blue-500">Efficiency</span> Retainer
            </h2>
            <div className="text-2xl font-black text-blue-500 italic mb-6 tracking-tighter">$1,000 – $5,000 / month</div>
            <p className="text-gray-400 text-sm font-medium mb-8 leading-relaxed">
              Automations require care. We manage model drift, fine-tune prompts, and minimize API overhead to ensure your "Care Package" keeps you efficient.
            </p>
            <button 
              onClick={onBook}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-black rounded-xl uppercase tracking-widest text-[10px] italic transition-all"
            >
              Learn About AI Care →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="p-10 glass-morphism rounded-[3rem] border border-blue-500/30 bg-blue-600/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
              <LineChart className="w-12 h-12 text-blue-500/20" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">
              The <span className="text-blue-500">Performance</span> Model
            </h2>
            <div className="text-2xl font-black text-blue-500 italic mb-6 tracking-tighter">10% / Revenue Generated</div>
            <p className="text-gray-400 text-sm font-medium mb-8 leading-relaxed">
              For high-scale systems, we charge a percentage of labor savings or revenue growth. We win only when your automation produces absolute proof of profit.
            </p>
            <button 
              onClick={onBook}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl uppercase tracking-widest text-[10px] italic transition-all shadow-lg shadow-blue-600/20"
            >
              Discuss Performance Deal →
            </button>
          </motion.div>
        </div>

        {/* Justification Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4">Why Invest in <span className="text-blue-500">My Systems?</span></h2>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">The "Expert Edge" in AI Automation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 glass-morphism rounded-3xl border border-white/5">
              <h3 className="text-lg font-black text-white uppercase italic tracking-tight mb-4">ROI-First Delivery</h3>
              <p className="text-[11px] text-gray-500 font-medium leading-relaxed italic">
                "A $20,000 automation saving 80 hours/mo at $50/hr pays for itself in just 5 months. After that, it's 100% pure profit margin."
              </p>
            </div>
            <div className="p-8 glass-morphism rounded-3xl border border-white/5">
              <h3 className="text-lg font-black text-white uppercase italic tracking-tight mb-4">WordPress Dominance</h3>
              <p className="text-[11px] text-gray-500 font-medium leading-relaxed italic">
                Our automations live directly on your WordPress/Elementor site. We turn your domain into a 24/7 autonomous employee.
              </p>
            </div>
            <div className="p-8 glass-morphism rounded-3xl border border-white/5">
              <h3 className="text-lg font-black text-white uppercase italic tracking-tight mb-4">Agentic Frameworks</h3>
              <p className="text-[11px] text-gray-500 font-medium leading-relaxed italic">
                We use LangChain & CrewAI for reliability. These aren't simple "if-else" bots; they are reasoning systems that handle edge cases.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-10 md:p-16 glass-morphism rounded-[3rem] border border-white/10 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">
              Start with an <span className="text-blue-500">Automation Audit</span>
            </h2>
            <p className="text-gray-400 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              $1,500 for a deep dive into your data and workflows. No commitment. If you hire us for the full build, we credit 100% of this fee toward your final project cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={onBook}
                className="px-10 py-6 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl uppercase tracking-widest text-sm italic shadow-2xl hover:scale-[1.05] transition-all active:scale-[0.95]"
              >
                Schedule $1,500 Audit
              </button>
              <button 
                onClick={onForm}
                className="px-10 py-6 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl uppercase tracking-widest text-sm italic transition-all active:scale-[0.95] border border-white/10"
              >
                Custom Project Inquiry
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIAutomationPricingView;

const RefreshCw: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);
