import React from "react";
import { render, cleanup } from "@testing-library/react";
import { PureHero as Hero } from "../hero";

const image = {
  childImageSharp: {
    fluid: {
      aspectRatio: 1.5037593984962405,
      base64:
        "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEEAgP/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABTm3JxICz/8QAGhAAAwADAQAAAAAAAAAAAAAAAQIDABETIf/aAAgBAQABBQJaoB3bK020W9YbkWOf/8QAFhEBAQEAAAAAAAAAAAAAAAAAABES/9oACAEDAQE/AcI//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAREv/aAAgBAgEBPwHtbW//xAAaEAACAgMAAAAAAAAAAAAAAAAAAQIhEBFR/9oACAEBAAY/AqRxFGxzVY//xAAaEAACAwEBAAAAAAAAAAAAAAAAAREhMUFx/9oACAEBAAE/Ib3N+EzVAyfEHKwXYk4SNP/aAAwDAQACAAMAAAAQK8//xAAWEQEBAQAAAAAAAAAAAAAAAAABECH/2gAIAQMBAT8QAGT/AP/EABYRAAMAAAAAAAAAAAAAAAAAAAEQMf/aAAgBAgEBPxCwo//EABkQAQEBAQEBAAAAAAAAAAAAAAERACFRYf/aAAgBAQABPxCwPcLBlMyPYcn3IyWBmtB757DHzdCOkwIrf//Z",
      sizes: "(max-width: 800px) 100vw, 800px",
      srcSet:
        "/static/4e67ee728533d25d5b1997a44d09471b/f836f/hero-index.jpg 200w,\n/static/4e67ee728533d25d5b1997a44d09471b/2244e/hero-index.jpg 400w,\n/static/4e67ee728533d25d5b1997a44d09471b/14b42/hero-index.jpg 800w,\n/static/4e67ee728533d25d5b1997a44d09471b/47498/hero-index.jpg 1200w,\n/static/4e67ee728533d25d5b1997a44d09471b/0e329/hero-index.jpg 1600w,\n/static/4e67ee728533d25d5b1997a44d09471b/c361f/hero-index.jpg 4256w",
      src: "/static/4e67ee728533d25d5b1997a44d09471b/14b42/hero-index.jpg",
      originalName: "hero-index.jpg",
    },
  },
};

beforeEach(cleanup);

describe("<IndexHero />", () => {
  test("component renders correctly", () => {
    const { getByTestId } = render(<Hero image={image} />);
    expect(getByTestId("hero")).toBeTruthy();
  });
});
