import React from "react";

import Layout from "../containers/layout";
import SEO from "../containers/seo";

import Hero from "../components/hero";
import Message from "../components/message";

import content from "../content";

const data = content.getContent("offer");

const Offer = () => {
  return (
    <Layout className="container--offer">
      <SEO title="Ponuda objekata" />

      <Hero imageName="offer" className="hero--about" />
      <div className="heroMessage--about">
        <Message
          naslov={data.heroMessage.naslov}
          text={data.heroMessage.text}
        />
      </div>
    </Layout>
  );
};

export default Offer;
