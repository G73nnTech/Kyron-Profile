import React from 'react';

const ReelSection: React.FC = () => {
  return (
    <section id="reel" className="py-20 bg-surface/30 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Demo Reel</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">A showcase of my recent work in character modeling and concept design.</p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black">
           <div className="aspect-video w-full">
             <video 
               className="w-full h-full object-contain"
               controls
               preload="metadata"
               playsInline
             >
               {/* 
                  Using Big Buck Bunny as a placeholder for a 3D portfolio reel.
                  In a real deployment, replace this src with the path to the uploaded reel file, e.g. "/reel.mp4"
               */}
               <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
               Your browser does not support the video tag.
             </video>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ReelSection;