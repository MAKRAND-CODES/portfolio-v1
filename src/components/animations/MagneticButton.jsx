import { motion } from "framer-motion";

const MagneticButton = ({ children }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.08,
        y: -2,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="px-8 py-4 rounded-full bg-white text-black font-medium transition"
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;