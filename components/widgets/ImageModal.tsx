import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
    images: string[];
    title: string;
    description: string;
    date: string;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
    images,
    title,
    description,
    date,
    onClose
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const modalRef = useRef(null);

    const handleImageChange = useCallback((newIndex: number) => {
        if (isAnimating) return;
        setIsAnimating(true);

        const normalizedIndex = newIndex < 0
            ? images.length - 1
            : newIndex % images.length;

        setActiveIndex(normalizedIndex);
        setTimeout(() => setIsAnimating(false), 400);
    }, [isAnimating, images.length]);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') handleImageChange(activeIndex - 1);
            if (e.key === 'ArrowRight') handleImageChange(activeIndex + 1);
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleImageChange, activeIndex, onClose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4   backdrop-blur-2xl"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                ref={modalRef}
                className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-gray-900"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute right-0 top-0 z-50 rounded-full p-3 transition-all hover:scale-110 shadow-lg bg-[#8F9779CC]"
                >
                    <X className="h-6 w-6 text-white" />
                </button>

                <div className="flex flex-col">
                    {}
                    <div className="relative p-4">
                        <div className="relative z-10 aspect-video w-full overflow-hidden bg-black/20">
                            <AnimatePresence mode="wait">
                                {images.map((image, index) => (
                                    <motion.div
                                        key={image}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                            z: -100,
                                            rotate: randomRotateY(),
                                        }}
                                        animate={{
                                            opacity: activeIndex === index ? 1 : 0.7,
                                            scale: activeIndex === index ? 1 : 0.95,
                                            z: activeIndex === index ? 0 : -100,
                                            rotate: activeIndex === index ? 0 : randomRotateY(),
                                            zIndex: activeIndex === index ? 999 : images.length + 2 - index,
                                            y: activeIndex === index ? [0, -80, 0] : 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.9,
                                            z: 100,
                                            rotate: randomRotateY(),
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute rounded-xl inset-0 origin-bottom"
                                    >
                                        <Image
                                            src={image}
                                            alt={`View ${index + 1}`}
                                            fill
                                            className="rounded-xl object-contain bg-gray-900"
                                            priority
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {}
                        <div className="absolute bottom-6 z-50 left-1/2 -translate-x-1/2 flex items-center gap-4">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleImageChange(activeIndex - 1);
                                }}
                                className="rounded-full p-3 transition-all hover:scale-110 shadow-lg bg-[#8F9779CC]"
                                disabled={isAnimating}
                            >
                                <ChevronLeft className="h-6 w-6 text-white" />
                            </button>

                            <div className="flex gap-1.5">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            !isAnimating && handleImageChange(index);
                                        }}
                                        className={`h-2 rounded-full transition-all duration-300 shadow-lg ${activeIndex === index ? 'w-6 bg-[#DDB7AB]' : 'w-2 bg-[#8F977966]'}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleImageChange(activeIndex + 1);
                                }}
                                className="rounded-full p-3 transition-all hover:scale-110 shadow-lg bg-[#8F9779CC]"
                                disabled={isAnimating}
                            >
                                <ChevronRight className="h-6 w-6 text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                {}
                <div className="p-4 space-y-3 bg-gray-800 border-t border-gray-700">
                    <div className="flex items-center gap-3">
                        <span className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-[#DDB7AB]">
                            {date}
                        </span>
                        <span className="text-sm text-gray-400">
                            {`${activeIndex + 1} / ${images.length}`}
                        </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-100">
                        {title}
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-300">
                        {description}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default ImageModal;