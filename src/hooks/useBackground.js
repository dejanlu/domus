import { useStaticQuery, graphql } from "gatsby";

export const useBackground = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { regex: "/^svgBckg*/" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);

  return data.allFile.edges[0].node.publicURL;
};
