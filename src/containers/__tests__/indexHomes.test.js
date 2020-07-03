import React from "react";
import { render, cleanup } from "@testing-library/react";
import IndexHomes from "../indexHomes";

beforeEach(cleanup);

describe("<IndexHomes />", () => {
  test("component renders correctly", () => {
    const { getByTestId } = render(<IndexHomes />);
    expect(getByTestId("indexHomes")).toBeTruthy();
  });
});
