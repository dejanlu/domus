import React from "react";

import Layout from "../containers/layout";
import SEO from "../containers/seo";

import Hero from "../components/hero";
import IndexStoryPictures from "../containers/indexStoryPictures";
import IndexStoryContent from "../containers/indexStoryContent";
import IndexHomes from "../containers/indexHomes";
import IndexGallery from "../containers/indexGallery";

// slider
import Slider from "../components/slider";
import content from "../content";
import Message from "../components/message";

const data = content.getContent("poruke");

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

    <Hero imageName="index" />
    <Slider
      sliderConfig={sliderConfig}
      className="hero-messages"
      testid="indexMessage"
    >
      {data.map((message) => (
        <Message
          key={message.ime}
          author={message.ime}
          message={message.text}
        />
      ))}
    </Slider>

    <IndexStoryPictures />
    <IndexStoryContent />

    <IndexHomes />

    <IndexGallery />
  </Layout>
);

export default IndexPage;
