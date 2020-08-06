import React from "react";
import { render, cleanup } from "@testing-library/react";

import ContactData from "../contactData";

const componentProps = {
  tel: "1234455",
  email: "test@test.com",
};

afterEach(cleanup);

describe("<ContactData />", () => {
  it("should render correctly", () => {
    const { getByText } = render(<ContactData {...componentProps} />);

    expect(getByText(componentProps.tel)).toBeInTheDocument();
    expect(getByText(componentProps.email)).toBeInTheDocument();
  });
});
