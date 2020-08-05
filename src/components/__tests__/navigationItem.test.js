import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import NavigationItem from "../navigationItem";
import gatsby from "../../../__mocks__/gatsby";
import { Link } from "gatsby";

beforeEach(cleanup);

const componentProps = {
  link: "/dummylink",
  text: "dummytext",
};

describe("<NavigationItem />", () => {
  it("should render component with children and appropriate link", () => {
    const { getByTestId, getByText } = render(
      <NavigationItem {...componentProps}>{"childrenMock"}</NavigationItem>
    );
    expect(getByText(componentProps.text)).toBeInTheDocument();
    expect(getByText("childrenMock")).toBeInTheDocument();
    expect(getByTestId("navigationItem").getAttribute("href")).toBe(
      componentProps.link
    );
  });
});
