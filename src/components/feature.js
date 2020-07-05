import React from "react";
import PropTypes from "prop-types";

const Feature = (props) => (
  <article className="feature">
    <div className="feature__icon" data-testid="feature__icon">
      {props.children ? props.children() : null}
    </div>
    <div className="feature__content">
      <h4 className="heading heading--quaternary">{props.title}</h4>
      <p className="paragraph">{props.text}</p>
    </div>
  </article>
);

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.func,
};

export default Feature;
