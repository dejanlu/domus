import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  RiArrowLeftRightLine,
  RiHome2Line,
  RiUser2Line,
  RiGitRepositoryLine,
  RiBallPenLine,
} from "react-icons/ri";

import NavigationItem from "../components/navigationItem";

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

const Navigation = ({ isOpen, setOpen }) => {
  return (
    <div data-testid="navigation">
      <motion.nav
        className={`navigation`}
        variants={navigationVariants}
        animate={isOpen ? "onOpen" : "onClose"}
      >
        <motion.figure
          variants={menuButtonVariants}
          className="navigation__menu-button"
          onClick={() => setOpen(!isOpen)}
          data-testid="menuButton"
        >
          <RiArrowLeftRightLine />
        </motion.figure>

        <NavigationItem link="/" text="Početna">
          <RiHome2Line />
        </NavigationItem>

        <NavigationItem link="/about" text="O nama">
          <RiUser2Line />
        </NavigationItem>

        <NavigationItem link="/offer" text="Ponuda objekata">
          <RiGitRepositoryLine />
        </NavigationItem>

        <NavigationItem link="/blog" text="Naš blog">
          <RiBallPenLine />
        </NavigationItem>
      </motion.nav>
    </div>
  );
};

Navigation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Navigation;
