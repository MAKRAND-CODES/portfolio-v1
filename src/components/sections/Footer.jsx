import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

const stats = [
  {
    label: "PROJECTS",
    value: "03+",
  },
  {
    label: "TECH STACK",
    value: "25+",
  },
  {
    label: "DEPLOYMENTS",
    value: "10+",
  },
  {
    label: "LEARNING",
    value: "∞",
  },
];

const links = [
  {
    title: "GitHub",
    icon: FaGithub,
    href: "https://github.com/MAKRAND-CODES",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/makrand-gurjar005",
  },
  {
    title: "Email",
    icon: FaEnvelope,
    href: "mailto:makrandsanghvi124@gmail.com",
  },
  {
    title: "Resume",
    icon: FaFileAlt,
    href: "/resume.pdf",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020617] py-24 px-6 lg:px-16">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_65%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>

            <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm mb-5">
              DIGITAL COMMAND CENTER
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-none">

              <span className="block">
                MAKRAND
              </span>

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                GURJAR
              </span>

            </h2>

            <p className="mt-8 text-gray-400 leading-relaxed max-w-md">
              Full Stack Developer focused on building
              scalable products, immersive interfaces,
              and modern digital experiences.
            </p>

          </div>

          {/* STATUS PANEL */}
          <motion.div
            whileHover={{ y: -6 }}
            className="
              rounded-3xl
              border
              border-cyan-500/20
              bg-white/5
              backdrop-blur-xl
              p-8
            "
          >

            <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-6">
              System Status
            </p>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Portfolio
                </span>

                <span className="text-green-400">
                  Online
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Availability
                </span>

                <span className="text-green-400">
                  Open
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Response
                </span>

                <span className="text-white">
                  &lt; 24 Hours
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Location
                </span>

                <span className="text-white">
                  India
                </span>
              </div>

            </div>

          </motion.div>

          {/* QUICK NAV */}
          <motion.div
            whileHover={{ y: -6 }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            "
          >

            <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-6">
              Navigation
            </p>

            <div className="grid grid-cols-2 gap-4">

              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="
                    text-gray-400
                    hover:text-cyan-400
                    transition-all
                    duration-300
                  "
                >
                  {item}
                </a>
              ))}

            </div>

          </motion.div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">

          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{
                y: -5,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                text-center
              "
            >

              <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {stat.value}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {stat.label}
              </p>

            </motion.div>
          ))}

        </div>

        {/* SOCIAL DOCK */}
        <div className="flex flex-wrap justify-center gap-5 mt-16">

          {links.map((link) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -5,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  px-6
                  py-4
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/10
                  transition-all
                  duration-300
                "
              >

                <Icon
                  size={20}
                  className="text-cyan-400"
                />

                <span>
                  {link.title}
                </span>

              </motion.a>
            );
          })}

        </div>

        {/* FINAL SIGNATURE */}
        <div className="mt-20 pt-10 border-t border-white/10 text-center">

          <p className="text-gray-500 uppercase tracking-[0.35em] text-xs mb-4">
            Designed & Engineered By
          </p>

          <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Makrand Gurjar
          </h3>

          <p className="mt-4 text-gray-500">
            Building scalable digital experiences with
            modern engineering and creative technology.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;