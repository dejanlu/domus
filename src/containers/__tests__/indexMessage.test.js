import React from "react";
import { render, cleanup } from "@testing-library/react";
import IndexMessage from "../indexMessage";

beforeEach(cleanup);

describe("<IndexMessage />", () => {
  test("component renders correctly", () => {
    const { getByTestId } = render(<IndexMessage />);
    expect(getByTestId("indexMessage")).toBeTruthy();
  });
});
