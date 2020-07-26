import React from "react";
import SlickSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = ({ testid, className, children, sliderConfig }) => {
  return (
    <section data-testid={testid} className={className}>
      <SlickSlider {...sliderConfig}>{children}</SlickSlider>
    </section>
  );
};

export default Slider;
