import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Logo from "../components/logo";

export const PureHero = ({ image }) => (
  <section className="hero" data-testid="hero">
    <BackgroundImage Tag={"figure"} fluid={image.childImageSharp.fluid}>
      <div className="hero__overlay">
        <Logo />
      </div>
    </BackgroundImage>
  </section>
);

const Hero = ({ imageName }) => {
  const images = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/^hero-*/" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `);

  const image = images.allFile.nodes.filter((image) =>
    image.childImageSharp.fluid.originalName.includes(imageName)
  );

  return <PureHero image={image[0]} />;
};

export default Hero;
