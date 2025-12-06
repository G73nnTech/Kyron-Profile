import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { IconArrowRight, ToolIcon } from './Icons';

interface LightboxProps {
    project: Project;
    onClose: () => void;
    onNext?: () => void;
    onPrev?: () => void;
    hasNext?: boolean;
    hasPrev?: boolean;
}

const Lightbox: React.FC<LightboxProps> = ({
    project,
    onClose,
    onNext,
    onPrev,
    hasNext = false,
    hasPrev = false
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight' && hasNext && onNext) onNext();
            if (e.key === 'ArrowLeft' && hasPrev && onPrev) onPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
            setIsLoaded(false); // Reset on unmount/change
        };
    }, [onClose, onNext, onPrev, hasNext, hasPrev, project.id]);

    // Reset loaded state when project changes
    useEffect(() => {
        setIsLoaded(false);
    }, [project.id]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in duration-300"
            onClick={onClose}
        >
            {/* Context Info (Mobile/Desktop) */}
            <div className="absolute top-6 left-6 z-50 flex flex-col gap-1 pointer-events-none md:pointer-events-auto">
                <span className="text-white/40 text-xs uppercase tracking-widest">{project.category}</span>
                <h2 className="text-white text-xl font-bold">{project.title}</h2>
            </div>


            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/50 hover:text-white hover:rotate-90 transition-all duration-300 z-50 p-2"
                aria-label="Close"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            {/* Navigation Buttons */}
            {hasPrev && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrev?.();
                    }}
                    className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 text-white/30 hover:text-white hover:bg-white/5 rounded-full transition-all z-50 group"
                    aria-label="Previous image"
                >
                    <IconArrowRight className="w-8 h-8 rotate-180 transform group-hover:-translate-x-1 transition-transform" />
                </button>
            )}

            {hasNext && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext?.();
                    }}
                    className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 text-white/30 hover:text-white hover:bg-white/5 rounded-full transition-all z-50 group"
                    aria-label="Next image"
                >
                    <IconArrowRight className="w-8 h-8 transform group-hover:translate-x-1 transition-transform" />
                </button>
            )}

            {/* Main Content */}
            <div
                className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none p-4 md:p-12 pb-24 md:pb-12"
            >
                <div
                    className={`relative pointer-events-auto transition-all duration-500 ease-out transform ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    onClick={e => e.stopPropagation()}
                >
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="max-w-full max-h-[75vh] md:max-h-[85vh] object-contain rounded shadow-2xl"
                        onLoad={() => setIsLoaded(true)}
                    />

                    {/* Metadata Overlay (Bottom) */}
                    <div className="absolute -bottom-16 left-0 right-0 flex items-center justify-between text-white/80">
                        <div className="flex gap-3">
                            {project.tools.map(tool => (
                                <div key={tool} title={tool} className="bg-white/10 p-2 rounded hover:bg-white/20 transition-colors cursor-help">
                                    <ToolIcon tool={tool} className="w-5 h-5" />
                                </div>
                            ))}
                        </div>

                        <a
                            href={project.imageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm border border-white/20 px-4 py-2 rounded hover:bg-white hover:text-black transition-all flex items-center gap-2"
                        >
                            <span>View Full</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </a>
                    </div>

                    <p className="sr-only">{project.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Lightbox;
