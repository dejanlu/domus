import React from "react";

import Layout from "../containers/layout";
import SEO from "../containers/seo";

import Hero from "../components/hero";
import Message from "../components/message";

import OfferFilters from "../containers/offerFilters";

import CardsSectionWrapper from "../components/cardsSectionWrapper";
import CardWrapper from "../components/cardWrapper";
import HomeCard from "../components/homeCard";
import useHomeCards from "../hooks/useHomeCards";
import useHomesFilters from "../hooks/useHomesFilters";

import content from "../content";

const data = content.getContent("offer");

const Offer = () => {
  const homes = useHomeCards();
  const [filteredHomes, setFilters] = useHomesFilters(homes);

  const filterHomes = (filters) => {
    setFilters(filters);
  };

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

      <OfferFilters filterHomes={filterHomes} />

      <CardsSectionWrapper>
        {filteredHomes.map((home) => (
          <CardWrapper className="card" key={`wrapper${home.id}`}>
            <HomeCard key={home.id} {...home} />
          </CardWrapper>
        ))}
        {filteredHomes.length === 0 && (
          <h4 className="heading heading--quaternary">
            Ni jedan objekat ne odgovara zadanim parametrima!
          </h4>
        )}
      </CardsSectionWrapper>
    </Layout>
  );
};

export default Offer;
