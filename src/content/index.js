import features from "./features.json";

const content = {
  features,
};

export const getContent = (name) => content[name];
