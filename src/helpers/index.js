export const joinHomesData = (data, images) => {
  return data.map((obj) => {
    obj.images = images.filter((image) =>
      image.childImageSharp.fluid.originalName.includes(obj.id)
    );
    return obj;
  });
};
