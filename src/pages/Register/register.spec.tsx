import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Register } from "./.";
import { useRegisterUser } from "../../hooks/useRegisterUser";

// Mock do hook useRegisterUser
jest.mock("../../hooks/useRegisterUser");

describe("Register component", () => {
  const mockOnSubmit = jest.fn();
  const mockRegister = jest.fn();
  const mockErrors = { name: null, taxId: null, password: null };

  beforeEach(() => {
    (useRegisterUser as jest.Mock).mockReturnValue({
      onSubmit: mockOnSubmit,
      register: mockRegister,
      errors: mockErrors,
    });
  });

  test("renders registration form correctly", () => {
    render(<Register />);

    expect(screen.getByLabelText("Nome")).toBeInTheDocument();
    expect(screen.getByLabelText("CPF / CNPJ")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cadastrar/i })
    ).toBeInTheDocument();
  });

  test("calls onSubmit when the form is submitted", () => {
    render(<Register />);

    fireEvent.submit(screen.getByRole("button", { name: /cadastrar/i }));

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  test("displays errors when there are validation errors", () => {
    const mockErrorsWithMessages = {
      name: { message: "Name is required" },
      taxId: { message: "Tax ID is required" },
      password: { message: "Password is required" },
    };

    (useRegisterUser as jest.Mock).mockReturnValue({
      onSubmit: mockOnSubmit,
      register: mockRegister,
      errors: mockErrorsWithMessages,
    });

    render(<Register />);

    expect(screen.getByText("Name is required")).toBeInTheDocument();
    expect(screen.getByText("Tax ID is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });

  test("registers input fields with useRegisterUser", () => {
    render(<Register />);

    expect(mockRegister).toHaveBeenCalledWith("name");
    expect(mockRegister).toHaveBeenCalledWith("taxId");
    expect(mockRegister).toHaveBeenCalledWith("password");
  });
});
