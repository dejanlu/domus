import React from "react";

const Message = ({ message, author }) => {
  return (
    <div className="message">
      <span className="message__quotes message__quotes--open">“</span>
      <p className="paragraph heading--light">{message}</p>
      <span className="message__quotes message__quotes--close">”</span>
      <p className="paragraph heading--light message__author"> - {author}</p>
    </div>
  );
};

export default Message;
