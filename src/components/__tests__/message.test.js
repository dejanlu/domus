import React from "react";
import { render, cleanup } from "@testing-library/react";

import Message from "../message";

const props = {
  author: "test name",
  message: "test text...",
};

beforeEach(cleanup);

describe("<Message />", () => {
  it("should render correctly with passed props", () => {
    const { getByText } = render(<Message {...props} />);

    expect(getByText(/test name*/)).toHaveTextContent(props.author);
    expect(getByText(/^test text...*/)).toHaveTextContent(props.message);
  });
});
