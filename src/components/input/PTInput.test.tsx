import { render, screen } from "@testing-library/react";
import { PTInput } from "./PTInput";
import userEvent from "@testing-library/user-event";

test("Updates input value correct", async () => {
  render(<PTInput inputHandler={() => {}} />);
  const input: HTMLInputElement = await screen.findByRole("textbox");

  expect(input.value).toBe("");

  const userInput = "hello world";
  await userEvent.type(input, userInput);

  expect(input.value).toBe(userInput);
});
