import { motion } from "framer-motion";

const stats = [
  {
    value: "04+",
    label: "Major Projects",
  },
  {
    value: "25+",
    label: "Technologies",
  },
  {
    value: "500+",
    label: "Git Commits",
  },
  {
    value: "100%",
    label: "Responsive",
  },
];

const ProjectStats = () => {
  return (
    <section className="mt-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              text-center
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

            <div className="relative z-10">
              <h3 className="text-5xl font-black mb-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </h3>

              <p className="text-gray-400 tracking-wide">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectStats;