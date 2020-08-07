import React from "react";
import PropTypes from "prop-types";

const Message = ({
  naslov = null,
  text,
  author = null,
  quotes = false,
  color = "light",
}) => (
  <article className="message">
    {naslov && (
      <h3
        className={`heading heading--tertiary ${
          color === "light" ? "heading--light" : color
        }`}
        data-testid="message__title"
      >
        {naslov}
      </h3>
    )}
    {quotes && <span className="message__quotes message__quotes--open">“</span>}
    <p className={`paragraph ${color === "light" ? "heading--light" : color}`}>
      {text}
    </p>
    {quotes && (
      <span className="message__quotes message__quotes--close">”</span>
    )}
    {author && (
      <p
        className={`paragraph message__author ${
          color === "light" ? "heading--light" : color
        }`}
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
