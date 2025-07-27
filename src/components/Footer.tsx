import React from 'react';
import { portfolioData } from '../data/portfolioData';
const Footer = () => (
  <footer className="bg-white dark:bg-neutral-900 text-center py-6 border-t border-neutral-200 dark:border-neutral-800">
    <p className="text-neutral-500 dark:text-neutral-500">&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
  </footer>
);
export default Footer;