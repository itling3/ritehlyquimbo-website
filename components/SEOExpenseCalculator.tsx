
import React, { useState, useMemo } from 'react';

interface SEOExpenseCalculatorProps {
  onExecute: () => void;
}

const SEOExpenseCalculator: React.FC<SEOExpenseCalculatorProps> = ({ onExecute }) => {
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(150);
  const [toolsBudget, setToolsBudget] = useState(300);
  const [contentBudget, setContentBudget] = useState(1000);
  const [estimatedConversionRate, setConversionRate] = useState(2);
  const [avgLeadValue, setLeadValue] = useState(500);

  const monthlyInvestment = useMemo(() => {
    return (hours * rate) + toolsBudget + contentBudget;
  }, [hours, rate, toolsBudget, contentBudget]);

  const annualInvestment = monthlyInvestment * 12;
  const estimatedNewVisits = hours * 50; 
  const projectedMonthlyRevenue = (estimatedNewVisits * (estimatedConversionRate / 100)) * avgLeadValue;
  const roiMultiplier = monthlyInvestment > 0 ? (projectedMonthlyRevenue / monthlyInvestment).toFixed(1) : 0;

  return (
    <section id="calculator" className="py-14 md:py-24 px-4 md:px-6 bg-black/40 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tighter italic">SEO Expense & ROI Calculator</h2>
          <p className="text-gray-300 font-bold max-w-2xl mx-auto uppercase text-xs tracking-[0.2em]">Estimate your marketing investment and project potential growth.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 space-y-8 glass-morphism p-8 rounded-3xl border border-white/10">
            <div>
              <div className="flex justify-between mb-4">
                <label htmlFor="calc-hours" className="text-sm font-black text-gray-200 uppercase tracking-widest">Monthly Specialist Hours</label>
                <span className="text-blue-400 font-black tracking-tighter text-xl">{hours} hrs</span>
              </div>
              <input 
                id="calc-hours"
                type="range" min="5" max="100" step="5" value={hours} 
                onChange={(e) => setHours(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label htmlFor="calc-rate" className="text-sm font-black text-gray-200 uppercase tracking-widest">Hourly Rate (USD)</label>
                <span className="text-blue-400 font-black tracking-tighter text-xl">${rate}/hr</span>
              </div>
              <input 
                id="calc-rate"
                type="range" min="7" max="500" step="1" value={rate} 
                onChange={(e) => setRate(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="calc-tools" className="block text-xs font-black text-gray-300 mb-2 uppercase tracking-widest">Tools & Data Budget</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 font-bold">$</span>
                  <input 
                    id="calc-tools"
                    type="number" value={toolsBudget} 
                    onChange={(e) => setToolsBudget(parseInt(e.target.value) || 0)}
                    className="w-full bg-white/5 border border-white/20 rounded-xl pl-8 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white font-bold"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="calc-content" className="block text-xs font-black text-gray-300 mb-2 uppercase tracking-widest">Content Production</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 font-bold">$</span>
                  <input 
                    id="calc-content"
                    type="number" value={contentBudget} 
                    onChange={(e) => setContentBudget(parseInt(e.target.value) || 0)}
                    className="w-full bg-white/5 border border-white/20 rounded-xl pl-8 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white font-bold"
                  />
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-2">ROI Projections</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="calc-conv" className="block text-xs font-black text-gray-300 mb-2 uppercase tracking-widest">Target Conv. Rate (%)</label>
                  <input 
                    id="calc-conv"
                    type="number" step="0.1" value={estimatedConversionRate} 
                    onChange={(e) => setConversionRate(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white font-bold"
                  />
                </div>
                <div>
                  <label htmlFor="calc-value" className="block text-xs font-black text-gray-300 mb-2 uppercase tracking-widest">Avg. Customer Value</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 font-bold">$</span>
                    <input 
                      id="calc-value"
                      type="number" value={avgLeadValue} 
                      onChange={(e) => setLeadValue(parseInt(e.target.value) || 0)}
                      className="w-full bg-white/5 border border-white/20 rounded-xl pl-8 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white font-bold"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="glass-morphism p-8 rounded-3xl border border-blue-500/20 bg-blue-500/5">
              <div className="mb-6">
                <div className="text-[10px] text-blue-400 font-black uppercase tracking-widest mb-2">Monthly Investment</div>
                <div className="text-5xl font-black text-white italic tracking-tighter">${monthlyInvestment.toLocaleString()}</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-gray-400">Annual Total:</span>
                  <span className="text-white">${annualInvestment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-gray-400">Cost per Day:</span>
                  <span className="text-white">${(monthlyInvestment / 30).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="glass-morphism p-8 rounded-3xl border border-purple-500/20 bg-purple-500/5">
              <div className="mb-6">
                <div className="text-[10px] text-purple-400 font-black uppercase tracking-widest mb-2">Estimated Growth Potential</div>
                <div className="text-4xl font-black text-white italic tracking-tighter">${projectedMonthlyRevenue.toLocaleString()} <span className="text-lg font-normal text-gray-500">/mo</span></div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-[10px] font-black uppercase tracking-widest w-fit">
                Approx. {roiMultiplier}x ROI Potential
              </div>
            </div>

            <button 
              onClick={onExecute}
              className="w-full py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-orange-500/30 text-lg uppercase tracking-tighter"
            >
              Execute This Strategy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOExpenseCalculator;
