import { useStaticQuery, graphql } from "gatsby";

const useAgentsCards = (agents) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/^agent-*/" } }) {
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

  return agents.map((agent) => ({
    ...agent,
    image: images.filter((image) =>
      // agent photo prop defined on agent object in json data
      image.childImageSharp.fluid.originalName.includes(agent.photo)
    )[0],
  }));
};

export default useAgentsCards;
