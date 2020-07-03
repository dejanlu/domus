import React from "react";

const Feature = (props) => (
  <article className="feature">
    <div className="feature__icon">
      {props.children ? props.children() : null}
    </div>
    <div className="feature__content">
      <h4 className="heading heading--quaternary">{props.title}</h4>
      <p className="paragraph">{props.text}</p>
    </div>
  </article>
);

export default Feature;
