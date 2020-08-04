import { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { joinHomesData } from "../helpers";
import useHomesFilters from "./useHomesFilters";

import content from "../content";

const useHomeRecommendedCards = () => {
  const data = useStaticQuery(graphql`
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
  const images = data.allFile.nodes;

  const homes = content.getContent("objekti");

  const joinedData = joinHomesData(homes, images);

  const [filteredHomes, setFilters] = useHomesFilters(joinedData);

  useEffect(() => setFilters({ preporuka: true }), []);

  if (filteredHomes.length > 3)
    filteredHomes.slice(filteredHomes.length - 3, filteredHomes.length);

  return filteredHomes;
};

export default useHomeRecommendedCards;
