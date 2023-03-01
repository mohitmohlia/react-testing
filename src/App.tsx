import "./App.css";
import { Application } from "./components/Application/Application";
import Counter from "./components/Counter/Counter";
import { MuiMode } from "./components/mui/mui-mode";
import Skills from "./components/Skills/Skills";
import Users from "./components/users/users";
import { AppProviders } from "./providers/app-providers";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={["nextjs", "js", "css"]} /> */}
        {/* <Counter /> */}
        {/* <MuiMode /> */}
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
