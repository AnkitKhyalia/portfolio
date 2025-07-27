import React from 'react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const navLinks = ['About', 'Resume', 'Skills','Portfolio', 'Contact'];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[hsla(240,1%,17%,0.75)] backdrop-blur-[10px] border border-neutral-700 rounded-t-xl z-10 sm:rounded-t-[20px] lg:absolute lg:top-0 lg:right-0 lg:left-auto lg:w-max lg:bottom-auto lg:rounded-[0_20px] lg:shadow-none">
      <ul className="flex flex-wrap justify-center items-center px-[10px] sm:gap-5 lg:gap-[30px] lg:px-5">
        {navLinks.map((link) => (
          <li key={link}>
            <button
              onClick={() => setActivePage(link)}
              className={`text-neutral-200 text-8 font-light py-5 px-[7px] transition-colors duration-250 ease-in-out hover:text-neutral-600 lg:font-medium ${activePage === link ? 'text-yellow-400' : ''}`}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;