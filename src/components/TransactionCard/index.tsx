import { Card, CardContent } from "../ui/card";

export const TransactionCard: React.FunctionComponent = () => {
  return (
    <Card className="border-2 rounded bg-zinc-500">
      <CardContent className="text-xs p-2">
        <p>Sender: Thiago Felipe</p>
        <p>Receiver: Felipe Thiago</p>
        <p>value: R$ 12</p>
      </CardContent>
    </Card>
  );
};
