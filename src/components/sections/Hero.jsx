/*import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import MagneticButton from "../animations/MagneticButton";
import useGsap from "../../hooks/useGsap";

const Hero = () => {
  useGsap();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      // Gradient Overlay
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a,transparent_40%)] opacity-30" />

      // Animated Grid 
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      //Floating Blur Lights
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />

      // Main Content
      <div className="relative z-10 text-center max-w-5xl mx-auto">

        // Small Heading 
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="uppercase tracking-[0.35em] text-sm text-gray-400 mb-6"
        >
          Full Stack MERN Developer
        </motion.p>

        // Main Heading 
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          className="hero-title text-6xl md:text-8xl lg:text-[9rem] font-black leading-none tracking-tight"
        >
          Makrand
          <br />

          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
            Gurjar
          </span>
        </motion.h1>

        // Animated Type Text 
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
          }}
          className="mt-8 text-lg md:text-2xl text-gray-300 font-light"
        >
          <TypeAnimation
            sequence={[
              "Building Futuristic Web Experiences",
              2000,
              "Engineering Premium Full Stack Products",
              2000,
              "Crafting Cinematic UI/UX Experiences",
              2000,
              "Creating Immersive Digital Products",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        // Description
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
          }}
          className="mt-8 max-w-2xl mx-auto text-gray-400 leading-relaxed text-sm md:text-base"
        >
          Full Stack Product Engineer specializing in MERN Stack,
          immersive frontend experiences, premium UI systems,
          scalable architectures, and futuristic digital products.
        </motion.p>

        //Buttons
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.4,
          }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >

          <MagneticButton>
            View Projects
          </MagneticButton>

          <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
            Contact Me
          </button>

        </motion.div>

        // Bottom Scroll Indicator
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
          }}
          className="absolute left-1/2 -translate-x-1/2 mt-24"
        >
          <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="w-1 h-1 rounded-full bg-white"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;*/
/*import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import MagneticButton from "../animations/MagneticButton";


import useGsap from "../../hooks/useGsap";

const Hero = () => {
  useGsap();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-16">

      //Gradient Background 
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a,transparent_40%)] opacity-30" />

      //Grid
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      //Blur Lights
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        //LEFT CONTENT
        <div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="uppercase tracking-[0.35em] text-sm text-gray-400 mb-6"
          >
            Full Stack MERN Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className="hero-title text-6xl md:text-8xl font-black leading-none tracking-tight"
          >
            Makrand
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              Gurjar
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
            }}
            className="mt-8 text-lg md:text-2xl text-gray-300 font-light"
          >
            <TypeAnimation
              sequence={[
                "Building Futuristic Web Experiences",
                2000,
                "Engineering Premium Full Stack Products",
                2000,
                "Crafting Cinematic UI/UX",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
            }}
            className="mt-8 max-w-xl text-gray-400 leading-relaxed"
          >
            Full Stack Product Engineer specializing in MERN Stack,
            immersive frontend experiences, scalable systems,
            premium UI architectures, and futuristic digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.4,
            }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <MagneticButton>
              View Projects
            </MagneticButton>

            <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
              Contact Me
            </button>
          </motion.div>

        </div>

        //RIGHT 3D SCENE
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1,
            duration: 1.2,
          }}
          className="relative"
        >
          <HeroScene />
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;*/
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import MagneticButton from "../animations/MagneticButton";

import useGsap from "../../hooks/useGsap";

const Hero = () => {
  useGsap();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-16">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a,transparent_40%)] opacity-30" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Blur Lights */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="uppercase tracking-[0.35em] text-sm text-gray-400 mb-6"
          >
            Full Stack MERN Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className="hero-title text-6xl md:text-8xl font-black leading-none tracking-tight"
          >
            Makrand
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              Gurjar
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
            }}
            className="mt-8 text-lg md:text-2xl text-gray-300 font-light"
          >
            <TypeAnimation
              sequence={[
                "Building Futuristic Web Experiences",
                2000,
                "Engineering Premium Full Stack Products",
                2000,
                "Crafting Cinematic UI/UX",
                2000,
                "Creating Scalable MERN Architectures",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
            }}
            className="mt-8 max-w-xl text-gray-400 leading-relaxed"
          >
            Full Stack Product Engineer specializing in MERN Stack,
            immersive frontend experiences, scalable systems,
            premium UI architectures, and futuristic digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.4,
            }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <MagneticButton>
              View Projects
            </MagneticButton>

            <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
              Contact Me
            </button>
          </motion.div>

        </div>

        {/* RIGHT FUTURISTIC COMMAND CENTER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1,
            duration: 1.2,
          }}
          className="relative hidden lg:flex items-center justify-center"
        >

          {/* MAIN DASHBOARD */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[520px] h-[320px] rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >

            {/* TOP BAR */}
            <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-5">

              {/* HEADER */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">
                    FlowState
                  </h3>

                  <p className="text-sm text-gray-400">
                    Productivity Intelligence System
                  </p>
                </div>

                <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/20">
                  LIVE
                </div>
              </div>

              {/* ANALYTICS */}
              <div className="grid grid-cols-2 gap-4">

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-gray-400 text-sm">
                    Tasks Completed
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    1,284
                  </h2>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-gray-400 text-sm">
                    Focus Hours
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    342h
                  </h2>
                </div>

              </div>

              {/* GRAPH */}
              <div className="relative h-24 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 overflow-hidden">

                <div className="absolute inset-0 flex items-end gap-2 p-4">

                  <div className="w-4 h-10 rounded-full bg-blue-400/60" />
                  <div className="w-4 h-16 rounded-full bg-blue-400/60" />
                  <div className="w-4 h-8 rounded-full bg-blue-400/60" />
                  <div className="w-4 h-20 rounded-full bg-blue-400/60" />
                  <div className="w-4 h-14 rounded-full bg-blue-400/60" />
                  <div className="w-4 h-24 rounded-full bg-blue-400/60" />

                </div>

              </div>

            </div>

          </motion.div>

          {/* FLOATING TERMINAL */}
          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-10 top-10 w-64 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl p-5"
          >
            <p className="text-green-400 text-sm font-mono">
              SYSTEM STATUS
            </p>

            <div className="mt-4 space-y-2 text-xs text-gray-300 font-mono">
              <p>✓ MongoDB Connected</p>
              <p>✓ JWT Auth Active</p>
              <p>✓ API Stable</p>
              <p>✓ Deployment Live</p>
            </div>
          </motion.div>

          {/* TECH STACK */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-10 bottom-20 w-72 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5"
          >

            <h3 className="text-sm text-gray-400 mb-4">
              Core Stack
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "Tailwind",
                "Framer Motion",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                >
                  {tech}
                </span>
              ))}

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;