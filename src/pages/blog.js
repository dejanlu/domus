import React from "react";

import Layout from "../containers/layout";
import SEO from "../containers/seo";

import Hero from "../components/hero";
import HeroMessage from "../components/heroMessage";

import content from "../content";

const data = content.getContent("blog");

const Blog = () => {
  return (
    <Layout className="container--blog">
      <SEO title="Blog" />

      <Hero imageName="blog" className="hero--about" />
      <HeroMessage
        naslov={data.heroMessage.naslov}
        text={data.heroMessage.text}
      />
    </Layout>
  );
};

export default Blog;
