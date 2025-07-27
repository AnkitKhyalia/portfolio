// import React, { useContext } from 'react';
// import { portfolioData } from './Data';
// import { ThemeContext } from '../hooks/themeprovider';

// const About = () => {
//     const theme = useContext(ThemeContext);

//     const initials = portfolioData.name.split(' ').map(n => n[0]).join('');
//     const mode = theme?.theme || 'light';
//     const bgColor = mode === 'dark' ? '1F2937' : 'E5E7EB';
//     const textColor = mode === 'dark' ? 'E5E7EB' : '1F2937';

//     return (
//         <section id="about" className="py-20 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
//                 <div className="flex flex-col md:flex-row items-center gap-12">
//                     <div className="md:w-1/3 text-center">
//                         <img 
//                             src={`https://placehold.co/400x400/${bgColor}/${textColor}?text=${initials}`} 
//                             alt={portfolioData.name}
//                             className="rounded-full w-64 h-64 mx-auto border-4 border-cyan-500 shadow-lg"
//                         />
//                     </div>
//                     <div className="md:w-2/3">
//                         <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
//                             I am a Computer Science graduate from NIT Jalandhar, currently working as a Junior Software Engineer. My passion lies in creating efficient, scalable, and user-friendly applications. I have hands-on experience with the full software development lifecycle, from concept to deployment.
//                         </p>
//                         <p className="text-lg text-neutral-600 dark:text-neutral-300">
//                             I thrive in collaborative environments and am always eager to learn new technologies and take on challenging problems. My goal is to leverage my skills to build impactful products that solve real-world problems.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
// export default About;
import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, Layers, Server, Smartphone } from 'lucide-react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="relative text-neutral-100 text-3xl pb-4 mb-4 sm:mb-5 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-yellow-500 after:rounded">
        {children}
    </h2>
);

// Services data with standard icon colors
const services = [
  {
    icon: <Code size={38} className="text-yellow-500" />,
    title: "Frontend Development",
    description: "Building modern, responsive, and intuitive user interfaces with React.js and Next.js."
  },
  {
    icon: <Server size={38} className="text-yellow-500" />,
    title: "Backend Development",
    description: "Creating robust and scalable server-side applications and APIs using Node.js and Express."
  },
  {
    icon: <Smartphone size={38} className="text-yellow-500" />,
    title: "Mobile App Development",
    description: "Developing cross-platform mobile applications for iOS and Android using React Native."
  },
  {
    icon: <Layers size={38} className="text-yellow-500" />,
    title: "Full-Stack Solutions",
    description: "Designing and deploying end-to-end applications with the MERN stack and cloud technologies."
  }
];

const About: React.FC = () => {
    return (
        <section>
            <SectionTitle>About Me</SectionTitle>
            <div className="text-neutral-400 text-base font-light leading-relaxed mb-10">
                <p>{portfolioData.introduction}</p>
            </div>

            {/* What I'm doing section */}
            <section>
              <h3 className="text-neutral-100 text-2xl capitalize mb-5">What I'm doing</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {services.map((service) => (
                  <li key={service.title} className="bg-neutral-800 p-px rounded-xl shadow-lg">
                    <div className="bg-neutral-900 h-full w-full rounded-xl p-5 sm:p-8 flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left sm:gap-5">
                      
                      {/* Icon Box */}
                      <div className="w-12 h-12 rounded-lg flex justify-center items-center bg-neutral-800 shadow-md mb-4 sm:mb-0 sm:flex-shrink-0">
                          {service.icon}
                      </div>
                      
                      {/* Content Box */}
                      <div>
                        <h4 className="text-neutral-100 text-lg capitalize mb-2">{service.title}</h4>
                        <p className="text-neutral-400 text-base font-light leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
        </section>
    );
};

export default About; 