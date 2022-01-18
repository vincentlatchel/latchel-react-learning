import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders cards", () => {
  render(<App />);
  const linkElement = screen.getByText(/age guesser/i);
  expect(linkElement).toBeInTheDocument();
});
