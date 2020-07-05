import React from "react";
import { render, cleanup } from "@testing-library/react";

import Feature from "../feature";

const componentProps = {
  title: "test title",
  text: "test text",
};

const children = jest.fn();

afterEach(cleanup);

describe("<Feature />", () => {
  it("should render component with passed props", () => {
    const { getByText } = render(
      <Feature {...componentProps}>{children}</Feature>
    );

    expect(getByText(componentProps.title)).toBeInTheDocument();
    expect(getByText(componentProps.text)).toBeInTheDocument();
    expect(children).toHaveBeenCalledTimes(1);
  });

  it("should render correctly component if no children is passed", () => {
    const { getByText, getByTestId } = render(
      <Feature {...componentProps}></Feature>
    );

    expect(getByText(componentProps.title)).toBeInTheDocument();
    expect(getByText(componentProps.text)).toBeInTheDocument();
    expect(getByTestId("feature__icon").firstChild).toBeNull();
  });
});
