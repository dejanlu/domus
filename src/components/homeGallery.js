import React from "react";
import ImageGallery from "react-image-gallery";

const getImageAndThumbnail = (imagesArray, image) => {
  const sources = image.childImageSharp.fluid.srcSet.split(",");
  const imageObject = {};
  imageObject.thumbnail = sources[0].split(" ")[0];
  imageObject.original = sources[2].split(" ")[0];
  return [imageObject, ...imagesArray];
};

const HomeGallery = ({ images }) => {
  const imagesArray = images.reduce(getImageAndThumbnail, []);

  return (
    <div className="homeGallery">
      <ImageGallery items={imagesArray} />
    </div>
  );
};

export default HomeGallery;
