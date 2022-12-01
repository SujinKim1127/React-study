import "./App.css";
import getRepository from "./agoraStates";

function App() {
  getRepository().then(console.log);

  return <div className="App"></div>;
}
export default App;
