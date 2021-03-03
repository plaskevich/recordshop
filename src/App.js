import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Landing />
      </Router>
    </>
  );
}

export default App;
