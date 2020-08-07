import { useStaticQuery, graphql } from "gatsby";

const useAgentsCards = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/^owner-*/" } }) {
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

  const image = data.allFile.nodes;
  console.log(image);

  return image[0].childImageSharp.fluid;
};

export default useAgentsCards;
