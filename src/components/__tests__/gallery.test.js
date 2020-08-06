import React from "react";
import { render, cleanup } from "@testing-library/react";

import Gallery from "../gallery";

afterEach(cleanup);

const mockImagesArray = [
  {
    childImageSharp: {
      fluid: {
        originalName: "gal-12.jpg",
        src: "/static/1d4ec1f9d311e89c234bf92fd181a30c/14b42/gal-12.jpg",
        base64:
          "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAdMKLDDIXkf/xAAaEAADAAMBAAAAAAAAAAAAAAAAAQIDERIh/9oACAEBAAEFAp4ZHp1hNtE3Q4k//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECERL/2gAIAQMBAT8BqJlH/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAES/9oACAECAQE/AaZbP//EABkQAAMBAQEAAAAAAAAAAAAAAAARIQExMv/aAAgBAQAGPwKI1qHrCQTOH//EABkQAQEBAQEBAAAAAAAAAAAAAAERACExUf/aAAgBAQABPyE2tOMTl9buzQmtb6+Zg+D1yGo7v//aAAwDAQACAAMAAAAQZ/8A/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERYf/aAAgBAwEBPxBQkMz/xAAXEQADAQAAAAAAAAAAAAAAAAABEBEx/9oACAECAQE/EDvV/wD/xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMWFR/9oACAEBAAE/EKsKaLcfYKkUMFG7FwWVa99JvXg8WRTtaj6+/ZriFs//2Q==",
        aspectRatio: 1.7699115044247788,
        srcSet:
          "/static/1d4ec1f9d311e89c234bf92fd181a30c/f836f/gal-12.jpg 200w,\n/static/1d4ec1f9d311e89c234bf92fd181a30c/2244e/gal-12.jpg 400w,\n/static/1d4ec1f9d311e89c234bf92fd181a30c/14b42/gal-12.jpg 800w,\n/static/1d4ec1f9d311e89c234bf92fd181a30c/47498/gal-12.jpg 1200w",
        sizes: "(max-width: 800px) 100vw, 800px",
      },
    },
  },
  {
    childImageSharp: {
      fluid: {
        originalName: "gal-08.jpg",
        src: "/static/82ab0731f08536ff6c5bfa874685c7cf/14b42/gal-08.jpg",
        base64:
          "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUBBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe7J4uIg/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAEwMSFCH/2gAIAQEAAQUCt1gyqVHkZzZaUToM/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHRAAAgIBBQAAAAAAAAAAAAAAAAECERAxUXKBkf/aAAgBAQAGPwKmvC6musPiRrc0P//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExQbH/2gAIAQEAAT8hobiBeIK6Hkdzu3rAGPaQM8fE3btubP/aAAwDAQACAAMAAAAQhw//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAeEAEBAAEFAAMAAAAAAAAAAAABEQAhMUFRYXGBof/aAAgBAQABPxAUn7qp8+e4brAlUt7mphhhpUTv15iYAq9HjNvAyX7H7glfU4YdbZ//2Q==",
        aspectRatio: 1.5037593984962405,
        srcSet:
          "/static/82ab0731f08536ff6c5bfa874685c7cf/f836f/gal-08.jpg 200w,\n/static/82ab0731f08536ff6c5bfa874685c7cf/2244e/gal-08.jpg 400w,\n/static/82ab0731f08536ff6c5bfa874685c7cf/14b42/gal-08.jpg 800w,\n/static/82ab0731f08536ff6c5bfa874685c7cf/47498/gal-08.jpg 1200w,\n/static/82ab0731f08536ff6c5bfa874685c7cf/0e329/gal-08.jpg 1600w,\n/static/82ab0731f08536ff6c5bfa874685c7cf/50587/gal-08.jpg 2400w",
        sizes: "(max-width: 800px) 100vw, 800px",
      },
    },
  },
  {
    childImageSharp: {
      fluid: {
        originalName: "gal-11.jpg",
        src: "/static/8aee062d2ac4bdf327643b21e56236c0/14b42/gal-11.jpg",
        base64:
          "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAgP/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAGltHoE0Txn/8QAGhAAAgIDAAAAAAAAAAAAAAAAAAECERASIf/aAAgBAQABBQK0J2avEY8P/8QAFhEAAwAAAAAAAAAAAAAAAAAAAQIQ/9oACAEDAQE/ASs//8QAFhEAAwAAAAAAAAAAAAAAAAAAAQIQ/9oACAECAQE/AQ0//8QAGRAAAgMBAAAAAAAAAAAAAAAAAAEQETFB/9oACAEBAAY/Ao5FJ0af/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAERITFR4f/aAAgBAQABPyFcLvhEo1udGz6FX1tmuAO11j//2gAMAwEAAgADAAAAEMzP/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQEQ/9oACAEDAQE/EAjn/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQEQ/9oACAECAQE/EFpn/8QAGxABAQEAAgMAAAAAAAAAAAAAAREAMUEhYZH/2gAIAQEAAT8QMxc2iYFMqJ2y1PpZIXn3nG/IeLO+ecpkxlu//9k=",
        aspectRatio: 1.5037593984962405,
        srcSet:
          "/static/8aee062d2ac4bdf327643b21e56236c0/f836f/gal-11.jpg 200w,\n/static/8aee062d2ac4bdf327643b21e56236c0/2244e/gal-11.jpg 400w,\n/static/8aee062d2ac4bdf327643b21e56236c0/14b42/gal-11.jpg 800w,\n/static/8aee062d2ac4bdf327643b21e56236c0/47498/gal-11.jpg 1200w,\n/static/8aee062d2ac4bdf327643b21e56236c0/0e329/gal-11.jpg 1600w,\n/static/8aee062d2ac4bdf327643b21e56236c0/d8255/gal-11.jpg 1920w",
        sizes: "(max-width: 800px) 100vw, 800px",
      },
    },
  },
];

beforeEach(cleanup);

describe("<Gallery />", () => {
  it("should render correctly", () => {
    const { getAllByAltText, getByAltText } = render(
      <Gallery images={mockImagesArray} />
    );

    // render correct number of images
    expect(getAllByAltText(/^Gallery image*/).length).toEqual(3);

    // add correct class to each image
    expect(getByAltText("Gallery image gal-12")).toBeTruthy();
    expect(getByAltText("Gallery image gal-08")).toBeTruthy();
    expect(getByAltText("Gallery image gal-11")).toBeTruthy();
  });
});
