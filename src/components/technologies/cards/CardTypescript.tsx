import logo from "@/assets/Typescript_logo_2020.svg";
import { Card, CardDescription, CardHeader, CardTitle } from "../../ui/card";

const CardTypescript = () => {
  return (
    <Card className="w-full p-2 my-3 space-y-2">
      <CardHeader>
        <img src={logo} alt="Typescript" className="size-16" />
      </CardHeader>
      <CardTitle>Typescript</CardTitle>
      <CardDescription className="mb-3">
        Typescript est chaque fois utilisé dans mes projets
      </CardDescription>
    </Card>
  );
};

export default CardTypescript;
