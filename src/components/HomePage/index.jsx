import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER_NAME } from "./actionTypes";

import TasksList from "../../shared/TaskList/TasksList";

import components from "./styles";

const HomePage = () => {
  const {
    WelcomeText,
    Name,
    Main,
    MainWithoutUsername,
    MainWithUsername,
    Button,
  } = components;

  const history = useHistory();
  const dispatch = useDispatch();
  const { userName } = useSelector((state) => state.homePageState);
  const [usernameInputValue, setUsernameInputValue] = useState("");

  const onClickHandler = () =>
    dispatch({ type: SET_USER_NAME, payload: usernameInputValue });
  return (
    <Main>
      {!userName && (
        <MainWithoutUsername>
          <div>Jak się nazywasz?</div>
          <input onChange={(e) => setUsernameInputValue(e.target.value)} />
          <button onClick={onClickHandler}>to jest moje imię</button>
        </MainWithoutUsername>
      )}

      {userName && (
        <MainWithUsername>
          <WelcomeText>
            Dzień dobry, <Name>{userName}!</Name>
          </WelcomeText>
          <TasksList currentDate={new Date()} />
          <Button onClick={() => history.push("plan")}>
            zobacz plan na dziś
          </Button>
          <button onClick={() => history.push("dodaj-zadanie")}>
            dodaj nowe zadanie
          </button>
        </MainWithUsername>
      )}
    </Main>
  );
};

export default HomePage;
