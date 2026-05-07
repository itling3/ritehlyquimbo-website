
import React from 'react';
import SEO from './SEO';
import { BlogPost } from '../types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-500 hover:text-white transition-colors uppercase text-xs font-black tracking-widest italic"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </button>

        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 mb-12 shadow-2xl">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
            <div className="flex items-center gap-4 mb-3 md:mb-4">
              <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest italic">
                {post.category}
              </span>
              <span className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                {post.date}
              </span>
            </div>
            <h1 className="text-2xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
              {post.title}
            </h1>
          </div>
        </div>

        <div className="prose prose-invert max-w-none 
          prose-headings:italic prose-headings:tracking-tighter prose-headings:uppercase prose-headings:text-white
          prose-p:text-gray-400 prose-p:leading-relaxed prose-p:text-base md:text-lg
          prose-li:text-gray-400 prose-li:text-base md:text-lg
          prose-strong:text-white prose-strong:font-black prose-strong:italic
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-white/5 select-none">
              <div className="w-full h-full flex items-center justify-center text-blue-500 font-black italic">RQ</div>
            </div>
            <div>
              <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest italic leading-none mb-1">Author</div>
              <div className="text-white font-bold uppercase tracking-tight">{post.author}</div>
            </div>
          </div>
          
          <button 
            onClick={onBack}
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest italic text-gray-400 hover:text-white hover:bg-white/10 transition-all w-full md:w-auto"
          >
            Explore More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostView;
