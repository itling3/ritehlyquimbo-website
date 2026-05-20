
import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
      <SEO 
        title="SEO & Growth Marketing Blog | Ritehly Quimbo" 
        description="Expert insights on SEO, Local SEO, and Growth Marketing to help businesses in the Philippines scale their organic visibility."
      />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-20">
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-4 md:mb-6 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent underline decoration-blue-500 underline-offset-8">
            The Digital Silo
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Deep dives into search psychology, technical excellence, and hyper-local dominance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col h-full"
            >
              <Link to={`/blog/${post.slug}`} className="block relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 mb-6 shadow-2xl">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-white rounded-full text-[9px] font-black uppercase tracking-widest italic">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="flex-1">
                <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest italic mb-2">
                  {post.date}
                </div>
                <Link to={`/blog/${post.slug}`} className="block group-hover:text-blue-400 transition-colors">
                  <h2 className="text-2xl font-black uppercase italic tracking-tighter leading-tight mb-4 line-clamp-3">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 font-medium mb-6">
                  {post.description}
                </p>
              </div>
              
              <Link 
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest italic text-white group-hover:gap-4 transition-all"
              >
                Read Full Strategy
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
