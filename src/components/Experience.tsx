import React from 'react';
import { portfolioData } from '../data/portfolioData';
const Experience = () => (
  <section id="experience" className="py-20 bg-neutral-900 text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16">Work Experience</h2>
      <div className="relative border-l-2 border-cyan-500 pl-10">
        {portfolioData.experience.map((job, index) => (
          <div key={index} className="mb-12">
            <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-2 mt-1.5 border-2 border-neutral-900"></div>
            <p className="text-sm text-cyan-400 mb-1">{job.period}</p>
            <h3 className="text-lgxl font-bold">{job.role}</h3>
            <p className="text-lg text-neutral-400 mb-4">{job.company}</p>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              {job.description.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Experience;