import features from "./features.json";
import objekti from "./objekti.json";
import poruke from "./poruke.json";

const allContent = {
  features,
  objekti,
  poruke,
};

const content = { getContent: (name) => allContent[name] };

export default content;
