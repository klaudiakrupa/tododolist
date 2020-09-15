import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import homePageState from "../HomePage/reducer";
import newTaskPageState from "../NewTaskPage/reducer";
import tasksState from "../../store/tasksReducer";

import HomePage from "../HomePage";
import PlanPage from "../PlanPage";
import NewTaskPage from "../NewTaskPage";

const combinedReducers = combineReducers({
  homePageState,
  newTaskPageState,
  tasksState,
});
const store = createStore(combinedReducers);

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
