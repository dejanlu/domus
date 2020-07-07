import React from "react";

const Button = ({ children, handleClick, classesArray }) => {
  let classes;
  if (classesArray) {
    classes =
      classesArray.length > 0
        ? classesArray.map((cssClass) => `button--${cssClass}`)
        : "";
  }
  return (
    <button className={`button ${classes}`} onClick={() => handleClick()}>
      {children}
    </button>
  );
};

export default Button;
