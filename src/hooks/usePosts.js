import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { slug: { regex: "/^blog-*/" } } }) {
        nodes {
          frontmatter {
            slug
            author
            title
            excerpt
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes.map((post) => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.frontmatter.excerpt,
  }));

  return posts;
};

export default usePosts;
