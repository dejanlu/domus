import React from "react";
import { render, cleanup } from "@testing-library/react";
import IndexStoryContent from "../indexStoryContent";

beforeEach(cleanup);

describe("<IndexStoryContent />", () => {
  test("component renders correctly", () => {
    const { getByTestId } = render(<IndexStoryContent />);
    expect(getByTestId("indexStoryContent")).toBeTruthy();
  });
});
