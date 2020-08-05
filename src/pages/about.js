import React from "react";
import { navigate } from "gatsby";

import Layout from "../containers/layout";
import SEO from "../containers/seo";

import { useBackground } from "../hooks/useBackground";
import useAgentsCards from "../hooks/useAgentsCards";

import Hero from "../components/hero";
import HeroMessage from "../components/heroMessage";
import Timeline from "../components/timeline";
import Button from "../components/button";
import CardsSectionWrapper from "../components/cardsSectionWrapper";
import CardWrapper from "../components/cardWrapper";
import AgentCard from "../components/agentCard";

import content from "../content";

const data = content.getContent("about");

const AboutPage = () => (
  <Layout className="container--about">
    <SEO title="Domus nekretnine - o nama" />

    <Hero imageName="about" className="hero--about" />
    <HeroMessage naslov={data.hero.naslov} text={data.hero.text} />

    <Timeline articles={data.timeline} />

    <article
      className="article"
      style={{
        backgroundImage: `url(${useBackground()})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="article__heading heading--primary">
        <h2>{data.vizija.naslov}</h2>
        <Button
          classesArray={["secondary", "secondary--light"]}
          handleClick={() => {
            navigate(`+38765879399`);
          }}
        >
          pozovite nas
        </Button>
      </div>
      <div className="article__content">
        <p className="paragraph heading--light">{data.vizija.text}</p>
      </div>
    </article>

    <CardsSectionWrapper>
      {useAgentsCards(data.agenti).map((agent) => (
        <CardWrapper key={agent.photo} className="agentCard">
          <AgentCard
            key={agent.ime}
            ime={agent.ime}
            email={agent.email}
            tel={agent.tel}
            image={agent.image}
          />
        </CardWrapper>
      ))}
    </CardsSectionWrapper>
  </Layout>
);

export default AboutPage;
