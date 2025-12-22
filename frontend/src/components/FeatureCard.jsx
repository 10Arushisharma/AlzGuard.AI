import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card rounded-2xl p-8 cursor-pointer transition-all duration-300"
    >
      <motion.div
        className="text-5xl mb-6 w-16 h-16 flex items-center justify-center rounded-xl"
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
