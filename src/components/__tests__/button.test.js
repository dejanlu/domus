import React from "react";
import { render, cleanup, act, fireEvent } from "@testing-library/react";

import Button from "../button";

beforeEach(cleanup);

const children = "button text";

const classesArray = ["cssClass1", "cssClass2"];

const handleClick = jest.fn();

describe("<Button />", () => {
  it("should render correctly", () => {
    const { container, getByText } = render(
      <Button handleClick={handleClick} classesArray={classesArray}>
        {children}
      </Button>
    );
    // button text
    expect(getByText(children)).toBeInTheDocument();

    // css classes
    expect(
      container.firstChild.classList.contains(`button--${classesArray[0]}`)
    ).toBe(true);
    expect(
      container.firstChild.classList.contains(`button--${classesArray[1]}`)
    ).toBe(true);
  });

  it("should call passed on click function", () => {
    const { getByTestId } = render(
      <Button handleClick={handleClick} classesArray={classesArray}>
        {children}
      </Button>
    );

    fireEvent.click(getByTestId("button"));

    expect(handleClick).toBeCalledTimes(1);
  });
});
