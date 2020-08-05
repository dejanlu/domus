import React from "react";
import PropTypes from "prop-types";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {
  RiStarLine,
  RiOpenArmLine,
  RiTrophyLine,
  RiCake2Line,
  RiHeartsLine,
} from "react-icons/ri";

const Timeline = ({ articles }) => {
  return (
    <div className="timeline">
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "#3a5fb6", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3a5fb6" }}
          date={articles.danas.datum}
          iconStyle={{ background: "#3a5fb6", color: "#fff" }}
          icon={<RiHeartsLine />}
        >
          <h3 className="vertical-timeline-element-title">
            {articles.danas.naslov}
          </h3>
          <p className="timeline__paragraph">{articles.danas.text}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#3a5fb6", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3a5fb6" }}
          date={articles.selidba.datum}
          iconStyle={{ background: "#3a5fb6", color: "#fff" }}
          icon={<RiCake2Line />}
        >
          <h3 className="vertical-timeline-element-title">
            {articles.selidba.naslov}
          </h3>
          <p className="timeline__paragraph">{articles.selidba.text}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#3a5fb6", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3a5fb6" }}
          date={articles.nagrada.datum}
          iconStyle={{ background: "#3a5fb6", color: "#fff" }}
          icon={<RiTrophyLine />}
        >
          <h3 className="vertical-timeline-element-title">
            {articles.nagrada.naslov}
          </h3>
          <p className="timeline__paragraph">{articles.nagrada.text}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#3a5fb6", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3a5fb6" }}
          date={articles.prosirenje.datum}
          iconStyle={{ background: "#3a5fb6", color: "#fff" }}
          icon={<RiOpenArmLine />}
        >
          <h3 className="vertical-timeline-element-title">
            {articles.prosirenje.naslov}
          </h3>
          <p className="timeline__paragraph">{articles.prosirenje.text}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#3a5fb6", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3a5fb6" }}
          date={articles.otvorenje.datum}
          iconStyle={{ background: "#3a5fb6", color: "#fff" }}
          icon={<RiStarLine />}
        >
          <h3 className="vertical-timeline-element-title">
            {articles.otvorenje.naslov}
          </h3>
          <p className="timeline__paragraph">{articles.otvorenje.text}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

Timeline.propTypes = {
  articles: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Timeline;
