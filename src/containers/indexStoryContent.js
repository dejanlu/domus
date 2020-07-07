import React from "react";
import { navigate } from "gatsby";

import Button from "../components/button";

const IndexStoryContent = () => {
  return (
    <section data-testid="indexStoryContent" className="story__content">
      <h3 className="heading heading--tertiary heading--color-primary-dark margin-bottom--s">
        &ldquo;Lorem ipsum dolor sit amet&rdquo;
      </h3>
      <p className="paragraph paragraph--color-primary margin-bottom--s">
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim.
      </p>
      <Button
        classesArray={["primary"]}
        handleClick={() => {
          navigate("/ponuda");
        }}
      >
        Pronađi svoj dom
      </Button>
    </section>
  );
};

export default IndexStoryContent;
