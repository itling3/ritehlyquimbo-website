
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { SERVICE_DETAILS, CASE_STUDIES } from '../constants';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') return null;

  const getBreadcrumbName = (path: string, index: number) => {
    const fullPath = `/${pathnames.slice(0, index + 1).join('/')}`;

    // Static mappings
    const staticMap: Record<string, string> = {
      'about': 'About',
      'services': 'Services',
      'portfolio': 'Portfolio',
      'contact': 'Contact',
      'resume': 'Resume',
      'pricing': 'Pricing',
      'local-seo-strategy': 'Local SEO Strategy',
      'ai-automation-plans': 'AI Automation Plans',
      'google-ads-sem': 'Google Ads & SEM',
      'web-dev-packages': 'Web Dev Packages',
      'cms-seo': 'CMS SEO',
    };

    if (staticMap[path]) return staticMap[path];

    // Dynamic mappings for services
    if (pathnames[index - 1] === 'services' || pathnames[index - 1] === 'cms-seo') {
      const service = Object.values(SERVICE_DETAILS).find((s) => s.slug === path);
      if (service) return service.title;
    }

    // Dynamic mappings for portfolio
    if (pathnames[index - 1] === 'portfolio') {
      const study = CASE_STUDIES.find((s) => s.slug === path);
      if (study) return study.title;
    }

    // Fallback: Capitalize and replace hyphens
    return path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 md:px-6 pt-6 pb-2 relative z-10">
      <div className="inline-flex items-center glass-morphism px-4 py-2 rounded-xl border border-white/5 shadow-2xl">
        <ol className="flex items-center space-x-2 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">
        <li className="flex items-center">
          <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-1">
            <Home className="w-3 h-3 md:w-3.5 md:h-3.5" />
            <span className="hidden md:inline">Home</span>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to} className="flex items-center">
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4 mx-1 text-gray-700" />
              {last ? (
                <span className="text-white truncate max-w-[150px] md:max-w-none">
                  {getBreadcrumbName(value, index)}
                </span>
              ) : (
                <Link to={to} className="hover:text-blue-400 transition-colors whitespace-nowrap">
                  {getBreadcrumbName(value, index)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
