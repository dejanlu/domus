import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { RiArrowRightCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";

const PostPreview = ({ title, author, slug, excerpt, agent }) => {
  return (
    <>
      <motion.div
        className="postPreview__link"
        whileHover={{ scale: 1.2, x: 8 }}
      >
        <Link to={`/${slug}`}>
          <RiArrowRightCircleLine />
        </Link>
      </motion.div>
      <div className="postPreview__content">
        <h3 className="heading heading--quaternary heading--light">{title}</h3>
        <p className="paragraph heading--light">{excerpt}</p>
      </div>
      <div className="postPreview__author">
        <figure className="postPreview__image">
          <Img fluid={agent[0].image.childImageSharp.fluid} alt={author} />
        </figure>
        <h4 className="heading heading--quaternary heading--color-secondary">
          {author}
        </h4>
      </div>
    </>
  );
};

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  agent: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default PostPreview;
