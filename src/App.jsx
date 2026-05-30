/*function App() {
  return (
    <div>
      HELLO PORTFOLIO
    </div>
  );
}

export default App;*/
/*import Home from "./pages/Home/Home";

function App() {
  return (
    <main className="bg-black text-white">
      <Home />
    </main>
  );
}

export default App;*/
/*import Home from "./pages/Home/Home";
import useLenis from "./hooks/useLenis";
import CustomCursor from "./components/common/CustomCursor";
function App() {
  useLenis();

  return (
    <main className="bg-[#050505] text-white overflow-hidden">
      <CustomCursor/>
      <Home />
    </main>
  );
}

export default App;*/
import Home from "./pages/Home/Home";
import useLenis from "./hooks/useLenis";

import BackgroundGrid from "./components/common/BackgroundGrid";
import Particles from "./components/common/Particles";

import Spotlight from "./components/animations/Spotlight";
import Loader from "./components/animations/Loader";
import ScrollProgress from "./components/common/ScrollProgress";

function App() {
  useLenis();

  return (
    <main className="relative bg-[#050505] text-white overflow-hidden">
      
      <Loader />
      <ScrollProgress />
      

      <Spotlight />

      <BackgroundGrid />

      <Particles />

      <Home />

    </main>
  );
}

export default App;