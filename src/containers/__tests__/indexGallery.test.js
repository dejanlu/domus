import React from "react";
import { render, cleanup } from "@testing-library/react";
import { PureIndexGallery as IndexGallery } from "../indexGallery";

import indexGalleryUseStaticQuery from "../../../__mocks__/indexGalleryUseStaticQuery";

beforeEach(cleanup);

describe("<IndexGallery />", () => {
  test("component renders correctly", () => {
    const { getByTestId } = render(
      <IndexGallery images={indexGalleryUseStaticQuery} />
    );
    expect(getByTestId("indexGallery")).toBeTruthy();
  });
});
