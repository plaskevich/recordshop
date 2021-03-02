import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";

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
