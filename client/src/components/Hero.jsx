import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import { Link } from 'react-scroll';

const Hero = () => {
    const { profile } = portfolioData;

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-black">
            {/* Background glowing effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

            <div className="container mx-auto px-6 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-3/5 text-left"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                            Welcome to My Portfolio
                        </h2>

                        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">
                            {profile.name}
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed max-w-2xl">
                            {profile.bio}
                        </p>

                        <div className="flex space-x-6 mt-8">
                            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                                <Github size={30} />
                            </a>
                            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                                <Linkedin size={30} />
                            </a>
                            <a href={profile.social.email} className="text-gray-400 hover:text-red-400 transition-colors transform hover:scale-110">
                                <Mail size={30} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-2/5 flex justify-center"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full animate-pulse opacity-20 blur-2xl"></div>
                            <div className="relative rounded-full p-2 border-2 border-blue-500/30 bg-slate-800/50 backdrop-blur-sm overflow-hidden shadow-2xl">
                                <img
                                    src="/image.jpeg"
                                    alt={profile.name}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-gray-500 hover:text-blue-400 transition-colors"
                onClick={() => {
                    // Optional: Add scroll logic if needed, but the Link handles it mostly.
                }}
            >
                <Link to="projects" smooth={true} duration={500}>
                    <ArrowDown size={32} />
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
