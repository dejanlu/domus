import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { getImageBasedOnName } from "../helpers";

export const PureIndexStoryPictures = ({ images }) => (
  <section data-testid="indexStoryPictures" className="story__pictures">
    <Image
      fluid={getImageBasedOnName("background", images)}
      className="story__image-background"
      objectFit="fill"
      objectPosition="50% 50%"
    />

    <Image
      fluid={getImageBasedOnName("family", images)}
      className="story__image-family"
      objectFit="cover"
    />

    <Image
      fluid={getImageBasedOnName("indoor", images)}
      className="story__image-indoor"
      objectFit="cover"
    />
  </section>
);

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

  return <PureIndexStoryPictures images={data.allFile.nodes} />;
};

export default IndexStoryPictures;
