import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Menu } from ".";
import { useAuthContext } from "../../hooks/useAuthContext";

// Mock do hook useAuthContext
jest.mock("../../hooks/useAuthContext");

describe("Menu component", () => {
  const mockLogout = jest.fn();

  beforeEach(() => {
    (useAuthContext as jest.Mock).mockReturnValue({
      logout: mockLogout,
    });
  });

  test("renders menu items correctly", () => {
    render(
      <Router>
        <Menu />
      </Router>
    );

    expect(screen.getByText("Transação")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  test("calls logout function on click", () => {
    render(
      <Router>
        <Menu />
      </Router>
    );

    fireEvent.click(screen.getByText("Logout"));
    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
});
