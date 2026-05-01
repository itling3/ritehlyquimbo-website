
import React, { useState } from 'react';
import { CLIENT_LOGOS } from '../constants';

const ClientsMarquee: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (name: string) => {
    setFailedImages(prev => ({ ...prev, [name]: true }));
  };

  const validClients = CLIENT_LOGOS.filter(client => client && client.name && client.url);
  if (validClients.length === 0) return null;
  const duplicatedClients = [...validClients, ...validClients];

  return (
    <section className="py-24 bg-black/40 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
        <h2 className="text-xl font-bold text-gray-300 uppercase tracking-widest flex items-center justify-center md:justify-start gap-2 italic">
          <span className="w-8 h-[2px] bg-blue-500"></span> Global Client Network
        </h2>
        <p className="text-sm text-gray-400 mt-2 font-semibold tracking-tight">Driving organic growth and operational excellence for brands worldwide.</p>
      </div>
      
      <div className="marquee-container group">
        <div className="marquee-content marquee-fast">
          {duplicatedClients.map((client, i) => (
            <div 
              key={`${client.name}-${i}`} 
              className="tool-capsule group/item"
            >
              {!failedImages[client.name] ? (
                <img 
                  src={client.url} 
                  alt={client.name} 
                  width="120"
                  height="40"
                  className="h-10 w-auto object-contain transition-all duration-300"
                  loading="lazy"
                  decoding="async"
                  onError={() => handleImageError(client.name)}
                />
              ) : (
                <div className="flex flex-col items-center">
                   <span className="text-white font-black text-xs uppercase tracking-tighter opacity-80 group-hover/item:opacity-100 transition-opacity">
                    {client.name}
                  </span>
                  <div className="w-6 h-[1px] bg-blue-500/30 mt-1"></div>
                </div>
              )}
              <span className="tool-label">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
