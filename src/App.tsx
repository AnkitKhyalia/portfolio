import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

const App = () => {
  const [activePage, setActivePage] = useState("About");

  const renderPage = () => {
    switch (activePage) {
      case "Resume":
        return <Resume />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
        case "Skills":
        return <Skills />;
      case "About":
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen w-full m-0 p-0 bg-[#121212]">
      <div className="  mx-3 py-16 xl:max-w-[1200px] xl:mx-auto xl:flex xl:gap-[25px]">
        <Sidebar />
        <div className="main-content lg:relative lg:w-max lg:mx-auto xl:w-3/4 xl:min-w-[75%]">
          <Navbar activePage={activePage} setActivePage={setActivePage} />
          <article className="bg-[#1E1E1F] border border-neutral-700 rounded-[20px] p-[15px] sm:p-[30px] shadow-1">
            {renderPage()}
          </article>
        </div>
      </div>
    </div>
  );
};

export default App;
