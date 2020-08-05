import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import useLockBodyScroll from "../hooks/useLockBodyScroll";

const overlayVariants = {
  shown: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },

  hidden: {
    opacity: 0,
  },
};

const BackgroundOverlay = ({ isOpen, setOpen }) => {
  const overlayRef = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (e.target.classList.contains("navigation__overlay--show"))
        setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);

    return () => document.removeEventListener("click", onBodyClick);
  }, []);

  useLockBodyScroll();
  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="shown"
      ref={overlayRef}
      className={`navigation__overlay ${isOpen && "navigation__overlay--show"}`}
      data-testid="backgroundOverlay"
    ></motion.div>
  );
};

BackgroundOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default BackgroundOverlay;
