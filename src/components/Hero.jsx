import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Video/Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={portfolioData.hero.reelPoster}
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src={portfolioData.hero.reelVideo} type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
                <div className="overflow-hidden">
                    <motion.h2
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-primary font-bold uppercase tracking-widest mb-4"
                    >
                        {portfolioData.personal.role}
                    </motion.h2>
                </div>

                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-8xl font-display font-bold leading-tight text-balance mb-6"
                    >
                        {portfolioData.hero.headline}
                    </motion.h1>
                </div>

                <div className="overflow-hidden">
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-2xl text-muted max-w-2xl text-balance"
                    >
                        {portfolioData.hero.subheadline}
                    </motion.p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-muted">Scroll</span>
                <ArrowDown className="w-4 h-4 text-primary animate-bounce" />
            </motion.div>
        </section>
    );
};

export default Hero;
