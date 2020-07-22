import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Gallery from "../components/gallery";

export const PureIndexGallery = ({ images }) => (
  <section data-testid="indexGallery" className="gallery-section">
    <Gallery images={images} />
  </section>
);

const IndexGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/^gal-*/" } }) {
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

  return <PureIndexGallery images={data.allFile.nodes} />;
};

export default IndexGallery;
