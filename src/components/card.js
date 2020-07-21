import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import {
  RiMoneyEuroCircleLine,
  RiCalendar2Line,
  RiRulerLine,
  RiLayoutMasonryLine,
} from "react-icons/ri";

import Button from "./button";

const PureCard = ({
  id,
  godina,
  kvadratura,
  sobe,
  cijena,
  images,
  backgroundImageURL,
}) => (
  <article
    className="card"
    style={{ backgroundImage: `url(${backgroundImageURL})` }}
  >
    {images.length > 0 ? (
      <Img fluid={images[0].childImageSharp.fluid} className="card__image" />
    ) : null}
    <div className="card__content">
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
  </article>
);

const Card = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { regex: "/^cardBckg*/" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);
  const { publicURL } = data.allFile.edges[0].node;

  return <PureCard backgroundImageURL={publicURL} {...props} />;
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  godina: PropTypes.number.isRequired,
  kvadratura: PropTypes.number.isRequired,
  sobe: PropTypes.number.isRequired,
  cijena: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.object),
};

export default Card;
