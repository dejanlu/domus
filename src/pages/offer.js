import React from "react";

import Layout from "../containers/layout";
import SEO from "../containers/seo";

import Hero from "../components/hero";
import HeroMessage from "../components/heroMessage";

import content from "../content";

const data = content.getContent("offer");

const Offer = () => {
  return (
    <Layout className="container--offer">
      <SEO title="Ponuda objekata" />

      <Hero imageName="offer" className="hero--about" />
      <HeroMessage
        naslov={data.heroMessage.naslov}
        text={data.heroMessage.text}
      />
    </Layout>
  );
};

export default Offer;
