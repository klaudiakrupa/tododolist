import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { SET_USER_NAME } from "./actionTypes";

const HomePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userName } = useSelector((state) => state.homePageState);
  const [usernameInputValue, setUsernameInputValue] = useState("");

  const onClickHandler = () =>
    dispatch({ type: SET_USER_NAME, payload: usernameInputValue });

  return (
    <div>
      {!userName && (
        <div>
          <div>Jak się nazywasz?</div>
          <input onChange={(e) => setUsernameInputValue(e.target.value)} />
          <button onClick={onClickHandler}>to jest moje imię</button>
        </div>
      )}

      {userName && (
        <div>
          <div>Dzień dobry, {userName}!</div>
          <button onClick={() => history.push("plan")}>
            zobacz plan na dziś
          </button>
          <button onClick={() => history.push("dodaj-zadanie")}>
            dodaj nowe zadanie
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
