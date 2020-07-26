import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import BackgroundOverlay from "../backgroundOverlay";

beforeEach(cleanup);

const setOpen = jest.fn();

describe("<BackgroundOveraly />", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(
      <BackgroundOverlay isOpen={true} setOpen={setOpen} />
    );
    expect(getByTestId("backgroundOverlay")).toBeInTheDocument();
  });
  it("should call setOpen when element is clicked", () => {
    const { getByTestId } = render(
      <BackgroundOverlay isOpen={true} setOpen={setOpen} />
    );
    fireEvent.click(getByTestId("backgroundOverlay"));
    expect(setOpen).toBeCalledWith(false);
  });
});
