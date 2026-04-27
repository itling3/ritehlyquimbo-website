
export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  industry: string;
  results: {
    traffic: string;
    keywords: string;
    revenue: string;
  };
  chartData: { name: string; value: number }[];
  description: string;
  metaDescription?: string;
  keywords?: string;
  image: string;
  challenge?: string;
  strategy?: string;
  outcome?: string;
  keyActionPoints?: string[];
  permalink?: string;
}

export interface AuditResult {
  score: number;
  recommendations: string[];
  competitiveAnalysis: string;
  roadmap: string;
}

export enum ServiceType {
  TECHNICAL = 'Technical SEO',
  CONTENT = 'Content Strategy',
  BACKLINKS = 'Link Building',
  LOCAL = 'Local SEO'
}

export interface ServiceContent {
  id: string;
  slug: string;
  title: string;
  icon: string;
  description: string;
  metaDescription?: string;
  keywords?: string;
  painPoint: string;
  problem: string;
  solution: string;
  importance: string;
  features: string[];
  faqs?: { question: string; answer: string }[];
  pricingId?: string;
  permalink?: string;
}
