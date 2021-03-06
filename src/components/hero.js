import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import PropTypes from "prop-types";

import Logo from "../components/logo";

export const PureHero = ({ image, className }) => (
  <section className={`hero ${className}`} data-testid="hero">
    <BackgroundImage Tag={"figure"} fluid={image.childImageSharp.fluid}>
      <div className="hero__overlay">
        <Logo />
      </div>
    </BackgroundImage>
  </section>
);

const Hero = ({ imageName, className, passedImage = null }) => {
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

  const image =
    passedImage ||
    images.allFile.nodes.filter((image) =>
      image.childImageSharp.fluid.originalName.includes(imageName)
    )[0];

  return <PureHero image={image} className={className} />;
};

Hero.propTypes = {
  imageName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Hero;
