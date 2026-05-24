import { render, screen } from "@testing-library/react";
import Greeting from "../components/Greeting";

describe("Greeting", () => {
  test("renders greeting text with provided name", () => {
    render(<Greeting name="Henry" />);
    expect(screen.getByText("Hello, Henry!")).toBeInTheDocument();
  });
});
