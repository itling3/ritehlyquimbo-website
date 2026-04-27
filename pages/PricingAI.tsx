
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import AIAutomationPricingView from '../components/AIAutomationPricingView';

interface PricingAIPageProps {
  onBook: (e?: React.MouseEvent) => void;
  onForm: (e?: React.MouseEvent) => void;
}

const PricingAIPage: React.FC<PricingAIPageProps> = ({ onBook, onForm }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SEO 
        title="AI Automation Pricing | Invest in Efficient Business Scaling" 
        description="Choose an AI automation plan that fits your workflow. Automate your repetitive tasks and focus on high-level growth." 
        keywords="ai automation pricing, business scaling, efficient workflow, task automation, growth focused ai, ritehly quimbo"
      />
      <AIAutomationPricingView onBack={() => navigate('/')} onBook={onBook} onForm={onForm} />
    </div>
  );
};

export default PricingAIPage;
