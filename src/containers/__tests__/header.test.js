import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "../header";

beforeEach(cleanup);

describe("<Header />", () => {
  test("component renders correctly", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("header")).toBeTruthy();
  });
});
