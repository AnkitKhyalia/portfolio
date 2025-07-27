import React from "react";
import { portfolioData } from "../data/portfolioData";
import { ArrowUpRight, ExternalLink, Eye } from "lucide-react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="relative text-neutral-100 text-3xl pb-4 mb-4 sm:mb-5 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-yellow-500 after:rounded">
    {children}
  </h2>
);
const Portfolio: React.FC = () => {
  return (
    <section className="py-12 px-4  min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Portfolio</SectionTitle>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {/* Main Card */}
                  <div className="relative bg-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-yellow-500/20 group-hover:border-yellow-500/30">
                    {/* Image */}
                    <div className="relative h-52 w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-neutral-100 text-xl font-semibold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-neutral-300 text-xs bg-neutral-700/50 backdrop-blur-sm py-1.5 px-3 rounded-full border border-neutral-600/30 group-hover:border-yellow-500/30 group-hover:text-yellow-300 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                        {project.detailedDescription.substring(0, 100)}...
                      </p>
                    </div>

                    {/* Hover Overlay (INSIDE CARD!) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-neutral-900/95 to-black/95 backdrop-blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-4 border border-yellow-500/30 overflow-hidden z-10">
                      <div className="text-center space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 max-h-full overflow-y-auto">
                        <h3 className="text-yellow-400 text-lg font-semibold">
                          {project.title}
                        </h3>
                        <div className="flex-1 min-h-0">
                          <p className="text-neutral-300 text-xs leading-relaxed  overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500/30 scrollbar-track-transparent px-2">
                            {project.detailedDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
