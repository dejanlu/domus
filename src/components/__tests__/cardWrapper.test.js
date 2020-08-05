import React from "react";
import { render, cleanup, act } from "@testing-library/react";
import { mockIsIntersecting } from "react-intersection-observer/test-utils";

import CardWrapper from "../cardWrapper";

const childElement = <p>some text</p>;

afterEach(cleanup);

describe("<CardWrapper />", () => {
  it("should render correctly with passed children", () => {
    const { getByTestId, getByText } = render(
      <CardWrapper>{childElement}</CardWrapper>
    );

    act(() => {
      mockIsIntersecting(getByTestId("cardWrapper"), true);
    });

    expect(getByTestId("cardWrapper")).toBeTruthy();
    expect(getByText("some text")).toBeTruthy();
  });
});
