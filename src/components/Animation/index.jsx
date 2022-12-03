import { motion } from "framer-motion";

/* export const Animation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      // initial={{ transform: { transitionY: 0 } }}
      animate={{ opacity: 1 }}
      // animate={{ transform: { transitionY: "1000px" } }}
      exit={{ opacity: 0 }}
      // exit={{ transform: { transitionY: 0 } }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}; */

/* export const Animation = ({ isVisible, children }) => (
  <motion.div animate={{ opacity: isVisible ? 1 : 0 }}>{children}</motion.div>
); */

export const AnimBlur = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
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
    initial={{ translateY: "-120vh" }}
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
