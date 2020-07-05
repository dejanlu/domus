import React from "react";
import {
  RiHomeHeartLine,
  RiMapPin2Line,
  RiBarChart2Line,
  RiZoomInLine,
  RiMoneyEuroCircleLine,
  RiShieldStarLine,
} from "react-icons/ri";

import Feature from "../components/feature";
import { getContent } from "../content";

const IndexFeatures = () => {
  const data = getContent("features");

  const icons = [
    RiHomeHeartLine,
    RiMapPin2Line,
    RiBarChart2Line,
    RiZoomInLine,
    RiMoneyEuroCircleLine,
    RiShieldStarLine,
  ];

  return (
    <section className="features" data-testid="indexFeatures">
      {data.map((feature) => (
        <Feature key={feature.id} title={feature.title} text={feature.text}>
          {icons.filter((icon) => icon.name === feature.icon_name)[0]}
        </Feature>
      ))}
    </section>
  );
};

export default IndexFeatures;
