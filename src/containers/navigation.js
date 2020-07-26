import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import {
  RiArrowLeftRightLine,
  RiHome2Line,
  RiUser2Line,
  RiGitRepositoryLine,
  RiBallPenLine,
} from "react-icons/ri";

const navigationVariants = {
  onOpen: {
    width: 320,
    transition: {
      duration: 0.4,
    },
  },
  onClose: {
    width: 80,
    transition: {
      duration: 0.4,
    },
  },
};

const menuButtonVariants = {
  onOpen: {
    x: 230,
    transition: {
      duration: 0.4,
    },
  },
  onClose: {
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

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

const hoverVariants = {
  hover: {
    x: 20,
    scale: 1.2,
    color: "f4f0fa",
    transition: { duration: 0.2 },
  },
};

const Navigation = ({ isOpen, setOpen }) => {
  return (
    <div>
      <motion.nav
        className={`navigation`}
        variants={navigationVariants}
        animate={isOpen ? "onOpen" : "onClose"}
      >
        <motion.figure
          variants={menuButtonVariants}
          className="navigation__menu-button"
          onClick={() => setOpen(!isOpen)}
        >
          <RiArrowLeftRightLine />
        </motion.figure>
        <motion.div whileHover={{ color: "#f4f0fa" }}>
          <Link
            to="/"
            className="navigation__item"
            activeClassName="navigation__item--active"
          >
            <motion.div variants={iconVariants}>
              <RiHome2Line />
            </motion.div>
            <motion.span variants={textVariants}>Početna</motion.span>
          </Link>
        </motion.div>
        <motion.div whileHover={{ color: "#f4f0fa" }}>
          <Link
            to="/about"
            className="navigation__item"
            activeClassName="navigation__item--active"
          >
            <motion.div variants={iconVariants}>
              <RiUser2Line />
            </motion.div>
            <motion.span variants={textVariants}>O nama</motion.span>
          </Link>
        </motion.div>
        <motion.div whileHover={{ color: "#f4f0fa" }}>
          <Link
            to="/offer"
            className="navigation__item"
            activeClassName="navigation__item--active"
          >
            <motion.div variants={iconVariants}>
              <RiGitRepositoryLine />
            </motion.div>
            <motion.span variants={textVariants}>Ponuda objekata</motion.span>
          </Link>
        </motion.div>
        <motion.div whileHover={{ color: "#f4f0fa" }}>
          <Link
            to="/blog"
            className="navigation__item"
            activeClassName="navigation__item--active"
          >
            <motion.div variants={iconVariants}>
              <RiBallPenLine />
            </motion.div>
            <motion.span variants={textVariants}>Naš blog</motion.span>
          </Link>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navigation;
