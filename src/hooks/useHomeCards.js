import { useStaticQuery, graphql } from "gatsby";

import { joinHomesData } from "../helpers";

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

  return joinHomesData(homes, images);
};

export default useHomeRecommendedCards;
