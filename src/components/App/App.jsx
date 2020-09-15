import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../HomePage";
import PlanPage from "../PlanPage";
import NewTaskPage from "../NewTaskPage";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/plan">
            <PlanPage />
          </Route>
          <Route path="/dodaj-zadanie">
            <NewTaskPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
