import React from "react";

import Layout from "../containers/layout";
import SEO from "../containers/seo";

import Hero from "../components/hero";
import HeroMessage from "../components/heroMessage";

import content from "../content";
import { element } from "prop-types";

const data = content.getContent("legal");

const renderList = (elements) =>
  elements.map((element) => (
    <li key={element} className="paragraph">
      {element}
    </li>
  ));

const Legal = () => {
  return (
    <Layout className="container--legal">
      <SEO title="Ponuda objekata" />

      <Hero imageName="legal" className="hero--about" />
      <HeroMessage
        naslov={data.heroMessage.naslov}
        text={data.heroMessage.text}
      />
      <section className="legal">
        <h3 className="heading--quaternary">{data.opsteOdredbe.naslov}</h3>
        <p className="paragraph">{data.opsteOdredbe.content}</p>

        <h3 className="heading--quaternary">{data.ponudaNekretnina.naslov}</h3>
        <p className="paragraph">{data.ponudaNekretnina.content}</p>

        <h3 className="heading--quaternary">{data.obavezeAgencije.naslov}</h3>
        <ul>{renderList(data.obavezeAgencije.content)}</ul>

        <h3 className="heading--quaternary">{data.obavezeKlijenta.naslov}</h3>
        <ul>{renderList(data.obavezeKlijenta.content)}</ul>

        <h3 className="heading--quaternary">{data.nadoknada.naslov}</h3>
        <p className="paragraph">{data.nadoknada.content}</p>

        <h3 className="heading--quaternary">{data.prestanakgovora.naslov}</h3>
        <p className="paragraph">{data.prestanakgovora.content}</p>

        <h3 className="heading--quaternary">{data.opsteOdredbe.naslov}</h3>
        <p className="paragraph">{data.opsteOdredbe.content}</p>
      </section>
    </Layout>
  );
};

export default Legal;
