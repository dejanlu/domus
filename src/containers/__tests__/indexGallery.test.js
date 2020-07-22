import React from "react";
import { render, cleanup } from "@testing-library/react";
import { PureIndexGallery as IndexGallery } from "../indexGallery";

beforeEach(cleanup);

describe("<IndexGallery />", () => {
  test("component renders correctly", () => {
    const { getByTestId } = render(<IndexGallery />);
    expect(getByTestId("indexGallery")).toBeTruthy();
  });
});
