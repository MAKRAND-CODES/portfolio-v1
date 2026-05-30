import { motion } from "framer-motion";

const HologramPanel = ({
  title,
  description,
  color,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        absolute
        bottom-20
        left-1/2
        -translate-x-1/2
        w-[320px]
        p-6
        rounded-[28px]
        border
        backdrop-blur-2xl
        bg-white/5
        shadow-[0_0_50px_rgba(59,130,246,0.25)]
        z-50
      "
      style={{
        borderColor: color,
      }}
    >

      {/* SCANNING LINE */}
      <motion.div
        animate={{
          y: ["0%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        className="
          absolute
          left-0
          top-0
          w-full
          h-[2px]
          bg-cyan-400/60
          blur-sm
        "
      />

      {/* TITLE */}
      <h3
        className="
          text-2xl
          font-bold
          mb-3
        "
        style={{
          color,
        }}
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-300 leading-relaxed text-sm">
        {description}
      </p>

      {/* STATUS */}
      <div className="mt-5 flex items-center gap-2 text-xs text-cyan-300">

        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

        ACTIVE TECHNOLOGY NODE

      </div>

    </motion.div>
  );
};

export default HologramPanel;