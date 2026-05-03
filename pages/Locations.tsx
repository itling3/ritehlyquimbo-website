
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
    <div className="pt-32 pb-24 px-6 min-h-screen bg-black">
      <SEO 
        title="Service Locations | Hyper-Local SEO Dominance in Philippines" 
        description="Explore our specialized local SEO services across key strategic locations in the Philippines, including Cebu City, Mandaue, and Lapu-Lapu."
        keywords="seo locations philippines, local seo cebu, cebu city seo, mandaue seo, lapu-lapu seo"
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-white uppercase italic tracking-tighter leading-none">
            Service <span className="text-blue-500">Locations</span>
          </h1>
          <div className="text-blue-500 font-bold text-sm mb-4 tracking-[0.4em] uppercase">Hyper-Local Dominance</div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We specialize in capturing high-intent traffic by dominating specific geographic markets. Explore our localized strategies below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cebu Location Card */}
          <div className="glass-morphism rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all group group shadow-2xl">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/gpms-cs-s/ABJJf52m8rcccRHVL6383PrLnUsfmlkATq1CzJf7Jny7yieHnDnzkzm_zatdrAlWGpCgcwVW9sYPhk4sjlv1az0gioZYIEmaEs-jAz9BMcdXPaY0iHzCpz8NhO_3-gQxJaiT_YqEa10Z=s680-w680-h510-rw" 
                alt="Cebu City Skyline" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
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
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-blue-500/20"
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
                src="https://triptheislands.com/wp-content/uploads/2015/03/sam_7095.jpg.webp" 
                alt="Mandaue City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
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
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-blue-500/20"
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
                src="https://lh3.googleusercontent.com/grass-cs/ANxoTn39NvdHHuX0lnctvUi8Iw-zEZ6DWaJAwRR02yhHnVME6kT98xMlgikjkg9x6RRkBrilDZ4uoq5iIwhclXIR8x_StggMhu7YFGzhMubvXFy63brZYMU4i_1Q1jr-7KckDuduQh_8=s680-w680-h510-rw" 
                alt="Lapu-Lapu City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
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
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-blue-500/20"
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
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFpWFwagFwsw6ZTn9EMh5_Q1fQ71dVxbrV6H8M78mRhKnhE4CCL6FH7SfSvtaKOMgzKEJFoW_oQZNk4Y2OfaC5DJz62lRmXVmjHNUe6UiGVAb4ekqhGkSOanzRtQj9_fC7-lWU=s680-w680-h510-rw" 
                alt="Talisay City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
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
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-blue-500/20"
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
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGSOZ4Vj49DcJGS6BzrLsZeJhE4dpMMuNgbQFuXAf-u6XL_V1tqu0kGblg30jjv4S02L5DzpTLGIPEBPWVj-TZN5DxHSDmhDeulpUZa5_MJqvL2lNJU8aBnRbGLwqv226yfwOYmCw=s680-w680-h510-rw" 
                alt="Danao City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
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
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-blue-500/20"
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
                src="https://lh3.googleusercontent.com/p/AF1QipM8yQM1doeQ-fxYyVdHHyVST6hQdKEqOfyzAOpU=s680-w680-h510-rw" 
                alt="Minglanilla City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
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
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-blue-500/20"
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
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFp7PkxcOj9AnA5mqZsyGTCHvsndEDHUT40jdGlTO79ctM6tl5yorXZ0Hp4Jy_AXBKwxH0LWs1qvAB3IrGHCj8AjTFg62Ds5DglROwZVgBGjgd764HgVO3Q8fV71yS-RCM9GxpVEA=s680-w680-h510-rw" 
                alt="Manila City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
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
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-blue-500/20"
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
                src="https://upload.wikimedia.org/wikipedia/en/8/86/Quezon_Memorial_Shrine_monument_%28local_img%29.jpg" 
                alt="Quezon City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
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
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-blue-500/20"
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
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpQOLeGuBLYbBFQoOcdyGSPoqhFy9bK3AxWETAsLWiFMNNjCDtL4jfcDXi-g_4CUqUhGMYb4M0Nu_xIT3cEwBJ12eU8_5YaMlmiVxAferycB0oQEFISwp-IXarSe5W0RRMuHlmDG3ZzIH8/s1600/Barangay+Baganihan.jpg" 
                alt="Davao City" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
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
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all text-center uppercase tracking-tighter shadow-xl shadow-blue-500/20"
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

          {/* Placeholder for more locations */}
          <div className="glass-morphism rounded-[2.5rem] border border-white/5 flex flex-col items-center justify-center p-12 text-center bg-white/[0.02] border-dashed border-white/10">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-600 mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-500 uppercase tracking-tight mb-2">New Markets Loading</h3>
            <p className="text-gray-600 text-sm">Expanding the grid to Mactan, Davao, and Manila soon.</p>
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
