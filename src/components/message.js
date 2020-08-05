import React from "react";
import PropTypes from "prop-types";

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

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Message;
