import { TransactionCard } from "./components/TransactionCard";
import { Button } from "./components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

function App() {
  return (
    <div className="container h-screen pt-4 px-3">
      <div className="grid grid-cols-12 h-full text-center">
        <div className="col-span-3">menu</div>
        <div className="col-span-6">
          <div className="flex ">
            <Card className="w-[350px] border-2">
              <CardHeader>
                <CardTitle>Fazer Transação</CardTitle>
                <CardDescription>
                  Insira o usuário e valor da transação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Name of your project" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Framework</Label>
                      <Input id="name" placeholder="Name of your project" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="col-span-3 border-2 rounded-sm">
          <h3>Transações</h3>
          <div>
            <TransactionCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
