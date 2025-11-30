import React from 'react';
import { Project } from '../types';
import { ToolIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-surface rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 border border-white/5 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative w-full overflow-hidden aspect-[4/3]">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Tools Overlay (Bottom Left) */}
        <div className="absolute bottom-3 left-3 flex gap-2">
          {project.tools.map((tool) => (
            <ToolIcon key={tool} tool={tool} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
        
        {/* Category Tag */}
        <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
            <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">{project.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;