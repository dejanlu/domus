import React from "react";
import {
  RiMoneyEuroCircleLine,
  RiCalendar2Line,
  RiRulerLine,
  RiLayoutMasonryLine,
  RiCommunityLine,
  RiMapPinLine,
} from "react-icons/ri";

const HomeHeroInfo = ({
  grad,
  adresa,
  tip,
  sprat,
  kvadratura,
  sobe,
  godina,
  cijena,
}) => {
  return (
    <>
      <div className="paragraph heading--light">
        <RiMapPinLine />
        <span>{`${adresa}, ${grad}`}</span>
      </div>
      <div className="paragraph heading--light">
        <RiCommunityLine />
        <span>
          {`${tip.charAt(0).toUpperCase() + tip.slice(1)} ${
            sprat && ", " + sprat + " sprat"
          }`}
        </span>
      </div>
      <div className="paragraph heading--light">
        <RiRulerLine />
        <span>{kvadratura}m&sup2;</span>
      </div>
      <div className="paragraph heading--light">
        <RiLayoutMasonryLine />
        <span>{`${sobe} ${sobe === 1 ? "soba" : "sobe"}`}</span>
      </div>
      <div className="paragraph heading--light">
        <RiCalendar2Line />
        <span>{godina} godine</span>
      </div>
      <div className="paragraph heading--light">
        <RiMoneyEuroCircleLine />
        <span>{cijena} €</span>
      </div>
    </>
  );
};

export default HomeHeroInfo;
