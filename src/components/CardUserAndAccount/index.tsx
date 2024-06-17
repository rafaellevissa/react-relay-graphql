import { Card, CardTitle, CardContent } from "../ui/card";

type Profile = {
  name: string;

  numberAccount: string;

  balance: number;

  taxId: string;
};

export const CardUserAndAccount = ({
  name,
  balance,
  taxId,
  numberAccount,
}: Profile) => {
  return (
    <Card>
      <CardTitle>{`Usuário ${name}`}</CardTitle>
      <CardContent>
        <p>{`Conta: ${numberAccount}`}</p>
        <p>{`Saldo: ${balance}`}</p>
        <p>{`CPF/CNPJ: ${taxId}`}</p>
      </CardContent>
    </Card>
  );
};
