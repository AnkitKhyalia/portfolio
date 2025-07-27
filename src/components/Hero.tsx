import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 text-neutral-800 dark:text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bg-gradient-to-r from-cyan-400/30 to-blue-500/30 dark:from-cyan-500/20 dark:to-blue-600/20 rounded-full w-96 h-96 -top-20 -left-20 animate-pulse blur-xl"></div>
        <div className="absolute bg-gradient-to-r from-purple-400/30 to-pink-500/30 dark:from-purple-500/20 dark:to-pink-600/20 rounded-full w-96 h-96 -bottom-20 -right-20 animate-pulse blur-xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute bg-gradient-to-r from-emerald-400/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-600/10 rounded-full w-64 h-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse blur-xl" style={{animationDelay: '2s'}}></div>
      </div>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:scale-105 transition-transform duration-500">
            {portfolioData.name}
          </h1>
        </div>
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-lgxl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto font-medium">
            {portfolioData.title}
          </p>
        </div>
        <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            {portfolioData.introduction}
          </p>
        </div>
        <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lgxl hover:shadow-cyan-500/25 relative overflow-hidden group"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
export default Hero;