import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    // Theme initialization is now handled in ThemeToggle/Navbar or globally via script in index.html to avoid flicker,
    // but for simplicity we keep the class addition logic here if we want global effect or rely on ThemeToggle component logic.
    // Actually, let's keep it simple and let Navbar/ThemeToggle handle it or just set a default class on body.
    // We'll rely on the logic inside ThemeToggle/Navbar for now, or move it up here if needed.
    // Wait, I implemented logic in App.jsx before, but now moved it to ThemeToggle.
    // Let's remove the duplicate logic from App.jsx and rely on the components, 
    // OR keep centralized theme state. Centralized is better for consistency.

    // Re-implementing centralized theme state management passed down or just using local storage + DOM manipulation which is what ThemeToggle does.
    // Since ThemeToggle does it, we don't need it here unless we want to control initial render.

    return (
        <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light font-sans transition-colors duration-300">
            <Navbar />
            <main>
                <Hero />
                <Projects />
                <Skills />
                <Certificates />
                <Timeline />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
