import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import data from "../content/objekti.json";
import { joinHomesData } from "../helpers";
import useHomesFilters from "../hooks/useHomesFilters";
import Card from "../components/card";

export const PureIndexHomes = ({ images }) => {
  const joinedData = joinHomesData(data, images);

  const [filteredObjects, setFilters] = useHomesFilters(joinedData);

  useEffect(() => setFilters({ preporuka: true }), []);

  const objects = [...filteredObjects];
  if (objects.length > 3) objects.slice(objects.length - 3, objects.length);

  return (
    <section data-testid="indexHomes" className="homes">
      {objects.length > 0
        ? objects.map((obj) => <Card key={obj.id} {...obj} />)
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
