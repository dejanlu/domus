import React from "react";
import { render, cleanup } from "@testing-library/react";

import CardsSectionWrapper from "../cardsSectionWrapper";

const childElement = <p>some text</p>;

afterEach(cleanup);

describe("<CardsSectionWrapper />", () => {
  it("should render correctly with passed children", () => {
    const { getByTestId, getByText } = render(
      <CardsSectionWrapper>{childElement}</CardsSectionWrapper>
    );

    expect(getByTestId("cardsSectionWrapper")).toBeTruthy();
    expect(getByText("some text")).toBeTruthy();
  });
});
