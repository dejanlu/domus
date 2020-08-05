import React from "react";
import PropTypes from "prop-types";

const CardsSectionWrapper = ({ children }) => (
  <div className="cardsSectionWrapper" data-testid="cardsSectionWrapper">
    {children}
  </div>
);

CardsSectionWrapper.propTypes = { children: PropTypes.node.isRequired };

export default CardsSectionWrapper;
