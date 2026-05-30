/*import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;*/
import Navbar from "../../components/layout/Navbar";

import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Skills from "../../components/sections/Skills";
import TechGalaxy from "../../components/galaxy/TechGalaxy";
import ContactTerminal from "../../components/sections/ContactTerminal";
import Footer from "../../components/sections/Footer";
import Projects from "../../components/sections/Projects";
const Home = () => {
  return (
    <>
      <Hero />

      <Navbar />

      <About />

      <Skills />

      <TechGalaxy />

      <Projects />

      <ContactTerminal />

      <Footer />
    </>
  );
};

export default Home;