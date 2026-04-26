
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
        title="AI Automation Pricing | High-Performance Marketing Ops" 
        description="Scale your marketing operations with AI-driven automation. See our pricing plans for custom AI workflows, agents, and autonomous growth systems." 
        keywords="ai automation pricing, marketing automation cost, n8n workflow services, ai agent development, business automation plans"
      />
      <AIAutomationPricingView onBack={() => navigate('/')} onBook={onBook} onForm={onForm} />
    </div>
  );
};

export default PricingAIPage;
