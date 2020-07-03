import React from "react";
import { render, cleanup } from "@testing-library/react";
import Footer from "../footer";

beforeEach(cleanup);

describe("<Footer />", () => {
  test("component renders correctly", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer")).toBeTruthy();
  });
});
