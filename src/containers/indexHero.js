import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Logo from "../components/logo";

export const PureIndexHero = ({ image }) => (
  <section className="hero" data-testid="indexHero">
    <BackgroundImage Tag={"figure"} fluid={image.imageSharp.fluid}>
      <div className="hero__overlay">
        <Logo />
      </div>
    </BackgroundImage>
  </section>
);

const IndexHero = () => {
  const image = useStaticQuery(graphql`
    query {
      imageSharp(fluid: { originalName: { regex: "/^hero.*/" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `);

  return <PureIndexHero image={image} />;
};

export default IndexHero;
