import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push("plan")}>zobacz plan na dziś</button>
      <button onClick={() => history.push("dodaj-zadanie")}>
        dodaj nowe zadanie
      </button>
    </div>
  );
};

export default HomePage;
