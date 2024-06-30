import { Card, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import ReactIcon from "../ReactIcon";

const CardReact = () => {
  return (
    <Card className="w-full p-2 space-y-2">
      <CardHeader className="flex justify-center mt-4">
        <ReactIcon />
      </CardHeader>
      <CardTitle>React</CardTitle>
      <CardDescription >
        <p>Je suis spécialisé dans la librairie React</p>
      </CardDescription>
    </Card>
  );
};

export default CardReact;
