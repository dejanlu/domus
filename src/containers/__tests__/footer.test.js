import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../footer";

test("footer component renders correctly", () => {
  render(<Footer />);
  expect(screen.getByRole("region")).toBeInTheDocument;
});
