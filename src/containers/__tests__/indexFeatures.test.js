import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import IndexFeatures from "../indexFeatures";
import content from "../../content";

beforeEach(cleanup);

const dataWithIcon = [
  {
    id: "feat1",
    icon_name: "RiHomeHeartLine",
    title: "Ut ultrices ultrices enim",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
];

const dataWithoutIcon = [
  {
    id: "feat2",
    icon_name: "no-icon",
    title: "Curabitur sit amet mauris",
    text:
      "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
];

describe("<IndexFeatures />", () => {
  it("should render component correctly", () => {
    const { getByTestId } = render(<IndexFeatures />);
    expect(getByTestId("indexFeatures")).toBeTruthy();
  });

  it("should call getContent function and render feature component with passed props", () => {
    content.getContent = jest.fn().mockReturnValue(dataWithIcon);

    const { getByText, getByTestId } = render(<IndexFeatures />);

    expect(content.getContent).toHaveBeenCalledTimes(1);
    expect(getByText(dataWithIcon[0].title)).toBeInTheDocument();
    expect(getByText(dataWithIcon[0].text)).toBeInTheDocument();
    expect(getByTestId("feature__icon").firstChild).toBeTruthy();
  });

  it("should render content without icon", () => {
    content.getContent = jest.fn().mockReturnValue(dataWithoutIcon);

    const { getByText, getByTestId } = render(<IndexFeatures />);

    expect(getByText(dataWithoutIcon[0].title)).toBeInTheDocument();
    expect(getByText(dataWithoutIcon[0].text)).toBeInTheDocument();
    expect(getByTestId("feature__icon").firstChild).toBeNull();
  });
});
