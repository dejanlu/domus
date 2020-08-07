import React from "react";
import Img from "gatsby-image";

import Layout from "../containers/layout";
import SEO from "../containers/seo";

import Hero from "../components/hero";
import IndexStoryPictures from "../containers/indexStoryPictures";
import IndexStoryContent from "../containers/indexStoryContent";
import IndexGallery from "../containers/indexGallery";
import IndexFeatures from "../containers/indexFeatures";

import CardsSectionWrapper from "../components/cardsSectionWrapper";
import CardWrapper from "../components/cardWrapper";
import HomeCard from "../components/homeCard";
import useHomeRecommendedCards from "../hooks/useHomeRecommendedCards";
import useOwnerPhoto from "../hooks/useOwnerPhoto";

// slider
import Slider from "../components/slider";
import content from "../content";
import Message from "../components/message";

const data = content.getContent("poruke");
const porukaVlasnika = content.getContent("porukaVlasnika");

const sliderConfig = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 6000,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const IndexPage = () => (
  <Layout className="container--index">
    <SEO title="Home" />

    <Hero imageName="index" className="hero--index" />
    <Slider
      sliderConfig={sliderConfig}
      className="hero-messages"
      testid="indexMessage"
    >
      {data.map((message) => (
        <Message
          key={message.ime}
          author={message.ime}
          text={message.text}
          quotes={true}
        />
      ))}
    </Slider>

    <section className="ownerMessage">
      <div className="ownerMessage__content">
        <Message
          text={porukaVlasnika.text}
          author={`${porukaVlasnika.ime}, vlasnik`}
          color="heading--color-secondary"
        />
      </div>
      <div className="ownerMessage__photo">
        <Img Tag="figure" fluid={useOwnerPhoto()} />
      </div>
    </section>

    <IndexStoryPictures />
    <IndexStoryContent />

    <IndexFeatures />

    <CardsSectionWrapper>
      {useHomeRecommendedCards().map((home) => (
        <CardWrapper className="card" key={`wrapper${home.id}`}>
          <HomeCard key={home.id} {...home} />
        </CardWrapper>
      ))}
    </CardsSectionWrapper>

    <IndexGallery />
  </Layout>
);

export default IndexPage;
