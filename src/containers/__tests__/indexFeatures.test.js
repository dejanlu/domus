import React from "react";
import { render, cleanup } from "@testing-library/react";
import IndexFeatures from "../indexFeatures";

beforeEach(cleanup);

describe("<IndexFeatures />", () => {
  test("component renders correctly", () => {
    const { getByTestId } = render(<IndexFeatures />);
    expect(getByTestId("indexFeatures")).toBeTruthy();
  });
});
