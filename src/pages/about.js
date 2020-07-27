import React from "react";

import Layout from "../containers/layout";
import SEO from "../containers/seo";

import Hero from "../components/hero";
import Timeline from "../components/timeline";

import content from "../content";

const data = content.getContent("about");

const AboutPage = () => (
  <Layout className="container--about">
    <SEO title="Domus nekretnine - o nama" />
    <Hero imageName="about" className="hero--about" />

    <article className="hero--about__content">
      <h1 className="heading heading--tertiary heading--light">
        {data.hero.naslov}
      </h1>
      <p className="paragraph heading--light">{data.hero.text}</p>
    </article>

    <Timeline articles={data.timeline} />
  </Layout>
);

export default AboutPage;
