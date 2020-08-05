import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";

const renderImages = (image) => {
  const imageName = image.originalName.substring(
    0,
    image.originalName.indexOf(".")
  );
  return (
    <Img
      fluid={image}
      key={image.originalName}
      alt={`Gallery image ${imageName}`}
      role="img"
      Tag="div"
      className={imageName}
    />
  );
};

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image) => renderImages(image.childImageSharp.fluid))}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
