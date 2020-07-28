import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Summary from "./pages/Summary";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/:id" component={Summary} />
      </Switch>
    </div>
  );
}

export default App;
