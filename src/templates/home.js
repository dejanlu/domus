import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../containers/layout";
import Hero from "../components/hero";
import HomeGallery from "../components/homeGallery";

import useHomeCards from "../hooks/useHomeCards";
import HomeHeroInfo from "../components/homeHeroInfo";
import ContactData from "../components/contactData";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        slug
        email
        tel
      }
      body
    }
  }
`;

const Home = ({ data }) => {
  const id = data.mdx.frontmatter.slug.split("-")[1];
  const home = useHomeCards().filter((home) => home.id === id)[0];
  return (
    <Layout className="container--home">
      <Hero
        imageName="blog"
        className="hero--about"
        passedImage={home.images[0]}
      />
      <div className="heroMessage--home">
        <HomeHeroInfo
          grad={home.grad}
          adresa={home.adresa}
          tip={home.tip}
          sprat={home.sprat}
          kvadratura={home.kvadratura}
          sobe={home.sobe}
          godina={home.godina}
          cijena={home.cijena}
        />
      </div>
      <div className="homeArticle">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <article>
          <p>Kontakt osoba:</p>
          <p>{data.mdx.frontmatter.author}</p>
          <ContactData
            tel={data.mdx.frontmatter.tel.toString()}
            email={data.mdx.frontmatter.email}
          />
          <Link to="/offer" className="post__link button button--tertiary">
            &larr; Povratak
          </Link>
        </article>
      </div>
      <HomeGallery images={home.images} />
    </Layout>
  );
};

export default Home;
