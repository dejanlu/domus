import React from "react";
import Img from "gatsby-image";

const renderImages = (image) => (
  <Img
    fluid={image}
    key={image.originalName}
    className={image.originalName.substring(0, image.originalName.indexOf("."))}
  />
);

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image) => renderImages(image.childImageSharp.fluid))}
    </div>
  );
};

export default Gallery;
