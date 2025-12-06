import React, { useState } from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import Lightbox from './Lightbox';

interface PortfolioSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  projects: Project[];
  bgColor?: string;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ id, title, subtitle, projects, bgColor = 'bg-background' }) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(-1);

  const selectedProject = selectedProjectIndex >= 0 ? projects[selectedProjectIndex] : null;

  const handleNext = () => {
    if (selectedProjectIndex < projects.length - 1) {
      setSelectedProjectIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (selectedProjectIndex > 0) {
      setSelectedProjectIndex(prev => prev - 1);
    }
  };

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
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProjectIndex(projects.findIndex(p => p.id === project.id))}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <Lightbox
          project={selectedProject}
          onClose={() => setSelectedProjectIndex(-1)}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={selectedProjectIndex < projects.length - 1}
          hasPrev={selectedProjectIndex > 0}
        />
      )}
    </section>
  );
};

export default PortfolioSection;