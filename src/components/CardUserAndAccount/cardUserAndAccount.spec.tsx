import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardUserAndAccount } from ".";

describe("CardUserAndAccount component", () => {
  const profile = {
    name: "João",
    numberAccount: "123456-7",
    balance: 1000.5,
    taxId: "123.456.789-00",
  };

  test("renders CardUserAndAccount with correct data", () => {
    render(
      <CardUserAndAccount
        name={profile.name}
        balance={profile.balance}
        numberAccount={profile.numberAccount}
        taxId={profile.taxId}
      />
    );

    expect(screen.getByText(`Usuário ${profile.name}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Conta: ${profile.numberAccount}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Saldo: ${profile.balance}`)).toBeInTheDocument();
    expect(screen.getByText(`CPF/CNPJ: ${profile.taxId}`)).toBeInTheDocument();
  });
});
