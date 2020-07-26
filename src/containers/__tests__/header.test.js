import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Header from "../header";

beforeEach(cleanup);

describe("<Header />", () => {
  it("component renders correctly", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("header")).toBeTruthy();
    expect(getByTestId("navigation")).toBeTruthy();
  });

  it("should show BackgroundOverlay component when navigation is open", () => {
    const { queryByTestId } = render(<Header />);

    expect(queryByTestId("backgroundOverlay")).toBeFalsy();

    fireEvent.click(queryByTestId("menuButton"));
    expect(queryByTestId("backgroundOverlay")).toBeTruthy();

    fireEvent.click(queryByTestId("menuButton"));
    expect(queryByTestId("backgroundOverlay")).toBeFalsy();
  });
});
