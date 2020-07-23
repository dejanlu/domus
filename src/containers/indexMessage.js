import React from "react";

import content from "../content";
import Message from "../components/message";

const renderMessages = (messagesArray) =>
  messagesArray.map((message) => (
    <Message key={message.ime} author={message.ime} message={message.text} />
  ));

const IndexMessage = () => {
  const data = content.getContent("poruke");

  return (
    <section data-testid="indexMessage" className="hero-messages">
      {renderMessages(data)}
    </section>
  );
};

export default IndexMessage;
