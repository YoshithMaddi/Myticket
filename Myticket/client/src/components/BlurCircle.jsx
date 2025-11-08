import { motion } from "framer-motion";

const BlurCircle = ({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
}) => {
  return (
    <motion.div
      style={{
        top,
        left,
        right,
        bottom,
        position: "absolute",
        zIndex: -50,
        width: "24rem",    // 58 * 0.25rem = 14.5rem (h-58)
        height: "18rem",
        borderRadius: "9999px", // full
        backgroundColor: "rgba(59, 130, 246, 0.3)", // equivalent to bg-primary/30
        filter: "blur(64px)", // ~ blur-3xl
      }}
      animate={{
        y: [0, -20, 0],
        filter: [
          "blur(64px) brightness(0.8)",
          "blur(64px) brightness(1.2)",
          "blur(64px) brightness(0.8)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default BlurCircle;
