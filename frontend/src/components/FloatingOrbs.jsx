import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <>
      {/* Top right orb */}
      <motion.div
        className="floating-orb w-96 h-96 -top-48 -right-48 absolute rounded-full"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Bottom left orb */}
      <motion.div
        className="floating-orb w-72 h-72 -bottom-36 -left-36 absolute rounded-full"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Center accent orb */}
      <motion.div
        className="floating-orb w-48 h-48 top-1/2 left-1/4 absolute rounded-full"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  );
};

export default FloatingOrbs;
