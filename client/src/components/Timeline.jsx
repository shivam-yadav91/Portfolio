import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Trophy, Wrench, Laptop } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Timeline = () => {
    const { education, projects } = portfolioData;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: 50 },
        show: { opacity: 1, x: 0 }
    };

    // Journey highlights
    const highlights = [
        {
            icon: Trophy,
            count: '+2',
            label: 'Hackathons',
            color: 'from-yellow-400 to-orange-500'
        },
        {
            icon: Wrench,
            count: '+3',
            label: 'Workshops',
            color: 'from-blue-400 to-cyan-500'
        },
        {
            icon: Laptop,
            count: `+4`,
            label: 'Projects',
            color: 'from-purple-400 to-pink-500'
        }
    ];

    return (
        <section id="timeline" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Education Section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education & Experience</h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto rounded-full"></div>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-4xl mx-auto space-y-8 mb-16"
                >
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            variants={item}
                            className="relative"
                        >
                            {/* Timeline connector */}
                            {index !== education.length - 1 && (
                                <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent hidden md:block"></div>
                            )}

                            {/* Education Card */}
                            <div className="flex items-start gap-6">
                                {/* Timeline indicator */}
                                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
                                        <GraduationCap size={32} className="text-white" />
                                    </div>
                                </div>

                                {/* Card content */}
                                <motion.div
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className="flex-grow bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 border border-blue-500/30 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 relative overflow-hidden"
                                >
                                    {/* Top badge */}
                                    <div className="absolute top-4 right-4">
                                        <div className="px-4 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold">
                                            {edu.year}
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 mb-3">
                                        <Briefcase size={24} className="text-blue-400 mt-1 flex-shrink-0" />
                                        <div className="flex-grow">
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {edu.degree}
                                            </h3>
                                            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-lg mb-3">
                                                <span>{edu.institution}</span>
                                            </div>
                                            {edu.location && (
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <MapPin size={16} />
                                                    <span>{edu.location}</span>
                                                </div>
                                            )}
                                            {edu.description && (
                                                <p className="text-gray-300 mt-3 leading-relaxed italic">
                                                    {edu.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Highlights Section */}
                <div className="mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Highlights</h3>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 text-center relative overflow-hidden">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Icon */}
                                    <div className="mb-3 relative z-10 flex justify-center">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <highlight.icon size={32} className="text-white" />
                                        </div>
                                    </div>

                                    {/* Count */}
                                    <div className="relative z-10">
                                        <p className={`text-4xl font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent mb-2`}>
                                            {highlight.count}
                                        </p>
                                        <p className="text-gray-300 font-semibold">
                                            {highlight.label}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
