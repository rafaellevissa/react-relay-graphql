import { Card, CardContent } from "../ui/card";

type TransactionCardProps = {
  user: string;
  value: number;
};

export const TransactionCard: React.FunctionComponent<TransactionCardProps> = ({
  user,
  value,
}) => {
  return (
    <Card className="border-2 rounded bg-zinc-500">
      <CardContent className="text-xs p-2">
        <p>Nome: {user}</p>
        <p>Value: R$ {value}</p>
      </CardContent>
    </Card>
  );
};
