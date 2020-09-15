import React from "react";
import { useHistory } from "react-router-dom";

const NewTaskPage = () => {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push("plan")}>cofnij</button>
    </div>
  );
};

export default NewTaskPage;
