import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, handleClick, classesArray }) => {
  let classes;
  if (classesArray) {
    classes =
      classesArray.length > 0
        ? classesArray.map((cssClass) => `button--${cssClass}`)
        : "";
  }
  return (
    <button
      className={`button ${classes.join(" ")}`}
      data-testid="button"
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  classesArray: PropTypes.arrayOf(PropTypes.string),
};

export default Button;
