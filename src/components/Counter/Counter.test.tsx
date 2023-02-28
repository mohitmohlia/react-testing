import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("renders Counter", () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("0");
  });

  test("render a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);
    const countHeading = screen.getByRole("heading");
    expect(countHeading).toHaveTextContent("1");
  });

  test("render a count of 2 after clicking the increment button twice", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    // await user.click(incrementButton);
    // await user.click(incrementButton);
    await user.dblClick(incrementButton);
    const countHeading = screen.getByRole("heading");
    expect(countHeading).toHaveTextContent("2");
  });
  test("renders a count of 10 after clicking set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const setButton = screen.getByRole("button", { name: /set/i });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("element are focused in right order", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: /set/i });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
