import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const textVariants = {
  onOpen: {
    opacity: 1,
    x: -190,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
  onClose: {
    opacity: 0,
    x: -170,
    transition: {
      delay: 0,
      duration: 0.2,
    },
  },
};

const iconVariants = {
  onOpen: {
    scale: 0.6,
    x: 40,
    transition: {
      delay: 0.1,
    },
  },
  onClose: { scale: 0.7, x: 0, transition: { duration: 0.2 } },
};

const NavigationItem = ({ link, children, text }) => (
  <motion.div whileHover={{ color: "#f4f0fa" }}>
    <Link
      to={link}
      className="navigation__item"
      activeClassName="navigation__item--active"
      data-testid="navigationItem"
    >
      <motion.div variants={iconVariants}>{children}</motion.div>
      <motion.span variants={textVariants}>{text}</motion.span>
    </Link>
  </motion.div>
);

export default NavigationItem;
