import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiArrowDropRightLine } from "react-icons/ri";

import { Checkbox } from "@bit/primefaces.primereact.checkbox";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import {
  RiCommunityLine,
  RiLayoutMasonryLine,
  RiMoneyEuroCircleLine,
  RiRulerLine,
} from "react-icons/ri";

const arrowVariants = {
  open: { rotate: 90 },
  closed: { rotate: 0 },
};

const filtersVarinats = {
  shown: {
    opacity: 1,
    originY: 0,
    height: "100%",
    transition: { duration: 0.3 },
  },
  hidden: { opacity: 0, originY: 0, height: 0, transition: { duration: 0.2 } },
};

const OfferFilters = ({ filterHomes }) => {
  const [isOpen, setOpen] = useState(false);

  const [sobe, setSobe] = useState([]);
  const [tip, setTip] = useState([]);
  const [price, setPrice] = useState([0, 500000]);
  const [area, setArea] = useState([0, 300]);

  useEffect(() => {
    const filters = {};
    sobe.length > 0 ? (filters.sobe = sobe) : delete filters.sobe;
    tip.length > 0 ? (filters.tip = tip) : delete filters.tip;
    price[0] !== 0 || price[1] !== 500000
      ? (filters.cijena = price)
      : delete filters.cijena;
    area[0] !== 0 || area[1] !== 300
      ? (filters.kvadratura = area)
      : delete filters.kvadratura;
    filterHomes(filters);
  }, [sobe, tip, price, area]);

  const handleSobeClick = (e) => {
    sobe.includes(e.value)
      ? setSobe([...sobe.filter((soba) => soba !== e.value)])
      : setSobe([...sobe, e.value]);
  };

  const handleTipClick = (e) => {
    tip.includes(e.value)
      ? setTip([...tip.filter((t) => t !== e.value)])
      : setTip([...tip, e.value]);
  };

  return (
    <div className="offerFilters">
      <motion.div
        className="offerFilters__heading"
        onClick={() => setOpen(!isOpen)}
      >
        <h4 className="heading heading--quaternary">Filteri</h4>
        <motion.span
          variants={arrowVariants}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
        >
          <RiArrowDropRightLine />
        </motion.span>
      </motion.div>

      <motion.div
        className="filters__wrapper"
        animate={isOpen ? "shown" : "hidden"}
        variants={filtersVarinats}
        initial="hidden"
      >
        <div className="filters__category">
          <RiLayoutMasonryLine />
          <h4>Broj soba</h4>
          <div className="filters__option">
            <Checkbox
              inputId="sobe1"
              value="1"
              onChange={handleSobeClick}
              checked={sobe.includes("1")}
            />
            <label htmlFor="sobe1">1</label>
          </div>
          <div className="filters__option">
            <Checkbox
              inputId="sobe2"
              value="2"
              onChange={handleSobeClick}
              checked={sobe.includes("2")}
            />
            <label htmlFor="sobe2">2</label>
          </div>
          <div className="filters__option">
            <Checkbox
              inputId="sobe3"
              value="3"
              onChange={handleSobeClick}
              checked={sobe.includes("3")}
            />
            <label htmlFor="sobe3">3</label>
          </div>
          <div className="filters__option">
            <Checkbox
              inputId="sobe4"
              value="4"
              onChange={handleSobeClick}
              checked={sobe.includes("4")}
            />
            <label htmlFor="sobe4">4</label>
          </div>
          <div className="filters__option">
            <Checkbox
              inputId="sobe5"
              value="5"
              onChange={handleSobeClick}
              checked={sobe.includes("5")}
            />
            <label htmlFor="sobe5">5</label>
          </div>
        </div>

        <div className="filters__category">
          <RiCommunityLine />
          <h4>Vrsta objekta</h4>
          <div className="filters__option">
            <Checkbox
              inputId="tip1"
              value="kuća"
              onChange={handleTipClick}
              checked={tip.includes("kuća")}
            />
            <label htmlFor="tip1">Kuća</label>
          </div>
          <div className="filters__option">
            <Checkbox
              inputId="tip2"
              value="stan"
              onChange={handleTipClick}
              checked={tip.includes("stan")}
            />
            <label htmlFor="tip2">Stan</label>
          </div>
          <div className="filters__option">
            <Checkbox
              inputId="tip3"
              value="prostor"
              onChange={handleTipClick}
              checked={tip.includes("prostor")}
            />
            <label htmlFor="tip3">Poslovni prostor</label>
          </div>
          <div className="filters__option">
            <Checkbox
              inputId="tip4"
              value="plac"
              onChange={handleTipClick}
              checked={tip.includes("plac")}
            />
            <label htmlFor="tip4">Plac</label>
          </div>
        </div>

        <div className="filters__category">
          <RiRulerLine />
          <h4>Kvadratura</h4>
          <p>{`${area[0]} - ${area[1]} `}m&sup2;</p>
          <div className="filters__rangeWrapper">
            <Range
              min={0}
              max={300}
              step={10}
              value={area}
              tabIndex={area}
              onChange={setArea}
              allowCross={false}
            />
          </div>
        </div>

        <div className="filters__category">
          <RiMoneyEuroCircleLine />
          <h4>Cijena</h4>
          <p>{`${price[0]} - ${price[1]} €`}</p>
          <div className="filters__rangeWrapper">
            <Range
              min={0}
              max={500000}
              step={10000}
              value={price}
              tabIndex={price}
              onChange={setPrice}
              allowCross={false}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OfferFilters;
