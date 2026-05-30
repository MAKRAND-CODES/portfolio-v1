 /*import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 z-50 w-full backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-wide">
          Makrand Gurjar
        </h1>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;*/
/*import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  "About",
  "Projects",
  "Skills",
  "Contact",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[999] transition-all duration-500 ${
        scrolled
          ? "bg-black/40 border border-white/10 backdrop-blur-2xl shadow-2xl"
          : "bg-transparent"
      }`}
      style={{
        borderRadius: "999px",
      }}
    >
      <div className="flex items-center gap-10 px-8 py-4">

        // LOGO 
        <motion.h1
          whileHover={{
            scale: 1.05,
          }}
          className="text-sm md:text-base font-semibold tracking-wide"
        >
          Makrand Sanghvi
        </motion.h1>

        // NAV ITEMS 
        <div className="hidden md:flex items-center gap-6">

          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{
                y: -2,
              }}
              className="relative text-sm text-gray-300 hover:text-white transition-colors duration-300"
            >
              {item}

              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 hover:w-full" />
            </motion.a>
          ))}

        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
*/





import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 w-full z-[999] px-4">
      <nav className="max-w-6xl mx-auto flex items-center justify-between rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl px-6 py-4 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
        
        <a
          href="#home"
          className="font-bold tracking-wide text-white"
        >
          Makrand
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 hover:text-cyan-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 mx-auto max-w-sm rounded-3xl border border-white/10 bg-black/80 backdrop-blur-2xl p-6"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
