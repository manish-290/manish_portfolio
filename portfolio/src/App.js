import AboutMe from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import HeroName from "./components/heroname";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-700 selection:text-gray-400  ">
      <div className="fixed top-0 -z-10 w-full h-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      {/* //container for remaining content */}
      <div className="container mx-auto px-8">
      <Navbar/>
       <HeroName/>
       <AboutMe/>
       <Technologies/>
       <Experience/>
       <Projects/>
       <Contact/>
      </div>
      
    </div>
  );
}

export default App;
