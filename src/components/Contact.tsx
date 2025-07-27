import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone } from 'lucide-react';

// Reusable SectionTitle with the neutral color palette
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="relative text-zinc-100 text-3xl pb-4 mb-8 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-amber-500 after:rounded">
        {children}
    </h2>
);

const Contact: React.FC = () => {
  return (
    <section>
      <SectionTitle>Get in Touch</SectionTitle>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Contact Information and Intro */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-zinc-100">Let's Connect</h3>
          <p className="text-zinc-400 leading-relaxed">
            I'm currently available for new opportunities and collaborations. The best way to reach out is by sending me an email. I'll do my best to get back to you as soon as possible!
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 text-zinc-300">
              <Mail size={20} />
              <span>{portfolioData.email}</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-300">
              <Phone size={20} />
              <span>{portfolioData.phone}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Email Button */}
        <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800 text-center flex flex-col items-center justify-center">
           <h4 className="text-xl font-medium text-zinc-200 mb-6">Ready to start a conversation?</h4>
            <a 
              href={`mailto:${portfolioData.email}`} 
              className="inline-flex items-center justify-center gap-3 bg-amber-500 text-zinc-900 font-bold px-8 py-4 rounded-md hover:bg-amber-600 transition-colors duration-300 shadow-lg hover:shadow-amber-500/20"
            >
              <Mail size={20} />
              <span>Send me an Email</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;