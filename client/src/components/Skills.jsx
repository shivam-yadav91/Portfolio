import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const Skills = () => {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="py-20 bg-light dark:bg-dark transition-colors">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark dark:text-light">Technical Skills</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-primary/50 transition-all flex items-center space-x-4 group"
                        >
                            <div className="w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-gray-700/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-dark dark:text-light group-hover:text-primary transition-colors">
                                {skill.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
