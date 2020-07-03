import React from "react";
import { render, cleanup } from "@testing-library/react";
import IndexStoryPictures from "../indexStoryPictures";

beforeEach(cleanup);

describe("<IndexStoryPictures />", () => {
  test("component renders correctly", () => {
    const { getByTestId } = render(<IndexStoryPictures />);
    expect(getByTestId("indexStoryPictures")).toBeTruthy();
  });
});
