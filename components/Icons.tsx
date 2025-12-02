import React from 'react';
import { ToolType } from '../types';

export const IconHome: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

export const IconMail: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const IconPhone: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
);

export const IconLinkedIn: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const IconArrowRight: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

// Tool Logos (Simulated)
export const ToolIcon: React.FC<{ tool: ToolType }> = ({ tool }) => {
  switch (tool) {
    case ToolType.PHOTOSHOP:
      return (
        <div title="Photoshop" className="flex items-center justify-center w-8 h-8 bg-[#001e36] border border-[#31a8ff] rounded text-[#31a8ff] font-bold text-sm">
          Ps
        </div>
      );
    case ToolType.BLENDER:
      return (
        <div title="Blender" className="flex items-center justify-center w-8 h-8 bg-white rounded-full p-1">
           <svg viewBox="0 0 24 24" fill="#e87d0d" className="w-full h-full">
             <circle cx="12" cy="12" r="10" fillOpacity="0.2"/>
             <circle cx="12" cy="12" r="4" />
             <path d="M12 2a10 10 0 0 0-7.07 2.93l1.42 1.42A8 8 0 0 1 12 4V2z" />
           </svg>
        </div>
      );
    case ToolType.SUBSTANCE_PAINTER:
      return (
        <div title="Substance Painter" className="flex items-center justify-center w-8 h-8 bg-[#182b25] border border-[#8ca656] rounded text-[#8ca656] font-bold text-sm">
          Pt
        </div>
      );
    case ToolType.ZBRUSH:
      return (
        <div title="ZBrush" className="flex items-center justify-center w-8 h-8 bg-black border border-white rounded text-white font-bold text-sm">
          Z
        </div>
      );
    case ToolType.MARVELOUS_DESIGNER:
      return (
        <div title="Marvelous Designer" className="flex items-center justify-center w-8 h-8 bg-[#F6A821] text-black rounded font-bold text-xs p-1">
          <svg viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 2l10 6v8l-10 6-10-6V8l10-6z" />
          </svg>
        </div>
      );
    case ToolType.MAYA:
      return (
        <div title="Autodesk Maya" className="flex items-center justify-center w-8 h-8 bg-[#349399] text-white rounded font-bold text-xs">
          M
        </div>
      );
    default:
      return null;
  }
};