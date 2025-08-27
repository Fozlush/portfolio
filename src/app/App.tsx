import { Contacts } from "../components/pageBlocks";
import { Greetings } from "../components/pageBlocks/greetings/Greetings";
import { ThemeToggle } from "../components/themeToggle/ThemeToggle";
import "./styles/global.scss";

function App() {
  return (
    <>
      <Greetings />
      <Contacts />
      <ThemeToggle />
    </>
  );
}

export default App;
