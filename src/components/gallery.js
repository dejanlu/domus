import React from "react";
import Img from "gatsby-image";

const renderImages = (image) => {
  const imageName = image.originalName.substring(
    0,
    image.originalName.indexOf(".")
  );
  return (
    <Img
      fluid={image}
      key={image.originalName}
      className={imageName}
      alt={`Gallery image ${imageName}`}
      role="img"
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

export default Gallery;
