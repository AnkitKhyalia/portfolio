import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Book, Briefcase } from "lucide-react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="relative text-gray-100 text-3xl pb-4 mb-4 sm:mb-5 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-yellow-500 after:rounded">
        {children}
    </h2>
);

const TimelineItem: React.FC<{
  title: string;
  subtitle: string;
  text?: string[];
  period?: string;
  cgpa?: string;
}> = ({ title, subtitle, text, period, cgpa }) => (
  <li
    className="relative not-last:mb-5 before:content-[''] before:absolute before:top-[-25px] before:left-[-30px] before:w-px before:h-[calc(100%+50px)] before:bg-neutral-700 
after:content-[''] after:absolute after:top-[5px] after:left-[-33px] after:h-[6px] after:w-[6px] after:bg-yellow-400 after:rounded-full after:shadow-[0_0_0_4px_#383838] 
sm:before:left-[-40px] sm:after:h-2 sm:after:w-2 sm:after:left-[-43px]"
  >
    {" "}
    <h4 className="text-neutral-300 text-6 leading-[1.3] mb-[7px] capitalize">
      {title}
    </h4>
    <div className="flex justify-between items-center">
      <span className="text-yellow-400 text-sm font-normal leading-[1.6]">
        {subtitle}
      </span>
      {period && (
        <span className="text-yellow-400 text-sm font-normal leading-[1.6]">
          {period}
        </span>
      )}
    </div>
    {cgpa && (
      <p className="text-neutral-200 font-light leading-[1.6] mt-2">
        CGPA: {cgpa}
      </p>
    )}
    {text && (
      <ul className="list-disc pl-5 mt-2 text-neutral-200 font-light leading-[1.6] marker:text-yellow-400">
        {text.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
  </li>
);

const Resume: React.FC = () => {
  return (
    <section>
      <SectionTitle>Resume</SectionTitle>
      <div className="mb-[30px]">
        <div className="flex items-center gap-[15px] mb-[25px]">
          <div className="w-[48px] h-[48px] rounded-lg flex justify-center items-center text-yellow-400 text-lg bg-gradient-to-br from-neutral-700 to-neutral-900 shadow-1 relative">
            <div className="absolute inset-px bg-neutral-800 rounded-lg z-[-1]"></div>
            {/* <ion-icon name="briefcase-outline"></ion-icon> */}
            <Briefcase />
          </div>
          <h3 className="text-neutral-300 text-2xl capitalize">Experience</h3>
        </div>
        <ol className="text-6 ml-[45px] sm:ml-[65px]">
          {portfolioData.experience.map((exp, index) => (
            <TimelineItem
              key={index}
              title={exp.role}
              subtitle={exp.company}
              period={exp.period}
              text={exp.description}
            />
          ))}
        </ol>
      </div>
      <div className="mb-[30px]">
        <div className="flex items-center gap-[15px] mb-[25px]">
          <div className="w-[48px] h-[48px] rounded-lg flex justify-center items-center text-yellow-400 text-lg bg-gradient-to-br from-neutral-700 to-neutral-900 shadow-1 relative">
            <div className="absolute inset-px bg-neutral-800 rounded-lg z-[-1]"></div>
            {/* <ion-icon name="book-outline"></ion-icon> */}
            <Book />
          </div>
          <h3 className="text-neutral-300 text-2xl">Education</h3>
        </div>
        <ol className="text-6 ml-[45px] sm:ml-[65px]">
          <TimelineItem
            title={portfolioData.education.degree}
            subtitle={portfolioData.education.institution}
            period={portfolioData.education.period}
            cgpa={portfolioData.education.cgpa}
          />
        </ol>
      </div>
      
      {/* <div className="skills-section">
        <h3 className="text-neutral-300 text-lg capitalize mb-5">My Skills</h3>
        <div className="flex flex-wrap gap-2">
          {portfolioData.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-neutral-800 text-neutral-200 text-sm font-light py-1.5 px-4 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Resume;
