import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import ProjectModal from './ProjectModal';

const WorkGrid = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="work" className="py-24 md:py-32 bg-background relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 md:mb-24 border-b border-white/10 pb-8">
                    <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">
                        Selected Works
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Card Image */}
                            <div className="relative aspect-video overflow-hidden bg-surface mb-6">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                                <motion.img
                                    layoutId={`image-${project.id}`}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />

                                {/* Hover Play Button */}
                                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <Play className="w-6 h-6 text-white fill-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Card Info */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted text-sm uppercase tracking-wider">
                                        {project.client} — {project.category}
                                    </p>
                                </div>
                                <span className="text-muted font-mono text-sm">{project.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default WorkGrid;
