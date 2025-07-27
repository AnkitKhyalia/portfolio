import React from 'react';
import { portfolioData } from '../data/portfolioData';
const Education = () => (
    <section id="education" className="py-20 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Education & Accomplishments</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-lg shadow-lg">
                    <h3 className="text-lgxl font-bold text-cyan-600 dark:text-cyan-400 mb-2">{portfolioData.education.degree}</h3>
                    <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-1">{portfolioData.education.institution}</p>
                    <p className="text-neutral-500 dark:text-neutral-400 mb-2">{portfolioData.education.period}</p>
                    <p className="text-neutral-500 dark:text-neutral-400">CGPA: {portfolioData.education.cgpa}</p>
                </div>
                {portfolioData.accomplishments.map((acc, index) => (
                    <div key={index} className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-lg shadow-lg">
                        <h3 className="text-lgxl font-bold text-cyan-600 dark:text-cyan-400 mb-2">{acc.title}</h3>
                        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-1">{acc.source}</p>
                        <p className="text-neutral-500 dark:text-neutral-400">{acc.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
export default Education;