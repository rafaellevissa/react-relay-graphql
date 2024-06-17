import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Login } from "./."; // Ajuste o caminho conforme necessário
import { useLogin } from "../../hooks/useLogin";
import { BrowserRouter as Router } from "react-router-dom";

// Mock do hook useLogin
jest.mock("../../hooks/useLogin");

describe("Login component", () => {
  const mockOnSubmit = jest.fn();
  const mockRegister = jest.fn();
  const mockErrors = { taxId: null, password: null };

  beforeEach(() => {
    (useLogin as jest.Mock).mockReturnValue({
      onSubmit: mockOnSubmit,
      register: mockRegister,
      errors: mockErrors,
    });
  });

  test("renders login form correctly", () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    expect(screen.getByLabelText("CPF / CNPJ")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    expect(
      screen.getByText(
        (content, element) =>
          content.startsWith("Faça seu cadastro") &&
          !!element?.querySelector('a[href="/cadastro"]')
      )
    ).toBeInTheDocument();
  });

  test("calls onSubmit when the form is submitted", () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    fireEvent.submit(screen.getByRole("button", { name: /login/i }));

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  test("displays errors when there are validation errors", () => {
    const mockErrorsWithMessages = {
      taxId: { message: "Tax ID is required" },
      password: { message: "Password is required" },
    };

    (useLogin as jest.Mock).mockReturnValue({
      onSubmit: mockOnSubmit,
      register: mockRegister,
      errors: mockErrorsWithMessages,
    });

    render(
      <Router>
        <Login />
      </Router>
    );

    expect(screen.getByText("Tax ID is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });

  test("registers input fields with useLogin", () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    expect(mockRegister).toHaveBeenCalledWith("taxId");
    expect(mockRegister).toHaveBeenCalledWith("password");
  });
});
