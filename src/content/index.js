import features from "./features.json";
import objekti from "./objekti.json";
import poruke from "./poruke.json";
import about from "./about.json";

const allContent = {
  features,
  objekti,
  poruke,
  about,
};

const content = { getContent: (name) => allContent[name] };

export default content;
