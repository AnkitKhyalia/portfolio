import React from 'react';
import { portfolioData } from '../data/portfolioData';
const Projects = () => (
  <section id="projects" className="py-20 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="bg-neutral-50 dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div className="p-6 flex-grow">
              <h3 className="text-lgxl font-bold mb-2 text-cyan-600 dark:text-cyan-400">{project.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4 flex-grow">{project.description}</p>
            </div>
            <div className="p-6 bg-neutral-100 dark:bg-neutral-900/50">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                    <span key={i} className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
                    ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-neutral-800 dark:text-white font-bold hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-300">
                    View Project &rarr;
                </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Projects;