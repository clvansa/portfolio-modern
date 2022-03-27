import React from "react";
import { motion } from "framer-motion";

const MotionCompnent = ({y,text}) => {
  return (
    <motion.h2
      initial={{
        y: y,
        transition: { type: "spring", duration: 1.5, delay: 1 },
      }}
      animate={{
        y: 0,
        transition: { type: "spring", duration: 1.5, delay: 1 },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.h2>
  );
};

export default MotionCompnent;
