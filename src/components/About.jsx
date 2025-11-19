import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-surface relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            <img
                                src={portfolioData.about.image}
                                alt={portfolioData.personal.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r border-b border-primary/50" />
                        <div className="absolute -top-6 -left-6 w-24 h-24 border-l border-t border-white/10" />
                    </motion.div>

                    {/* Text */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-8"
                        >
                            The Vision
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6 text-lg md:text-xl text-muted leading-relaxed"
                        >
                            <p>{portfolioData.about.bio}</p>
                            <p>
                                I believe that every frame should serve the story. Whether it's a 30-second commercial or a feature film, my approach is always rooted in emotion, rhythm, and visual impact.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-12 grid grid-cols-2 gap-8"
                        >
                            <div>
                                <h4 className="text-white font-bold uppercase tracking-wider mb-2">Services</h4>
                                <ul className="text-muted space-y-1">
                                    <li>Direction</li>
                                    <li>Video Editing</li>
                                    <li>Color Grading</li>
                                    <li>Sound Design</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold uppercase tracking-wider mb-2">Clients</h4>
                                <ul className="text-muted space-y-1">
                                    <li>Nike</li>
                                    <li>Vice</li>
                                    <li>Sony Music</li>
                                    <li>Red Bull</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
