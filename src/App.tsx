import Presentation from "@/components/Presentation";
import Projects from "@/components/Projects";
import CardReact from "./components/technologies/cards/CardReact";
import CardTailwind from "./components/technologies/cards/CardTailwind";
import CardTypescript from "./components/technologies/cards/CardTypescript";
import Contact from "./components/Contact";


function App() {
  return (
    <main className="flex flex-col items-center py-4 text-xl text-white sm:py-0 ">
      <div className="px-4 mx-auto my-5 space-y-16 ">
        <Presentation />
        <Projects />
        <div className="grid w-11/12 grid-cols-1 gap-3 sm:grid-cols-2 justify-items-center ">
          <CardReact />
          <CardTailwind />
          <CardTypescript />
        </div>
        <Contact/>
      </div>
    </main>
  );
}

export default App;
