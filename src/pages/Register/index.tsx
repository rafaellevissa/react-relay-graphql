import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegisterUser } from "../../hooks/useRegisterUser";

export const Register = () => {
  const { errors, onSubmit, register } = useRegisterUser();
  return (
    <Layout>
      <form onSubmit={onSubmit}>
        <Card className="bg-zinc-500 w-[350px] h-[400px] border-2 p-5 flex flex-col justify-between">
          <CardHeader className="flex flex-col justify-between">
            <CardTitle className="mb-2 text-center">Cadastro</CardTitle>
            <CardDescription className="text-xs text-center">
              Insira os dados para criar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 w-full">
              <div className="flex flex-col">
                <div className="">
                  <Label htmlFor="name" className="mb-1 text-sm">
                    Nome
                  </Label>
                </div>
                <Input
                  id="name"
                  placeholder="Insira seu nome completo"
                  className="w-full border p-2 bg-zinc-300 rounded"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <div className="">
                  <Label htmlFor="taxId" className="mb-1 text-sm">
                    CPF / CNPJ
                  </Label>
                </div>
                <Input
                  id="taxId"
                  placeholder="Insira seu cpf ou cnpj"
                  className="w-full border p-2 bg-zinc-300 rounded"
                  {...register("taxId")}
                />
                {errors.taxId && (
                  <p className="text-sm text-red-500">{errors.taxId.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <Label htmlFor="password" className="mb-1 text-sm">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Insira sua senha"
                  className="w-full border p-2 bg-zinc-300 rounded"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              type="submit"
              className="w-full p-1 border bg-slate-500 rounded "
            >
              Cadastrar
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Layout>
  );
};
