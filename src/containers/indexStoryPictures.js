import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const getAppropriateImage = (name, images) => {
  const imageNode = images.filter((image) =>
    image.childImageSharp.fluid.originalName.includes(name)
  )[0];
  const { fluid } = imageNode.childImageSharp;
  return fluid;
};

const IndexStoryPictures = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/^story-*/" } }) {
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

  const images = [...data.allFile.nodes];

  return (
    <section data-testid="indexStoryPictures" className="story__pictures">
      <Image
        fluid={getAppropriateImage("background", images)}
        className="story__image-background"
        objectFit="fill"
        objectPosition="50% 50%"
      />

      <Image
        fluid={getAppropriateImage("family", images)}
        className="story__image-family"
        objectFit="cover"
      />

      <Image
        fluid={getAppropriateImage("indoor", images)}
        className="story__image-indoor"
        objectFit="cover"
      />
    </section>
  );
};

export default IndexStoryPictures;
