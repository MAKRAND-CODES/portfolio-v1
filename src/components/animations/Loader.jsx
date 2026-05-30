import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 2.2,
        duration: 1,
      }}
      className="fixed inset-0 z-[99999] bg-black flex items-center justify-center pointer-events-none"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
        }}
        className="text-4xl md:text-7xl font-bold tracking-widest"
      >
        MAKRAND
      </motion.h1>
    </motion.div>
  );
};

export default Loader;