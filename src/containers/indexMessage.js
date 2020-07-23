import React from "react";
import Slider from "react-slick";

import content from "../content";
import Message from "../components/message";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const renderMessages = (messagesArray) =>
  messagesArray.map((message) => (
    <Message key={message.ime} author={message.ime} message={message.text} />
  ));

const IndexMessage = () => {
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

  return (
    <section data-testid="indexMessage" className="hero-messages">
      <Slider {...sliderConfig}>{renderMessages(data)}</Slider>
    </section>
  );
};

export default IndexMessage;
