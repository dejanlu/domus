import React from "react";
import PropTypes from "prop-types";

const Message = ({ naslov = null, text, author = null, quotes = false }) => (
  <article className="message">
    {naslov && (
      <h3
        className="heading heading--tertiary heading--light"
        data-testid="message__title"
      >
        {naslov}
      </h3>
    )}
    {quotes && <span className="message__quotes message__quotes--open">“</span>}
    <p className="paragraph heading--light">{text}</p>
    {quotes && (
      <span className="message__quotes message__quotes--close">”</span>
    )}
    {author && (
      <p
        className="paragraph heading--light message__author "
        data-testid="message__author"
      >{`- ${author}`}</p>
    )}
  </article>
);

Message.propTypes = {
  naslov: PropTypes.string,
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
  quotes: PropTypes.bool,
};

export default Message;
