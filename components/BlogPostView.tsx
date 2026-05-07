
import React from 'react';
import SEO from './SEO';
import { BlogPost } from '../types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Link as LinkIcon, Globe, Code } from 'lucide-react';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ post, onBack }) => {
  return (
    <div className="pt-32 pb-20 px-6 animate-in fade-in duration-500">
      <SEO 
        title={post.seoTitle || post.title} 
        description={post.metaDescription || post.description} 
        keywords={post.keywords}
      />
      {post.schema && (
        <script type="application/ld+json">
          {JSON.stringify(post.schema)}
        </script>
      )}
      
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-500 hover:text-white transition-colors uppercase text-xs font-black tracking-widest italic group"
        >
          <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Strategy Blog
        </button>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest italic">
              {post.category}
            </span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
              {post.date}
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none mb-8">
            {post.title}
          </h1>
          
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </header>

        <article className="prose prose-invert max-w-none 
          prose-headings:italic prose-headings:tracking-tighter prose-headings:uppercase prose-headings:text-white
          prose-p:text-gray-400 prose-p:leading-relaxed prose-p:text-lg
          prose-li:text-gray-400 prose-li:text-lg
          prose-strong:text-white prose-strong:font-black prose-strong:italic
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>

        {/* CTA Section */}
        <section className="mt-20 p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-blue-600 to-blue-900 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -mr-48 -mt-48 group-hover:bg-white/20 transition-colors duration-700"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-6 leading-none">
              Ready to Dominate <br/>Your Market?
            </h2>
            <p className="text-blue-100 text-lg font-medium mb-10 max-w-xl">
              Stop guessing and start scaling. Let's build a technical SEO foundation that outranks your competition and drives real revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="px-8 py-5 bg-white text-blue-900 rounded-2xl font-black uppercase tracking-widest italic text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                View SEO Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/pricing" 
                className="px-8 py-5 bg-blue-800/50 border border-white/20 backdrop-blur-sm text-white rounded-2xl font-black uppercase tracking-widest italic text-sm hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
              >
                Check Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Author Bio Section */}
        <section className="mt-20 pt-20 border-t border-white/5">
          <div className="glass-morphism p-8 md:p-12 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl">
                <img 
                  src="https://ritehlyquimbo.com/me.jpg" 
                  alt="Ritehly Quimbo" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop";
                  }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-full border-4 border-black">
                <LinkIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs font-black text-blue-400 uppercase tracking-widest italic leading-none mb-2">Written By</div>
                  <h3 className="text-3xl font-black text-white uppercase italic tracking-tight">{post.author}</h3>
                </div>
                <div className="flex items-center justify-center md:justify-end gap-4">
                  <a href="https://linkedin.com/in/ritehly" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-blue-600 transition-colors rounded-lg group">
                    <LinkIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-black transition-colors rounded-lg group">
                    <Globe className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                  <Link to="/about" className="p-2 bg-white/5 hover:bg-white/10 transition-colors rounded-lg group">
                    <Code className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </Link>
                </div>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed font-medium mb-6">
                Ritehly Quimbo is a Full-Stack SEO & Growth Marketing Specialist based in the Philippines. With over 8 years of experience in technical SEO and business scaling, he helps companies transform their organic search presence into a high-ROI revenue engine.
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 italic">Specializing In:</span>
                {['Technical SEO', 'Local Dominance', 'Growth Marketing'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-300 uppercase tracking-widest">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={onBack}
            className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest italic text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            Explore More Digital Strategies
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostView;
