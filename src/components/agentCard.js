import React, { useState } from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";

import { motion } from "framer-motion";

import { RiPhoneLine, RiMailLine } from "react-icons/ri";

import Button from "./button";

const imageVariants = {
  onOpen: {
    width: "50%",
    height: "50%",
    borderRadius: "3%",
    position: "absolute",
    left: 10,
    top: 10,
    right: "auto",
    transition: {
      duration: 0.4,
    },
  },
  onClose: {
    position: "absolute",
    width: "auto",
    height: "75%",
    borderRadius: 0,
    right: 10,
    top: 10,
    left: 10,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
};

const nameVariants = {
  onOpen: {
    position: "absolute",
    left: 10,
    top: "52%",
    transition: {
      delay: 0.1,
      duration: 0.2,
    },
  },
  onClose: {
    position: "absolute",
    top: "77%",
    left: 10,
    transition: {
      delay: 0.1,
      duration: 0.2,
    },
  },
};

const contactVariants = {
  shown: {
    position: "absolute",
    left: 10,
    top: "65%",
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2,
    },
  },
  hidden: {
    position: "absolute",
    opacity: 0,
    top: "77%",
    left: 10,
    transition: {
      duration: 0.1,
    },
  },
};

const AgentCard = ({ ime, email, tel, image }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <motion.header
        variants={imageVariants}
        animate={isOpen ? "onOpen" : "onClose"}
        initial="onClose"
        className="agentCard__header"
      >
        <Img Tag="div" fluid={image.childImageSharp.fluid} alt={ime} />
      </motion.header>
      <motion.p
        variants={nameVariants}
        animate={isOpen ? "onOpen" : "onClose"}
        initial="onClose"
        className="paragraph agentCard__name"
      >
        {ime}
      </motion.p>
      <motion.div
        variants={contactVariants}
        animate={isOpen ? "shown" : "hidden"}
        initial="hidden"
        className="agentCard__content"
      >
        <p className="paragraph agentCard__phone">
          <RiPhoneLine />
          <span>{tel}</span>
        </p>
        <p className="paragraph agentCard__email">
          <RiMailLine />
          <span>{email}</span>
        </p>
      </motion.div>
      <div className="agentCard__button">
        <Button
          classesArray={["tertiary"]}
          handleClick={() => setOpen(!isOpen)}
        >
          Kontakt Informacije &rarr;
        </Button>
      </div>
    </>
  );
};

AgentCard.propTypes = {
  ime: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};

export default AgentCard;
