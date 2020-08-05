import features from "./features.json";
import objekti from "./objekti.json";
import poruke from "./poruke.json";
import about from "./about.json";
import offer from "./offer.json";
import blog from "./blog.json";

const allContent = {
  features,
  objekti,
  poruke,
  about,
  offer,
  blog,
};

const content = { getContent: (name) => allContent[name] };

export default content;
