import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  it("Should load contact us heading", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  it("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  it("Should load input message inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("message");
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 inputs inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getAllByRole("textbox");
    expect(inputName.length).toBe(2);
  });
});
