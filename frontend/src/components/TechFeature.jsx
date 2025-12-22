import { motion } from "framer-motion";

const TechFeature = ({ title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative pl-6 border-l-2"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default TechFeature;
