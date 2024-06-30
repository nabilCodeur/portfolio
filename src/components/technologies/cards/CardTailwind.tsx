import { Card, CardDescription, CardHeader, CardTitle } from "../../ui/card";

const CardTailwind = () => {
  return (
    <Card className="w-full p-2 space-y-2">
      <CardHeader>
        <div className="w-11/12 h-16 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      </CardHeader>
      <CardTitle>TailwindCSS.</CardTitle>
      <CardDescription className="mb-3">
        <p>Tailwind est mon outil CSS préféré pour mes projets.</p>
      </CardDescription>
    </Card>
  );
};

export default CardTailwind;
