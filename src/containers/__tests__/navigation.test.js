import React from "react";
import { render, cleanup, getByText, fireEvent } from "@testing-library/react";

import Navigation from "../navigation";

const setOpen = jest.fn();

beforeEach(cleanup);

describe("<Navigation />", () => {
  it("should render component correctly", () => {
    const { getByTestId } = render(
      <Navigation isOpen={true} setOpen={setOpen} />
    );
    expect(getByTestId("navigation")).toBeTruthy();
  });

  it("should call setOpen function with different value from isOpen", () => {
    const { getByTestId } = render(
      <Navigation isOpen={true} setOpen={setOpen} />
    );
    fireEvent.click(getByTestId("menuButton"));
    expect(setOpen).toBeCalledWith(false);
  });
});
