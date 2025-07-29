import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import {
  ChevronDown,
  Code,
  Github,
  Linkedin,
  LocateIcon,
  MailIcon,
  Phone,
} from "lucide-react";
import avatar1 from "../assets/images/my-avatar.png";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`bg-[#1E1E1F] border-1 border-neutral-700 rounded-[20px] p-[15px] shadow-1 mb-[10px] max-h-[120px] overflow-hidden transition-all duration-500 ease-in-out sm:w-[520px] sm:mx-auto sm:max-h-[180px] sm:mb-[30px] lg:w-[950px] xl:sticky xl:top-[60px] xl:max-h-max xl:h-full xl:w-auto xl:mb-0 xl:pt-[60px] ${
        isOpen ? "max-h-[405px] sm:max-h-[584px]" : ""
      }`}
    >
      <div className="relative pb-5 flex items-center gap-[15px] sm:gap-[25px] xl:flex-col">
        <div className="bg-gradient-to-br from-neutral-600 to-neutral-800 rounded-[20px] sm:rounded-[30px]">
          {/* Placeholder for avatar */}
          <img
            src={avatar1}
            alt={portfolioData.name}
            width="80"
            className="sm:w-[120px] xl:w-[150px] rounded-[20px] sm:rounded-[30px]"
          />
        </div>
        <div className="info-content xl:text-center">
          <h1 className="text-neutral-300 text-base font-medium tracking-[-0.25px] mb-[10px] sm:text-[26px] sm:mb-[15px] xl:whitespace-nowrap">
            {portfolioData.name}
          </h1>
          <p className="text-neutral-100 bg-neutral-800 text-8 font-light w-max px-3 py-[3px] rounded-lg sm:py-[5px] sm:px-[18px] xl:mx-auto">
            {portfolioData.title}
          </p>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-[-15px] right-[-15px] rounded-tl-none rounded-tr-[15px] rounded-bl-[15px] rounded-br-[15px] text-[13px] text-yellow-400 bg-gradient-to-br from-neutral-700 to-neutral-900 p-[10px] shadow-lg z-[1] transition duration-250 ease-in-out hover:bg-gradient-to-br from-yellow-300 to-transparent sm:top-[-30px] sm:right-[-30px] sm:p-[10px_15px] xl:hidden"
        >
          {/* <span className="hidden sm:block sm:text-8">Show Contacts</span> */}
          <div className="">
            <ChevronDown />
            {/* <ion-icon name="chevron-down"></ion-icon> */}
          </div>
        </button>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out xl:opacity-100 xl:visible ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex justify-start items-center gap-[15px] pb-1 pl-[7px] xl:justify-center">
          <li>
            <a
              href={portfolioData.social.github}
              className="text-neutral-600 text-lg hover:text-neutral-200"
            >
              {/* <ion-icon name="logo-github"></ion-icon> */}
              <Github />
            </a>
          </li>
          <li>
            <a
              href={portfolioData.social.linkedin}
              className="text-neutral-600 text-lg hover:text-neutral-200"
            >
              {/* <ion-icon name="logo-linkedin"></ion-icon> */}
              <Linkedin />
            </a>
          </li>
          
          <li>
            <a
              href={portfolioData.social.leetcode}
              className="text-neutral-600 text-lg hover:text-neutral-200"
            >
              {/* <ion-icon name="logo-linkedin"></ion-icon> */}
              <Code/>
            </a>
          </li>
          
        </ul>
        <div className="w-full h-px bg-jet my-4"></div>
        
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-[15px] sm:gap-y-[30px] xl:grid-cols-1">
          {/* Contact Items */}
          <li className="flex items-center gap-4 min-w-full">
            <div className="w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] rounded-lg flex justify-center items-center text-yellow-400 text-base sm:text-lg bg-gradient-to-br from-neutral-700 to-neutral-900 shadow-1 relative">
              <div className="absolute inset-px bg-neutral-800 rounded-lg z-[-1]"></div>
              <MailIcon />
              {/* <ion-icon name="mail-outline"></ion-icon> */}
            </div>
            <div className="contact-info">
              <p className="text-neutral-600 text-base uppercase mb-0.5">
                Email
              </p>
              <a
                href={`mailto:${portfolioData.email}`}
                className="text-neutral-300  font-bold break-all"
              >
                {portfolioData.email}
              </a>
            </div>
          </li>
          <li className="flex items-center gap-4 min-w-full">
            <div className="w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] rounded-lg flex justify-center items-center text-yellow-400 text-base sm:text-lg bg-gradient-to-br from-neutral-700 to-neutral-900 shadow-1 relative">
              <div className="absolute inset-px bg-neutral-800 rounded-lg z-[-1]"></div>
              {/* <ion-icon name="phone-portrait-outline"></ion-icon> */}
              <Phone />
            </div>
            <div className="contact-info">
              <p className="text-neutral-600 text-base uppercase mb-0.5">
                Phone
              </p>
              <a
                href={`tel:${portfolioData.phone}`}
                className="text-neutral-300 font-bold text-7"
              >
                {portfolioData.phone}
              </a>
            </div>
          </li>
          <li className="flex items-center gap-4 min-w-full">
            <div className="w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] rounded-lg flex justify-center items-center text-yellow-400 text-base sm:text-lg bg-gradient-to-br from-neutral-700 to-neutral-900 shadow-1 relative">
              <div className="absolute inset-px bg-neutral-800 rounded-lg z-[-1]"></div>
              {/* <ion-icon name="location-outline"></ion-icon> */}
              <LocateIcon />
            </div>
            <div className="contact-info">
              <p className="text-neutral-600 text-8 uppercase mb-0.5">
                Location
              </p>
              <address className="text-neutral-300 text-7 font-bold  not-italic">
                {portfolioData.location}
              </address>
            </div>
          </li>
        </ul>
        <div className="w-full h-px bg-jet my-4 xl:my-[15px] xl:opacity-0"></div>
        {/* Social Links */}
        
      </div>
    </aside>
  );
};

export default Sidebar;
