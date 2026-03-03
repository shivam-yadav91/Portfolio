import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import portfolioData from '../data/portfolio.json';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const { profile } = portfolioData;

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'Projects', to: 'projects' },
        { name: 'Skills', to: 'skills' },
        { name: 'Certificates', to: 'certificates' },
        { name: 'Timeline', to: 'timeline' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-light/80 dark:bg-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 cursor-pointer"
                >
                    {profile.name.split(' ')[0]}
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-2 bg-gray-100 dark:bg-gray-800/50 p-1 rounded-full backdrop-blur-sm border border-gray-200 dark:border-gray-700/50">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            onSetActive={() => setActiveSection(link.to)}
                            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer z-10 ${activeSection === link.to
                                ? 'text-white'
                                : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                                }`}
                        >
                            {activeSection === link.to && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-primary rounded-full"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                >
                                    {/* Bottom highlight effect matching screenshot */}
                                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-300/50 rounded-full"></div>
                                </motion.div>
                            )}
                            <span className="relative z-10">{link.name}</span>
                        </Link>
                    ))}
                    <div className="ml-2 pl-2 border-l border-gray-300 dark:border-gray-600">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <ThemeToggle />
                    <button onClick={() => setIsOpen(!isOpen)} className="ml-4 p-2 focus:outline-none text-dark dark:text-light hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-light dark:bg-dark border-b border-gray-200 dark:border-gray-800 absolute w-full transition-colors duration-300 shadow-xl">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={() => {
                                    setIsOpen(false);
                                    setActiveSection(link.to);
                                }}
                                className={`cursor-pointer block text-lg font-medium transition-colors ${activeSection === link.to
                                    ? 'text-primary font-bold'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex justify-center space-x-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-transform hover:scale-110"><Github size={24} /></a>
                            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-transform hover:scale-110"><Linkedin size={24} /></a>
                            <a href={`mailto:${profile.social.email}`} className="text-gray-500 hover:text-primary transition-transform hover:scale-110"><Mail size={24} /></a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
