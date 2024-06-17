import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TransactionCard } from ".";

describe("TransactionCard component", () => {
  const user = "João";
  const value = 100.5;

  test("renders user and value correctly", () => {
    render(<TransactionCard user={user} value={value} />);

    expect(screen.getByText(`Nome: ${user}`)).toBeInTheDocument();
    expect(screen.getByText(`Value: R$ ${value}`)).toBeInTheDocument();
  });
});
