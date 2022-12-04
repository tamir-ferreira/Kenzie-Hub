import { motion } from "framer-motion";

export const AnimBlur = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
  >
    {children}
  </motion.div>
);

export const AnimZoom = ({ children }) => (
  <motion.div
    animate={{
      scale: [0, 1],
      opacity: [0, 1],
      rotate: [0, 360],
    }}
    transition={{ duration: 1, ease: "easeIn" }}
  >
    {children}
  </motion.div>
);

export const AnimSlideLeft = ({ children, delay }) => (
  <motion.div
    initial={{ translateX: "100vw" }}
    animate={{ translateX: 0 }}
    transition={{ duration: 1.5, delay: delay, ease: "easeIn" }}
  >
    {children}
  </motion.div>
);

export const AnimSlideRight = ({ children, delay }) => (
  <motion.div
    initial={{ translateX: "-100vw" }}
    animate={{ translateX: 0 }}
    transition={{ duration: 1.5, delay: delay, ease: "easeIn" }}
  >
    {children}
  </motion.div>
);

export const AnimSlideDown = ({ children, delay }) => (
  <motion.div
    initial={{ translateY: "-150vh" }}
    animate={{ translateY: 0 }}
    transition={{ duration: 1.5, delay: delay, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export const AnimRotate = ({ children }) => (
  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      duration: 1.5,
    }}
  >
    {children}
  </motion.div>
);
