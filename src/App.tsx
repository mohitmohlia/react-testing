import "./App.css";
import { Application } from "./components/Application/Application";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      {/* <Application /> */}
      <Skills skills={["nextjs", "js", "css"]} />
    </div>
  );
}

export default App;
