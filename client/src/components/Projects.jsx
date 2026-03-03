import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import Tilt from './Tilt';

const Projects = () => {
    const { projects } = portfolioData;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" className="py-20 bg-gray-900 transition-colors">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Projects</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={item}
                        >
                            <Tilt className="bg-[#1e293b] rounded-xl overflow-hidden shadow-xl border border-gray-700 h-full flex flex-col group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white font-semibold tracking-wider">View Project</span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow text-center relative z-10">
                                    <h3 className="text-xl font-bold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors">{project.title}</h3>
                                    <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto flex justify-center space-x-4">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-blue-400 hover:text-white font-medium transition-colors bg-blue-500/10 px-4 py-2 rounded-full hover:bg-blue-600"
                                        >
                                            Live Demo <ExternalLink size={16} className="ml-1" />
                                        </a>
                                        {project.github && project.github !== '#' && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-gray-400 hover:text-white font-medium transition-colors bg-gray-700/50 px-4 py-2 rounded-full hover:bg-gray-600"
                                            >
                                                <Github size={16} className="mr-1" /> Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
