import React from 'react';
import { CONTACT_INFO } from '../constants';
import { IconArrowRight } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl opacity-30 animate-pulse delay-700" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-sm md:text-base font-medium text-gray-500 mb-6 tracking-[0.2em] uppercase">Portfolio 2025</h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight">
          Kyron <span className="text-white/20">Evangelista</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          Specializing in Concept Art and 3D Character Modeling. <br />
          Bringing imagination to life through digital craftsmanship.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12">
          <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-300 hover:text-white transition-colors border-b border-transparent hover:border-white">
            {CONTACT_INFO.email}
          </a>
          <span className="hidden sm:inline text-gray-600">|</span>
          <a href={CONTACT_INFO.linkedIn} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors border-b border-transparent hover:border-white">
            LinkedIn
          </a>
        </div>

        <button 
          onClick={() => document.getElementById('concept-art')?.scrollIntoView({ behavior: 'smooth' })}
          className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
        >
          View Work
          <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;