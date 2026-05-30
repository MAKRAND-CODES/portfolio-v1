import { motion } from "framer-motion";

const SkillCard = ({
  title,
  description,
  technologies,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
    >

      {/* HOVER GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-purple-500/10" />

      {/* BORDER GLOW */}
      <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-cyan-400/20 transition-all duration-500" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* TITLE */}
        <h3 className="text-2xl font-semibold mb-4">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* TECH TAGS */}
        <div className="mt-8 flex flex-wrap gap-3">

          {technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{
                scale: 1.08,
              }}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:text-white transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}

        </div>

      </div>

      {/* BLUR LIGHT */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    </motion.div>
  );
};

export default SkillCard;