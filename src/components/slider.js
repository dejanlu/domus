import React from "react";
import SlickSlider from "react-slick";
import PropTypes from "prop-types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = ({ testid, className, children, sliderConfig }) => {
  return (
    <section data-testid={testid} className={className}>
      <SlickSlider {...sliderConfig}>{children}</SlickSlider>
    </section>
  );
};

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  testid: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  sliderConfig: PropTypes.object.isRequired,
};

export default Slider;
