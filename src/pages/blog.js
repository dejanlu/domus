import React from "react";

import Layout from "../containers/layout";
import SEO from "../containers/seo";

import Hero from "../components/hero";
import Message from "../components/message";
import usePosts from "../hooks/usePosts";
import useAgentsCards from "../hooks/useAgentsCards";

import content from "../content";
import CardsSectionWrapper from "../components/cardsSectionWrapper";
import CardWrapper from "../components/cardWrapper";
import PostPreview from "../components/postPreview";

const data = content.getContent("blog");
const agentsData = content.getContent("about");

const Blog = () => {
  const posts = usePosts();
  const agents = useAgentsCards(agentsData.agenti);

  return (
    <Layout className="container--blog">
      <SEO title="Blog" />

      <Hero imageName="blog" className="hero--about" />
      <div className="heroMessage--blog">
        <Message
          naslov={data.heroMessage.naslov}
          text={data.heroMessage.text}
        />
      </div>

      <CardsSectionWrapper>
        {posts.map((post) => (
          <CardWrapper key={post.slug} className="postPreview">
            <PostPreview
              key={post.slug}
              {...post}
              agent={agents.filter((agent) => agent.ime === post.author)}
            />
          </CardWrapper>
        ))}
      </CardsSectionWrapper>
    </Layout>
  );
};

export default Blog;
