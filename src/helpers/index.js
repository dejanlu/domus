// add array images prop to home object, and push images with same id
export const joinHomesData = (data, images) => {
  return data.map((obj) => {
    obj.images = images.filter((image) =>
      image.childImageSharp.fluid.originalName.includes(obj.id)
    );
    return obj;
  });
};

// return image from array where name of image name includes passed name argument
export const getImageBasedOnName = (name, images) => {
  const imageNode = images.filter((image) =>
    image.childImageSharp.fluid.originalName.includes(name)
  )[0];
  const { fluid } = imageNode.childImageSharp;
  return fluid;
};
