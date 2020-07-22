import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Logo from "../components/logo";

const IndexHero = () => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fluid: { originalName: { regex: "/^hero.*/" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `);

  console.log(data.imageSharp.fluid);

  return (
    <section className="hero" data-testid="indexHero">
      <BackgroundImage Tag={"figure"} fluid={data.imageSharp.fluid}>
        <div className="hero__overlay">
          <Logo />
        </div>
      </BackgroundImage>
    </section>
  );
};

export default IndexHero;
