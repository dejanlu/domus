import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../containers/layout";
import Hero from "../components/hero";
import Message from "../components/message";
import useAgentsCards from "../hooks/useAgentsCards";
import ContactData from "../components/contactData";

import content from "../content";

const agentsData = content.getContent("about");

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        excerpt
      }
      body
    }
  }
`;

const Page = ({ data }) => {
  const { title } = data.mdx.frontmatter;
  const agents = useAgentsCards(agentsData.agenti);
  const agent = agents.filter(
    (agent) => agent.ime === data.mdx.frontmatter.author
  )[0];
  return (
    <Layout className="container--blog">
      <Hero
        imageName="blog"
        className="hero--about"
        passedImage={agent.image}
      />
      <div className="heroMessage--post">
        <Message
          text={data.mdx.frontmatter.excerpt}
          author={data.mdx.frontmatter.author}
        />
      </div>

      <section className="post">
        <h4 className="heading heading--quaternary">{title}</h4>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <span className="post__author">{`- ${agent.ime}`}</span>
        <ContactData tel={agent.tel} email={agent.email} />
        <Link to="/blog" className="post__link button button--tertiary">
          &larr; Povratak
        </Link>
      </section>
    </Layout>
  );
};

export default Page;
