import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import data from "../content/objekti.json";
import { joinHomesData } from "../helpers";
import useHomesFilters from "../hooks/useHomesFilters";
import Card from "../components/card";

export const PureIndexHomes = ({ images }) => {
  // join objects with images
  const joinedData = joinHomesData(data, images);

  const [filteredObjects, setFilters] = useHomesFilters(joinedData);

  useEffect(() => setFilters({ preporuka: true }), []);

  return (
    <section data-testid="indexHomes" className="homes">
      {filteredObjects.length > 0
        ? filteredObjects.map((obj) => <Card key={obj.id} />)
        : null}
    </section>
  );
};

const IndexHomes = () => {
  const imagesData = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/^ob-*/" } }) {
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

  return <PureIndexHomes images={imagesData.allFile.nodes} />;
};

export default IndexHomes;
