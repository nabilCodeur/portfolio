import Presentation from "./components/Presentation";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="flex flex-col items-center w-full h-screen px-3 py-4 text-xl text-white bg-blue-800">
      <div className="space-y-16 ">
      <Presentation />
      <Projects />
      </div>
    </main>
  );
}

export default App;
