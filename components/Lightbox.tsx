import React, { useEffect } from 'react';
import { IconArrowRight } from './Icons';

interface LightboxProps {
    imageUrl: string;
    title: string;
    onClose: () => void;
    onNext?: () => void;
    onPrev?: () => void;
    hasNext?: boolean;
    hasPrev?: boolean;
}

const Lightbox: React.FC<LightboxProps> = ({
    imageUrl,
    title,
    onClose,
    onNext,
    onPrev,
    hasNext = false,
    hasPrev = false
}) => {
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
        };
    }, [onClose, onNext, onPrev, hasNext, hasPrev]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm select-none"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            {/* Previous Button */}
            {hasPrev && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrev?.();
                    }}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50 hidden md:block" // Hidden on mobile to avoid covering image, use swipe later? for now just click
                >
                    <IconArrowRight className="w-8 h-8 rotate-180" />
                </button>
            )}

            {/* Next Button */}
            {hasNext && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext?.();
                    }}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50 hidden md:block"
                >
                    <IconArrowRight className="w-8 h-8" />
                </button>
            )}

            <div
                className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center pointer-events-none"
            >
                <div
                    className="relative pointer-events-auto"
                    onClick={e => e.stopPropagation()}
                >
                    <img
                        src={imageUrl}
                        alt={title}
                        className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl"
                    />
                    <p className="text-white/80 mt-4 text-center text-lg font-light tracking-wide">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Lightbox;
