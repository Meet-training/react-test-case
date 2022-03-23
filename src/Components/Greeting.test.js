import { render, fireEvent } from "@testing-library/react";
import Greeting from "./Greeting";

describe("<Greeting />", () => {
  test("should check if value is displayed when button is clicked", () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());
    const { getByTestId, queryByTestId } = render(
      <Greeting />
    );

    const nameInput = getByTestId("nameInput");
    const emailInput = getByTestId("emailInput");
    const phoneInput = getByTestId("phoneInput");
    const dateInput = getByTestId("dateInput");
    const cityInput = getByTestId("cityInput");
    const submit = queryByTestId("submit");

    expect(nameInput).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(phoneInput).toBeDefined();
    expect(dateInput).toBeDefined();
    expect(cityInput).toBeDefined();

    fireEvent.change(nameInput, { target: { value: "test" } });
    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    fireEvent.change(phoneInput, { target: { value: "9825678456" } });
    fireEvent.change(dateInput, { target: { value: "2022-03-18" } });
    fireEvent.change(cityInput, { target: { value: "Ahmedabad" } });

    fireEvent.click(submit);

    expect(nameInput).toHaveValue("test");
    expect(emailInput).toHaveValue("test@gmail.com");
    expect(phoneInput).toHaveValue("9825678456");
    expect(dateInput).not.toBeNull();
    expect(cityInput).toHaveValue("Ahmedabad");
    expect(handleSubmit).toHaveBeenCalled();
  });
});
