import { useTransactionForm } from "@/hooks/useTransactionForm";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Props = {
  userId: string;
};

export const FormTransaction = ({ userId }: Props) => {
  const { onSubmit, errors, register } = useTransactionForm(userId);
  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={onSubmit}>
        <Card className=" bg-zinc-500 w-[350px] h-[350px] border-2 p-4 flex flex-col justify-between">
          <CardHeader className="flex flex-col justify-between">
            <CardTitle className="mb-2">Transferência bancária</CardTitle>
            <CardDescription className="text-xs">
              Insira o usuário e valor da transação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 w-full">
              <div className="flex flex-col">
                <div className="">
                  <Label htmlFor="receiver" className="mb-1 text-sm">
                    Usuário
                  </Label>
                </div>
                <Input
                  id="receiver"
                  placeholder="O id do usuário que receberá a transação"
                  className="w-full border p-2 rounded bg-zinc-300"
                  {...register("receiver")}
                />
                {errors.receiver && (
                  <p className="text-sm text-red-500">
                    {errors.receiver.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <Label htmlFor="value" className="mb-1 text-sm">
                  Valor
                </Label>
                <Input
                  id="value"
                  type="number"
                  placeholder="Valor da transação"
                  className="w-full border p-2 rounded bg-zinc-300"
                  {...register("value")}
                />
                {errors.value && (
                  <p className="text-sm text-red-500">{errors.value.message}</p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              type="submit"
              className=" w-full  p-1 border bg-slate-500 rounded my-3"
            >
              Enviar transação
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};
