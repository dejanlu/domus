import React from "react";
import { render, cleanup } from "@testing-library/react";
import { PureIndexStoryPictures as IndexStoryPictures } from "../indexStoryPictures";

beforeEach(cleanup);

const mockImages = [
  {
    childImageSharp: {
      fluid: {
        originalName: "story-indoor.jpg",
        src: "/static/02748fbc884c829eb3e69547591e976e/14b42/story-indoor.jpg",
        base64:
          "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQCAwUG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGnZVf0jnCIP//EABwQAAAGAwAAAAAAAAAAAAAAAAABAgMRMhIiMf/aAAgBAQABBQLYgRQ07fCFq45f/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BCf/EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AVn/xAAYEAADAQEAAAAAAAAAAAAAAAABEBEAIf/aAAgBAQAGPwLlcBR3/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAEhMRFh/9oACAEBAAE/IXbPwsvlpqUMrBHlwYP/2gAMAwEAAgADAAAAEIsf/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERMf/aAAgBAwEBPxCFYsP/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREx/9oACAECAQE/ELRD0//EABwQAAICAgMAAAAAAAAAAAAAAAERACExYVGBkf/aAAgBAQABPxAiqMkUyriLrSuNiXTCp2Rh7GtABpaheyf/2Q==",
        aspectRatio: 1.492537313432836,
        srcSet:
          "/static/02748fbc884c829eb3e69547591e976e/f836f/story-indoor.jpg 200w,\n/static/02748fbc884c829eb3e69547591e976e/2244e/story-indoor.jpg 400w,\n/static/02748fbc884c829eb3e69547591e976e/14b42/story-indoor.jpg 800w,\n/static/02748fbc884c829eb3e69547591e976e/47498/story-indoor.jpg 1200w,\n/static/02748fbc884c829eb3e69547591e976e/0e329/story-indoor.jpg 1600w,\n/static/02748fbc884c829eb3e69547591e976e/c3e15/story-indoor.jpg 4240w",
        sizes: "(max-width: 800px) 100vw, 800px",
      },
    },
  },
  {
    childImageSharp: {
      fluid: {
        originalName: "story-family.jpg",
        src: "/static/2aae29293cfe5d68c68f57d6305b7997/14b42/story-family.jpg",
        base64:
          "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAYABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAa1jLuJOzQnM66LP/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIAAxMEERIiI//aAAgBAQABBQIuCK2Bu1R9UPe3gFd9yqkzG0wT/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/ASv/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwFFV//EABwQAQACAQUAAAAAAAAAAAAAAAEAIREQEjFhgf/aAAgBAQAGPwIyuTqbiieQzAA0qXxLZ//EABoQAQADAQEBAAAAAAAAAAAAAAEAESFRMUH/2gAIAQEAAT8hDsB0Rd6JRVEvkHJLKGa3EC+fWUjBdkU6EbN6z//aAAwDAQACAAMAAAAQ/N+8/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxDY4gMsL//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQIBAT8QyepQ2r//xAAeEAEBAAICAgMAAAAAAAAAAAABEQAhMUFRsXGBof/aAAgBAQABPxDsIBUJx6yejPWESzrvB+l7cCtb71dzX7j4Qqnke4zLUsINFMHIryORoJVb+TxiMIfIGjP/2Q==",
        aspectRatio: 0.8298755186721992,
        srcSet:
          "/static/2aae29293cfe5d68c68f57d6305b7997/f836f/story-family.jpg 200w,\n/static/2aae29293cfe5d68c68f57d6305b7997/2244e/story-family.jpg 400w,\n/static/2aae29293cfe5d68c68f57d6305b7997/14b42/story-family.jpg 800w,\n/static/2aae29293cfe5d68c68f57d6305b7997/47498/story-family.jpg 1200w,\n/static/2aae29293cfe5d68c68f57d6305b7997/0e329/story-family.jpg 1600w,\n/static/2aae29293cfe5d68c68f57d6305b7997/40f82/story-family.jpg 3744w",
        sizes: "(max-width: 800px) 100vw, 800px",
      },
    },
  },
  {
    childImageSharp: {
      fluid: {
        originalName: "story-background.jpg",
        src:
          "/static/dd089b70dbf3fc72b2ad0f81a36f8c98/14b42/story-background.jpg",
        base64:
          "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAHfFhrKjCP/xAAZEAADAAMAAAAAAAAAAAAAAAAAAQIQITH/2gAIAQEAAQUCK0KsdEkf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFhABAQEAAAAAAAAAAAAAAAAAERAg/9oACAEBAAY/AjDP/8QAGhABAAMBAQEAAAAAAAAAAAAAAQAhQRExgf/aAAgBAQABPyFXxDUGJzflxPWU6YbOLZ//2gAMAwEAAgADAAAAEMA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/EBnL/8QAHhABAAICAQUAAAAAAAAAAAAAAQARIUGBMVFhcZH/2gAIAQEAAT8QcGTNNG/eplnnKdfrCUKF42csK3tVOPEKqQsgqFC+8//Z",
        aspectRatio: 1.5037593984962405,
        srcSet:
          "/static/dd089b70dbf3fc72b2ad0f81a36f8c98/f836f/story-background.jpg 200w,\n/static/dd089b70dbf3fc72b2ad0f81a36f8c98/2244e/story-background.jpg 400w,\n/static/dd089b70dbf3fc72b2ad0f81a36f8c98/14b42/story-background.jpg 800w,\n/static/dd089b70dbf3fc72b2ad0f81a36f8c98/47498/story-background.jpg 1200w,\n/static/dd089b70dbf3fc72b2ad0f81a36f8c98/0e329/story-background.jpg 1600w,\n/static/dd089b70dbf3fc72b2ad0f81a36f8c98/d8e16/story-background.jpg 5464w",
        sizes: "(max-width: 800px) 100vw, 800px",
      },
    },
  },
];

describe("<IndexStoryPictures />", () => {
  test("component renders correctly", () => {
    const { getByTestId } = render(<IndexStoryPictures images={mockImages} />);
    expect(getByTestId("indexStoryPictures")).toBeTruthy();
  });
});
