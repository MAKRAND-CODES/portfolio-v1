import { motion } from "framer-motion";

const FeaturedProject = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-cyan-500/20
        bg-white/5
        backdrop-blur-2xl
        p-8
        lg:p-12
        mb-16
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}

        <div>

          <span
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              text-cyan-300
              text-sm
              mb-6
            "
          >
            ⭐ Featured Project
          </span>

          <h3 className="text-5xl md:text-6xl font-black mb-6">
            FlowState
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed">
            Advanced MERN productivity platform designed for
            focus management, task organization, analytics tracking,
            authentication, modern workflows and scalable product architecture.
          </p>

          {/* STACK */}

          <div className="flex flex-wrap gap-3 mt-8">

            {[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "JWT",
              "Tailwind",
              "PWA",
              "Analytics",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  text-sm
                "
              >
                {tech}
              </span>
            ))}

          </div>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="https://flowstate-todo.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="
                px-8
                py-4
                rounded-full
                bg-cyan-500
                text-black
                font-semibold
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Live Demo
            </a>

            <a
              href="#"
              className="
                px-8
                py-4
                rounded-full
                border
                border-white/10
                bg-white/5
                transition-all
                duration-300
                hover:border-cyan-400/40
              "
            >
              GitHub
            </a>

          </div>

        </div>

        {/* RIGHT PREVIEW */}

        <div>

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="
              h-[350px]
              rounded-[30px]
              border
              border-white/10
              bg-gradient-to-br
              from-cyan-500/10
              to-blue-500/10
              flex
              items-center
              justify-center
              overflow-hidden
            "
          >
            <div className="text-center">

              <h4 className="text-4xl font-bold mb-4">
                FlowState
              </h4>

              <p className="text-gray-400">
                Product Preview
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </motion.div>
  );
};

export default FeaturedProject;