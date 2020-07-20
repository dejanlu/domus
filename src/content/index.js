import features from "./features.json";
import objekti from "./objekti.json";

const allContent = {
  features,
  objekti,
};

const content = { getContent: (name) => allContent[name] };

export default content;
