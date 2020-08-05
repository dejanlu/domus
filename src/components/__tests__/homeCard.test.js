import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import gatsby from "../../../__mocks__/gatsby";
import { navigate } from "gatsby";

const useBackground = jest.fn();
useBackground.mockReturnValueOnce(true).mockReturnValueOnce(false);

import HomeCard from "../homeCard";
import * as getBckgImageHook from "../../hooks/useBackground";

const componentProps = {
  id: "001",
  naslov: "dummy title",
  godina: 2020,
  kvadratura: 432,
  sobe: 1234,
  cijena: 50000,
  images: [
    {
      childImageSharp: {
        fluid: {
          originalName: "ob001-01.jpg",
          src: "/static/7e5c9b63f103361b69a8d75c6ae58a42/14b42/ob001-01.jpg",
          base64:
            "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABr2bqLaID/8QAGBAAAwEBAAAAAAAAAAAAAAAAABIhEBH/2gAIAQEAAQUCmtejH//EABcRAQADAAAAAAAAAAAAAAAAAAABERL/2gAIAQMBAT8ByqX/xAAXEQEAAwAAAAAAAAAAAAAAAAAAARES/9oACAECAQE/AdLh/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAERITFB/9oACAEBAAE/IXSU76OXCDfKG1tLP//aAAwDAQACAAMAAAAQo9//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPxAUv//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/EEMv/8QAFxABAQEBAAAAAAAAAAAAAAAAAREAIf/aAAgBAQABPxBIhMIRYZFwUQRlyei5NiDv/9k=",
          aspectRatio: 1.5037593984962405,
          srcSet:
            "/static/7e5c9b63f103361b69a8d75c6ae58a42/f836f/ob001-01.jpg 200w,\n/static/7e5c9b63f103361b69a8d75c6ae58a42/2244e/ob001-01.jpg 400w,\n/static/7e5c9b63f103361b69a8d75c6ae58a42/14b42/ob001-01.jpg 800w",
          sizes: "(max-width: 800px) 100vw, 800px",
        },
      },
    },
  ],
};

afterEach(cleanup);

describe("<HomeCard />", () => {
  it("should render component", () => {
    getBckgImageHook.useBackground = jest.fn();

    const { getByText } = render(<HomeCard {...componentProps} />);

    expect(getByText("dummy title")).toBeInTheDocument();
    expect(getByText("2020")).toBeInTheDocument();
    expect(getByText("432m²")).toBeInTheDocument();
    expect(getByText("1234 SOBE")).toBeInTheDocument();
    expect(getByText("50000")).toBeInTheDocument();
    expect(getBckgImageHook.useBackground).toHaveBeenCalled();
  });

  it("should call navigate function with id argument", () => {
    jest.mock(gatsby);
    const { getByTestId } = render(<HomeCard {...componentProps} />);
    fireEvent.click(getByTestId("button"));
    expect(navigate).toBeCalledWith("/001");
  });
});
