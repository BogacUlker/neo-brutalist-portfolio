import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 bg-background relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-widest mb-6"
                    >
                        Get in Touch
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-12"
                    >
                        Let's Create <br /> Something Epic
                    </motion.h2>

                    <motion.a
                        href={`mailto:${portfolioData.personal.email}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="inline-block text-2xl md:text-4xl font-bold border-b-2 border-white/20 pb-2 hover:border-primary hover:text-primary transition-all mb-24"
                    >
                        {portfolioData.personal.email}
                    </motion.a>

                    <div className="w-full border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-muted text-sm">
                            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
                        </p>

                        <div className="flex gap-8">
                            {portfolioData.personal.socials.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="flex items-center gap-2 text-white hover:text-primary transition-colors uppercase font-bold tracking-wider text-sm"
                                >
                                    {social.name}
                                    <ArrowUpRight size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
