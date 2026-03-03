import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileCheck } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Certificates = () => {
    const { certifications } = portfolioData;

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
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    // Icon mapping for different certificate types
    const getIcon = (name) => {
        if (name.toLowerCase().includes('python')) return '🐍';
        if (name.toLowerCase().includes('javascript') || name.toLowerCase().includes('js')) return '⚡';
        if (name.toLowerCase().includes('react')) return '⚛️';
        if (name.toLowerCase().includes('cloud') || name.toLowerCase().includes('google')) return '☁️';
        if (name.toLowerCase().includes('cyber') || name.toLowerCase().includes('security')) return '🔒';
        return '📜';
    };

    return (
        <section id="certificates" className="py-20 bg-slate-900 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">Certifications</h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                >
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.id}
                            variants={item}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Icon/Logo */}
                                <div className="mb-4 relative z-10">
                                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300 shadow-md ${cert.logo && cert.logo.length === 1 ? 'bg-gradient-to-br from-slate-700 to-slate-800' : 'bg-white'
                                        }`}>
                                        {cert.logo ? (
                                            cert.logo.length === 1 ? (
                                                <span className="text-4xl font-bold text-white">{cert.logo}</span>
                                            ) : (
                                                <img
                                                    src={cert.logo}
                                                    alt={`${cert.issuer} logo`}
                                                    className="w-full h-full object-contain"
                                                />
                                            )
                                        ) : (
                                            <span className="text-4xl">{getIcon(cert.name)}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                                        {cert.name}
                                    </h3>
                                    <p className="text-gray-400 mb-4">
                                        {cert.issuer}
                                    </p>
                                    <p className="text-gray-300 text-sm mb-4 italic">
                                        {cert.description || `Comprehensive ${cert.name.toLowerCase()} covering essential concepts and practical applications`}
                                    </p>
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-cyan-500/20 relative z-10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                        <span className="text-cyan-400 font-semibold text-sm">{cert.year}</span>
                                    </div>
                                    {cert.credentialId && (
                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                            <FileCheck size={14} />
                                            <span>{cert.credentialId}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;
