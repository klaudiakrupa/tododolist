import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER_NAME } from "./actionTypes";
import moment from "moment";

import TasksList from "../../shared/TasksList/TasksList";
import Button from "../../shared/Button";
import ProgressBar from "../../shared/ProgressBar";

import components from "./styles";

const HomePage = () => {
  const {
    PageName,
    NameInput,
    WelcomeText,
    Name,
    Main,
    MainWithoutUsername,
    MainWithUsername,
    DayHeader,
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
          <PageName>Jak się nazywasz?</PageName>
          <NameInput onChange={(e) => setUsernameInputValue(e.target.value)} />
          <Button onClick={onClickHandler} text="To moje imię" color="dark" />
        </MainWithoutUsername>
      )}

      {userName && (
        <MainWithUsername>
          <WelcomeText>
            Dzień dobry, <Name>{userName}!</Name>
          </WelcomeText>
          <ProgressBar text />
          <div>
            <DayHeader>Dziś</DayHeader>
            <div>{moment(new Date()).format("DD MMMM")}</div>
          </div>
          <TasksList currentDate={moment(new Date()).format("YYYY-MM-DD")} />
          <Button
            onClick={() => history.push("plan")}
            text="zobacz plan na dziś"
            color="light"
          />
          <Button
            onClick={() => history.push("dodaj-zadanie")}
            text="dodaj nowe zadanie"
            color="dark"
          />
        </MainWithUsername>
      )}
    </Main>
  );
};

export default HomePage;
