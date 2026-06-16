
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionCTA from '../components/SectionCTA';
import { SERVICE_DETAILS } from '../constants';

interface LocationsPageProps {
  onBook: (e?: React.MouseEvent) => void;
}

const LocationsPage: React.FC<LocationsPageProps> = ({ onBook }) => {
  const cebuService = SERVICE_DETAILS['seo-cebu'];

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-24 px-4 md:px-6 min-h-screen bg-black">
      <SEO 
        title="Service Locations | Hyper-Local SEO Dominance in Philippines" 
        description="Explore our specialized local SEO services across key strategic locations in the Philippines, including Cebu City, Mandaue, and Lapu-Lapu."
        keywords="seo locations philippines, local seo cebu, cebu city seo, mandaue seo, lapu-lapu seo"
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 text-white uppercase italic tracking-tighter leading-none">
            Service <span className="text-blue-500">Locations</span>
          </h1>
          <div className="text-blue-500 font-bold text-sm mb-4 tracking-[0.4em] uppercase">Hyper-Local Dominance</div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We specialize in capturing high-intent traffic by dominating specific geographic markets. Explore our localized strategies below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Cebu Location Card */}
          <div className="glass-morphism rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all group group shadow-2xl">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80" 
                alt="Cebu City Skyline" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-3">
                <span className="text-4xl">🏝️</span>
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Cebu</h2>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-400 mb-8 line-clamp-3">
                Dominating search results in the Queen City of the South. Specialized strategies for Cebu City, Mandaue, Lapu-Lapu, and IT Park.
              </p>
              
              <div className="space-y-4 mb-8">
                {['Google Maps Dominance', 'Local Citation Building', 'Neighborhood Targeting'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  to="/locations/seo-cebu"
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-orange-500/20"
                >
                  View Cebu Strategy →
                </Link>
                <button 
                  onClick={onBook}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter border border-white/5"
                >
                  Book Free Cebu Audit
                </button>
              </div>
            </div>
          </div>

          {/* Mandaue Location Card */}
          <div className="glass-morphism rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all group group shadow-2xl">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                alt="Mandaue City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-3">
                <span className="text-4xl">🏢</span>
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Mandaue</h2>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-400 mb-8 line-clamp-3">
                Strategic SEO for Mandaue's thriving commercial hub. We help local industries and businesses turn Google searches into customers.
              </p>
              
              <div className="space-y-4 mb-8">
                {['Industrial Hub Targeting', 'Local Search Dominance', 'Conversion Focused'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  to="/locations/seo-mandaue-city"
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-orange-500/20"
                >
                  View Mandaue Strategy →
                </Link>
                <button 
                  onClick={onBook}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter border border-white/5"
                >
                  Book Free Mandaue Audit
                </button>
              </div>
            </div>
          </div>

          {/* Lapu-Lapu Location Card */}
          <div className="glass-morphism rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all group group shadow-2xl">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80" 
                alt="Lapu-Lapu City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-3">
                <span className="text-4xl">📍</span>
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Lapu-Lapu</h2>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-400 mb-8 line-clamp-3">
                Increase search visibility for Lapu-Lapu's vital tourism and commercial sectors. Specialized SEO for resorts, hospitality, and local businesses.
              </p>
              
              <div className="space-y-4 mb-8">
                {['Tourism & Hospitality Focus', 'Mactan Local Dominance', 'High Intent Discovery'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  to="/locations/seo-lapu-lapu-city"
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-orange-500/20"
                >
                  View Lapu-Lapu Strategy →
                </Link>
                <button 
                  onClick={onBook}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter border border-white/5"
                >
                  Book Free Lapu-Lapu Audit
                </button>
              </div>
            </div>
          </div>

          {/* Talisay Location Card */}
          <div className="glass-morphism rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all group group shadow-2xl">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80" 
                alt="Talisay City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-3">
                <span className="text-4xl">🏢</span>
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Talisay</h2>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-400 mb-8 line-clamp-3">
                Strategic SEO for Talisay City's expanding economy. Dominating search for the South district, from Lawaan to Poblacion.
              </p>
              
              <div className="space-y-4 mb-8">
                {['South Shift Specialists', 'Local Map Domination', 'Hyper-Local Targeting'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  to="/locations/seo-talisay-city"
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-orange-500/20"
                >
                  View Talisay Strategy →
                </Link>
                <button 
                  onClick={onBook}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter border border-white/5"
                >
                  Book Free Talisay Audit
                </button>
              </div>
            </div>
          </div>

          {/* Danao Location Card */}
          <div className="glass-morphism rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all group group shadow-2xl">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80" 
                alt="Danao City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-3">
                <span className="text-4xl">🏝️</span>
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Danao</h2>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-400 mb-8 line-clamp-3">
                Stop losing customers to competitors. Our Danao City SEO strategies drive local traffic and bookings for resorts and businesses.
              </p>
              
              <div className="space-y-4 mb-8">
                {['North District Specialists', 'Resort & Tourism Focused', 'Local Pack Dominance'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  to="/locations/seo-danao-city"
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-orange-500/20"
                >
                  View Danao Strategy →
                </Link>
                <button 
                  onClick={onBook}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter border border-white/5"
                >
                  Book Free Danao Audit
                </button>
              </div>
            </div>
          </div>

          {/* Minglanilla Location Card */}
          <div className="glass-morphism rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all group group shadow-2xl">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80" 
                alt="Minglanilla City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-3">
                <span className="text-4xl">🍞</span>
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Minglanilla</h2>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-400 mb-8 line-clamp-3">
                Dominating search for the rapidly growing south district. Strategic SEO for Minglanilla's residential and commercial hub.
              </p>
              
              <div className="space-y-4 mb-8">
                {['South Growth Specialists', 'Local Map Pack Focus', 'Bakery Capital Hub'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  to="/locations/seo-services-minglanilla"
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-orange-500/20"
                >
                  View Minglanilla Strategy →
                </Link>
                <button 
                  onClick={onBook}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter border border-white/5"
                >
                  Book Free Minglanilla Audit
                </button>
              </div>
            </div>
          </div>

          {/* Manila Location Card */}
          <div className="glass-morphism rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all group group shadow-2xl">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=800&q=80" 
                alt="Manila City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-3">
                <span className="text-4xl">🌆</span>
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Manila</h2>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-400 mb-8 line-clamp-3">
                Strategic SEO Manila services focused on rankings, leads, and revenue. Helping businesses in the capital dominate local search.
              </p>
              
              <div className="space-y-4 mb-8">
                {['Technical SEO Experts', 'Intent-Based Targeting', 'Conversion Specialists'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  to="/locations/seo-manila"
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-orange-500/20"
                >
                  View Manila Strategy →
                </Link>
                <button 
                  onClick={onBook}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter border border-white/5"
                >
                  Book Free Manila Audit
                </button>
              </div>
            </div>
          </div>
          
          {/* Quezon City Location Card */}
          <div className="glass-morphism rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all group group shadow-2xl">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80" 
                alt="Quezon City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-3">
                <span className="text-4xl">🏛️</span>
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Quezon City</h2>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-400 mb-8 line-clamp-3">
                Expert SEO Quezon City services built to improve rankings, increase qualified traffic, and turn visitors into real leads.
              </p>
              
              <div className="space-y-4 mb-8">
                {['Local Service Specialists', 'Intent-Based Targeting', 'Sustainable Growth'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  to="/locations/seo-quezon-city"
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-orange-500/20"
                >
                  View QC Strategy →
                </Link>
                <button 
                  onClick={onBook}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter border border-white/5"
                >
                  Book Free QC Audit
                </button>
              </div>
            </div>
          </div>
          
          {/* Davao Location Card */}
          <div className="glass-morphism rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all group group shadow-2xl">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80" 
                alt="Davao City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-3">
                <span className="text-4xl">🦅</span>
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Davao</h2>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-400 mb-8 line-clamp-3">
                Expert SEO Davao services designed to improve Google rankings, attract qualified traffic, and turn visitors into real leads.
              </p>
              
              <div className="space-y-4 mb-8">
                {['Local Growth Experts', 'Intent-Based Targeting', 'Sustainable Results'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  to="/locations/seo-davao"
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-orange-500/20"
                >
                  View Davao Strategy →
                </Link>
                <button 
                  onClick={onBook}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter border border-white/5"
                >
                  Book Free Davao Audit
                </button>
              </div>
            </div>
          </div>

          {/* Makati Location Card */}
          <div className="glass-morphism rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all group group shadow-2xl">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                alt="Makati City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-3">
                <span className="text-4xl">🏙️</span>
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Makati</h2>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-400 mb-8 line-clamp-3">
                Strategic SEO Makati City services for high-value client acquisition. Specialized growth for firms in the financial district.
              </p>
              
              <div className="space-y-4 mb-8">
                {['High-Value Lead Gen', 'Financial District SEO', 'Expert Authority Building'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  to="/locations/seo-makati-city"
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-orange-500/20"
                >
                  View Makati Strategy →
                </Link>
                <button 
                  onClick={onBook}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter border border-white/5"
                >
                  Book Free Makati Audit
                </button>
              </div>
            </div>
          </div>

          {/* Taguig Location Card */}
          <div className="glass-morphism rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all group group shadow-2xl">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80" 
                alt="Taguig City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-3">
                <span className="text-4xl">🏙️</span>
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Taguig</h2>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-400 mb-8 line-clamp-3">
                Premium SEO Taguig services for businesses in the metro's leading business and lifestyle district.
              </p>
              
              <div className="space-y-4 mb-8">
                {['BGC Market Experts', 'People-First Content', 'Sustainable Lead Growth'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  to="/locations/seo-taguig"
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-orange-500/20"
                >
                  View Taguig Strategy →
                </Link>
                <button 
                  onClick={onBook}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter border border-white/5"
                >
                  Book Free Taguig Audit
                </button>
              </div>
            </div>
          </div>

          {/* Pasig City Location Card */}
          <div className="glass-morphism rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all group group shadow-2xl">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" 
                alt="Pasig City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-3">
                <span className="text-4xl">🏙️</span>
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Pasig</h2>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-400 mb-8 line-clamp-3">
                Expert SEO Pasig City services designed to improve Google rankings, attract qualified traffic, and turn visitors into real leads and sales.
              </p>
              
              <div className="space-y-4 mb-8">
                {['Local Growth Experts', 'Intent-Based Targeting', 'Sustainable Leads'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  to="/locations/seo-pasig-city"
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-orange-500/20"
                >
                  View Pasig Strategy →
                </Link>
                <button 
                  onClick={onBook}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter border border-white/5"
                >
                  Book Free Pasig Audit
                </button>
              </div>
            </div>
          </div>

          {/* Placeholder for more locations */}
          <div className="glass-morphism rounded-[2.5rem] border border-white/5 flex flex-col items-center justify-center p-12 text-center bg-white/[0.02] border-dashed border-white/10">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-600 mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-500 uppercase tracking-tight mb-2">New Markets Loading</h3>
            <p className="text-gray-600 text-sm">Expanding the grid to Mactan, Iloilo, and Bacolod soon.</p>
          </div>
        </div>

        <div className="mt-24">
          <SectionCTA 
            onClick={onBook} 
            text="Want to dominate your specific city?" 
            buttonText="Request Location Audit"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
