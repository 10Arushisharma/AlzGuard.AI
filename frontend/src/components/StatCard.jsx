import { motion } from "framer-motion";
import { useState } from "react";

const StatCard = ({ value, label, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onViewportEnter={() => setIsVisible(true)}
      className="glass-card rounded-2xl p-8 text-center"
    >
      <motion.h2
        initial={{ scale: 0.5 }}
        animate={{ scale: isVisible ? 1 : 0.5 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-5xl font-bold mb-2"
      >
        {value}
      </motion.h2>
      <p className="text-lg">{label}</p>
    </motion.div>
  );
};

export default StatCard;
