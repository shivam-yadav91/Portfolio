import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Contact = () => {
    const { profile } = portfolioData;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks ${formData.name}! This is a demo form. In a real app, this would send an email.`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-light dark:bg-dark transition-colors relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark dark:text-light">Get In Touch</h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    </motion.div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Have a project in mind or want to say hi? Feel free to send me a message.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="md:w-1/3 space-y-8"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-dark dark:text-light">Email Me</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-1">
                                    <a href={profile.social.email} className="hover:text-primary transition-colors">
                                        {profile.social.email.replace('mailto:', '')}
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-dark dark:text-light">Call Me</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-1">+91 8449424347</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-dark dark:text-light">Location</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-1">India</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="md:w-2/3 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark dark:text-light"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark dark:text-light"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark dark:text-light resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-primary/30"
                            >
                                <span>Send Message</span>
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
