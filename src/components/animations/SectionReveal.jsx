import { motion } from "framer-motion";

const SectionReveal = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;