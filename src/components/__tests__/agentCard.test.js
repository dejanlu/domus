import React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";

import AgentCard from "../agentCard";

const componentProps = {
  ime: "dummy name",
  email: "dummy@dummy.com",
  tel: "123456",
  image: {
    childImageSharp: {
      fluid: {
        aspectRatio: 0.7142857142857143,
        base64:
          "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAcABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAwUC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAG7teBaAHDtvW1nYHyv/8QAHBAAAwACAwEAAAAAAAAAAAAAAQIDABEEEhMx/9oACAEBAAEFAvgmz99ZWqoPXyKnYsd15Dh2krCVkUX33pn/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAwEBPwFj/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHxAAAgEEAgMAAAAAAAAAAAAAAAEhAhARMQMSMmGh/9oACAEBAAY/AsiVS37tJx9ozJlHwSS8YKUURvZKW7f/xAAbEAADAQEBAQEAAAAAAAAAAAAAAREhMUFRcf/aAAgBAQABPyGqri0USkuZU/RZEbdaxIdtY2niI+ifGV0+ITAbE0TPhEeoa+L8KU5h/9oADAMBAAIAAwAAABC0IDD/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREQMf/aAAgBAwEBPxCGs6U//8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBEDH/2gAIAQIBAT8Qh1gj/8QAHxABAAICAgIDAAAAAAAAAAAAAQARIUExUWGBobHw/9oACAEBAAE/EFALFVbogzmevW16fUKma8DEEJ1IceepQiKkDgeK8sESZwblk8oXo/XD6BWDq8HxOK0bH2jFUXjSjAYbCu433AADgwT/2Q==",
        sizes: "(max-width: 800px) 100vw, 800px",
        srcSet:
          "/static/49dba31ff9767a16d772f0f4ef752613/f836f/agent-ana-anic.jpg 200w,\n/static/49dba31ff9767a16d772f0f4ef752613/2244e/agent-ana-anic.jpg 400w,\n/static/49dba31ff9767a16d772f0f4ef752613/14b42/agent-ana-anic.jpg 800w,\n/static/49dba31ff9767a16d772f0f4ef752613/47498/agent-ana-anic.jpg 1200w,\n/static/49dba31ff9767a16d772f0f4ef752613/0e329/agent-ana-anic.jpg 1600w,\n/static/49dba31ff9767a16d772f0f4ef752613/d8255/agent-ana-anic.jpg 1920w",
        src:
          "/static/49dba31ff9767a16d772f0f4ef752613/14b42/agent-ana-anic.jpg",
        originalName: "agent-ana-anic.jpg",
      },
    },
  },
};

afterEach(cleanup);

describe("<AgentCard />", () => {
  it("should render correctly", () => {
    const { getByText, getByAltText } = render(
      <AgentCard {...componentProps} />
    );

    expect(getByText("dummy name")).toBeInTheDocument();
    expect(getByAltText("dummy name")).toBeInTheDocument();

    expect(getByText("dummy@dummy.com")).not.toBeVisible();
    expect(getByText("123456")).not.toBeVisible();
  });

  it("should show phone and email elements after button click", async () => {
    const { getByTestId, getByText, rerender } = render(
      <AgentCard {...componentProps} />
    );

    fireEvent.click(getByTestId("button"));

    await waitFor(() => {
      expect(getByText("dummy@dummy.com")).toBeVisible();
      expect(getByText("123456")).toBeVisible();
    });
  });
});
