import React from "react";
import { useHistory } from "react-router-dom";

const PlanPage = () => {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push("/")}>cofnij</button>
      <button onClick={() => history.push("dodaj-zadanie")}>
        dodaj nowe zadanie
      </button>
    </div>
  );
};

export default PlanPage;
