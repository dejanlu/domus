import React from "react";

import Layout from "../containers/layout";
import SEO from "../containers/seo";

import IndexHero from "../containers/indexHero";
import IndexMessage from "../containers/indexMessage";
import IndexFeatures from "../containers/indexFeatures";
import IndexStoryPictures from "../containers/indexStoryPictures";
import IndexStoryContent from "../containers/indexStoryContent";
import IndexHomes from "../containers/indexHomes";
import IndexGallery from "../containers/indexGallery";

// hero
// realtors
// features
// story__pictures
// story__content
// homes
// gallery

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexHero />
    <IndexMessage />
    <IndexFeatures />
    <IndexStoryPictures />
    <IndexStoryContent />
    <IndexHomes />
    <IndexGallery />
  </Layout>
);

export default IndexPage;
