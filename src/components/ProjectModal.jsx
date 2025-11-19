import React from 'react';
import { motion } from 'framer-motion';
import { X, Play } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            <motion.div
                layoutId={`project-${project.id}`}
                className="relative w-full max-w-5xl bg-surface overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-primary transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Video/Image Area */}
                <div className="relative aspect-video w-full bg-black">
                    <video
                        src={project.video}
                        controls
                        autoPlay
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 overflow-y-auto">
                    <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                        <div>
                            <motion.h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
                                {project.title}
                            </motion.h2>
                            <p className="text-primary font-medium uppercase tracking-wider mb-6">
                                {project.client} — {project.category}
                            </p>
                            <p className="text-muted text-lg max-w-2xl leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 min-w-[200px]">
                            <div className="border-t border-white/10 pt-4">
                                <span className="block text-xs text-muted uppercase tracking-widest mb-1">Year</span>
                                <span className="text-lg font-medium">{project.year}</span>
                            </div>
                            <div className="border-t border-white/10 pt-4">
                                <span className="block text-xs text-muted uppercase tracking-widest mb-1">Role</span>
                                <span className="text-lg font-medium">Director / Editor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectModal;
