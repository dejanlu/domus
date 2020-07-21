import React from "react";
import { render, cleanup } from "@testing-library/react";
import { PureIndexHomes as IndexHomes } from "../indexHomes";

import indexHomesUseStaticQuery from "../../../__mocks__/indexHomesUseStaticQuery";
import { useStaticQuery } from "gatsby";

beforeEach(() => {
  cleanup;
  useStaticQuery.mockImplementation(() => ({
    allFile: {
      edges: [
        {
          node: {
            publicURL: "dummyData",
          },
        },
      ],
    },
  }));
});

describe("<IndexHomes />", () => {
  test("component renders correctly", () => {
    const { getByTestId } = render(
      <IndexHomes images={indexHomesUseStaticQuery} />
    );
    expect(getByTestId("indexHomes")).toBeTruthy();
  });
});
