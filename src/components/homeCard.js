import React from "react";
import { navigate } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import {
  RiMoneyEuroCircleLine,
  RiCalendar2Line,
  RiRulerLine,
  RiLayoutMasonryLine,
} from "react-icons/ri";

import Button from "./button";
import useBackground from "../hooks/useBackground";

const HomeCard = ({
  id,
  godina,
  kvadratura,
  sobe,
  cijena,
  images,
  naslov,
  backgroundImageURL,
}) => (
  <>
    {images.length > 0 ? (
      <Img fluid={images[0].childImageSharp.fluid} className="card__image" />
    ) : null}
    <div className="card__content">
      <div
        className="card__title"
        style={{ backgroundImage: `url(${useBackground()})` }}
      >
        <h3>{naslov}</h3>
      </div>
      <p>
        <span>
          <RiMoneyEuroCircleLine />
        </span>
        {cijena}
      </p>
      <p>
        <span>
          <RiCalendar2Line />
        </span>
        {godina}
      </p>
      <p>
        <span>
          <RiRulerLine />
        </span>
        {kvadratura}m&sup2;
      </p>
      <p>
        <span>
          <RiLayoutMasonryLine />
        </span>
        {`${sobe} ${parseInt(sobe) > 1 ? "SOBE" : "SOBA"}`}
      </p>
    </div>
    <div className="card__button">
      <Button
        classesArray={["secondary"]}
        handleClick={() => {
          navigate(`/${id}`);
        }}
      >
        doznaj više
      </Button>
    </div>
  </>
);

export default HomeCard;
