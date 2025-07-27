import React, { useContext, useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {  useTheme } from '../hooks/themeprovider';
import { MoonIcon, SunIcon } from 'lucide-react';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-lgxl font-bold text-neutral-800 dark:text-white tracking-wider">
            {portfolioData.name}
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-neutral-600 dark:text-neutral-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-300">About</a>
            <a href="#experience" className="text-neutral-600 dark:text-neutral-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-300">Experience</a>
            <a href="#projects" className="text-neutral-600 dark:text-neutral-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-300">Projects</a>
            <a href="#skills" className="text-neutral-600 dark:text-neutral-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-300">Skills</a>
            <a href="#contact" className="text-neutral-600 dark:text-neutral-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-300">Contact</a>
                <button onClick={toggleTheme} className="p-2 rounded-full text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300">
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;