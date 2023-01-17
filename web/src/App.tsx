import Habit from "./components/habit";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Habit completed={0} />
      <Habit completed={4} />
      <Habit completed={6} />
    </div>
  );
}

export default App;
