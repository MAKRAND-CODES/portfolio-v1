/*import { motion } from "framer-motion";

const ProjectCard = ({
  project,
  reverse,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      className={`
        grid
        lg:grid-cols-2
        gap-12
        items-center
        mb-40
        ${
          reverse
            ? "lg:[&>*:first-child]:order-2"
            : ""
        }
      `}
    >
      //IMAGE

      <motion.div
        whileHover={{
          scale: 1.03,
        }}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
        "
      >
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-[420px]
            object-cover
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </motion.div>

      // CONTENT

      <div>

        <p className="text-cyan-400 tracking-[0.35em] text-sm mb-5">
          PROJECT {project.id}
        </p>

        <h3 className="text-5xl font-black mb-4">
          {project.title}
        </h3>

        <h4 className="text-xl text-purple-400 mb-6">
          {project.category}
        </h4>

        <p className="text-gray-400 leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">

          {project.stack.map((tech) => (
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

        <div className="flex gap-4">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              px-6
              py-3
              rounded-full
              bg-cyan-500
              text-black
              font-semibold
            "
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              px-6
              py-3
              rounded-full
              border
              border-white/20
            "
          >
            GitHub
          </a>

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard; */




import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  tag,
  description,
  stack,
  live,
  github,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        h-full
      "
    >
      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

      <div className="relative z-10">

        {/* Tag */}

        <p className="uppercase tracking-[0.3em] text-cyan-400 text-xs mb-4">
          {tag}
        </p>

        {/* Title */}

        <h3 className="text-3xl font-bold mb-4">
          {title}
        </h3>

        {/* Description */}

        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Stack */}

        <div className="flex flex-wrap gap-2 mt-6">

          {stack.map((tech) => (
            <span
              key={tech}
              className="
                px-3
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

        {/* Footer */}

        <div className="flex items-center justify-between mt-8">

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="
              text-cyan-400
              font-medium
              hover:text-cyan-300
              transition
            "
          >
            Live Demo →
          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="
              text-gray-400
              hover:text-white
              transition
            "
          >
            GitHub →
          </a>

        </div>

      </div>

    </motion.div>
  );
};

export default ProjectCard;
