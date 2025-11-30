import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface PortfolioSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  projects: Project[];
  bgColor?: string;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ id, title, subtitle, projects, bgColor = 'bg-background' }) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>
          {subtitle && <p className="text-gray-400 text-lg max-w-2xl">{subtitle}</p>}
          <div className="w-24 h-1 bg-blue-500 mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;