import React from "react";
import { render, cleanup } from "@testing-library/react";

import Message from "../message";

const mockProps = {
  naslov: "some title",
  text: "text content",
  author: "author name",
};

afterEach(cleanup);

describe("<Message />", () => {
  it("should render correctly with all passed props", () => {
    const { getByText } = render(<Message {...mockProps} />);

    expect(getByText(mockProps.naslov)).toBeInTheDocument();
    expect(getByText(mockProps.text)).toBeInTheDocument();
    expect(getByText(`- ${mockProps.author}`)).toBeInTheDocument();
  });

  it("should render correctly without passed naslov and author props", () => {
    const { getByText, queryByTestId } = render(
      <Message text={mockProps.text} />
    );

    expect(queryByTestId("message__title")).toEqual(null);
    expect(getByText(mockProps.text)).toBeInTheDocument();
    expect(queryByTestId("message__author")).toEqual(null);
  });
});
