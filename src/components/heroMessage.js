import React from "react";

const HeroMessage = ({ naslov, text }) => (
  <article className="hero--about__content">
    <h1 className="heading heading--tertiary heading--light">{naslov}</h1>
    <p className="paragraph heading--light">{text}</p>
  </article>
);

export default HeroMessage;
