import { render, screen } from "@testing-library/react";
import HomePage from "../app/page";
import { ThemeProvider } from "../components/ThemeContext";

describe("HomePage", () => {
  test("shows the heading text", () => {
    render(
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    );

    expect(
      screen.getByText(/welcome to my next\.js learning journey/i)
    ).toBeInTheDocument();
  });
});
