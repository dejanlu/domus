import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const inViewVariants = {
  shown: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { y: 100, opacity: 0, scale: 0.5 },
};

const CardWrapper = ({ children, className }) => {
  const [ref, inView] = useInView({
    rootMargin: "-50px 0px",
    triggerOnce: true,
  });

  return (
    <motion.article
      ref={ref}
      animate={inView ? "shown" : "hidden"}
      variants={inViewVariants}
      className={`card1 ${className}`}
    >
      {children}
    </motion.article>
  );
};

export default CardWrapper;
