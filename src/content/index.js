import features from "./features.json";

const allContent = {
  features,
};

const content = { getContent: (name) => allContent[name] };

export default content;
