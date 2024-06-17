import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useTransactionForm } from "../../hooks/useTransactionForm";
import { FormTransaction } from ".";

// Mock do hook useTransactionForm
jest.mock("../../hooks/useTransactionForm");

describe("FormTransaction component", () => {
  const mockOnSubmit = jest.fn();
  const mockRegister = jest.fn();
  const mockErrors = { receiver: null, value: null };

  beforeEach(() => {
    (useTransactionForm as jest.Mock).mockReturnValue({
      onSubmit: mockOnSubmit,
      register: mockRegister,
      errors: mockErrors,
    });
  });

  test("renders form fields and button correctly", () => {
    render(<FormTransaction userId="123" />);

    expect(screen.getByLabelText("Usuário")).toBeInTheDocument();
    expect(screen.getByLabelText("Valor")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /enviar transação/i })
    ).toBeInTheDocument();
  });

  test("calls onSubmit when the form is submitted", () => {
    render(<FormTransaction userId="123" />);

    fireEvent.submit(screen.getByRole("button", { name: /enviar transação/i }));

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  test("displays errors when there are validation errors", () => {
    const mockErrorsWithMessages = {
      receiver: { message: "Receiver is required" },
      value: { message: "Value must be a positive number" },
    };

    (useTransactionForm as jest.Mock).mockReturnValue({
      onSubmit: mockOnSubmit,
      register: mockRegister,
      errors: mockErrorsWithMessages,
    });

    render(<FormTransaction userId="123" />);

    expect(screen.getByText("Receiver is required")).toBeInTheDocument();
    expect(
      screen.getByText("Value must be a positive number")
    ).toBeInTheDocument();
  });
});
