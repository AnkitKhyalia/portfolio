// import React from 'react';
// import { portfolioData } from '../data/portfolioData';
// const Skills = () => (
//   <section id="skills" className="py-20 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-white">
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//       <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
//       <div className="flex flex-wrap justify-center gap-4">
//         {portfolioData.skills.map((skill, index) => (
//           <div key={index} className="bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 py-2 px-5 rounded-lg shadow-md hover:bg-cyan-100 dark:hover:bg-cyan-800/50 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-300 cursor-default">
//             {skill}
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );
// export default Skills;
import React from 'react';
import {
  FileCode2,
  Database,
  Smartphone,
  Server,
  Code,
  Wind,
  Network,
} from 'lucide-react';

import reactLogo from '../assets/react.png'; // PNG import
import nextLogo from '../assets/react.png';   // Optional: for Next.js

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="relative text-neutral-100 text-3xl pb-4 mb-8 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-yellow-500 after:rounded">
    {children}
  </h2>
);

const SkillCard = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div className="bg-neutral-800 rounded-lg p-4 flex items-center gap-4 transition-transform hover:scale-105 hover:shadow-lg">
    <div className="w-6 h-6 flex items-center justify-center text-yellow-500">
      {icon}
    </div>
    <span className="text-neutral-300 text-base">{name}</span>
  </div>
);

const skills = {
  "Languages & Databases": [
    { name: "C/C++", icon: <Code size={24} /> },
    { name: "JavaScript", icon: <FileCode2 size={24} /> },
    { name: "TypeScript", icon: <FileCode2 size={24} /> },
    { name: "SQL", icon: <Database size={24} /> },
    { name: "MongoDB", icon: <Database size={24} /> },
  ],
  Frontend: [
    { name: "HTML/CSS", icon: <Code size={24} /> },
    { name: "React.js", icon: <img src={reactLogo} alt="React" className="w-6 h-6 object-contain" /> },
    { name: "Next.js", icon: <img src={nextLogo} alt="Next.js" className="w-6 h-6 object-contain" /> },
    { name: "Tailwind CSS", icon: <Wind size={24} /> },
  ],
  "Backend & Mobile": [
    { name: "Node.js", icon: <Server size={24} /> },
    { name: "Express", icon: <Server size={24} /> },
    { name: "React Native", icon: <Smartphone size={24} /> },
    { name: "Rest APIs", icon: <Network size={24} /> },
  ],
};

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <SectionTitle>My Skills</SectionTitle>
      <div className="space-y-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-xl text-neutral-300 mb-4 capitalize">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillList.map((skill) => (
                <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
