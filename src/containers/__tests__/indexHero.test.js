import React from "react";
import { render, cleanup } from "@testing-library/react";
import IndexHero from "../indexHero";

beforeEach(cleanup);

describe("<IndexHero />", () => {
  test("component renders correctly", () => {
    const { getByTestId } = render(<IndexHero />);
    expect(getByTestId("indexHero")).toBeTruthy();
  });
});
