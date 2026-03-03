import React from 'react';
import { Github, Linkedin, Mail, } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Footer = () => {
    const { profile } = portfolioData;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-slate-950 border-t border-gray-800 py-12 transition-colors">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 mb-6 inline-block">
                    {profile.name}
                </h2>

                <div className="flex justify-center space-x-6 mb-8">
                    <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                        <Github size={24} />
                    </a>
                    <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                        <Linkedin size={24} />
                    </a>
                    <a href={profile.social.email} className="text-gray-400 hover:text-red-400 transition-colors transform hover:scale-110">
                        <Mail size={24} />
                    </a>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-center text-sm text-gray-400">
                    <p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
                    <span className="hidden md:inline mx-2">•</span>
                    <p className="flex items-center mt-2 md:mt-0">
                         <heart size={14} className="text-red-500 mx-1 fill-current" /> 
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
