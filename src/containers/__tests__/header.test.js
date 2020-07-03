import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../header";

test("header component renders correctly", () => {
  render(<Header />);
  expect(screen.getByRole("region")).toBeInTheDocument;
});
