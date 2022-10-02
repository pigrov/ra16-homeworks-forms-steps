import "./App.css";
import Steps from "./components/Steps";
import data from "./data/data.json";

function App() {
  const steps = JSON.parse(JSON.stringify(data));
  return <Steps steps={steps} />;
}

export default App;
