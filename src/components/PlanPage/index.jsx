import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import "moment/locale/pl";

import TasksList from "../HomePage/TasksList";

moment.locale("pl");

const addDays = (date, days) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const PlanPage = () => {
  const history = useHistory();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);

  useEffect(() => {
    const tempDays = [];
    for (let i = -2; i <= 2; i++) {
      let day = addDays(currentDate, i);
      tempDays.push(moment(day).format("YYYY-MM-DD"));
    }
    setDays(tempDays);
  }, [currentDate]);

  return (
    <div>
      <button onClick={() => history.push("/")}>cofnij</button>
      {moment(currentDate).format("MMMM")}
      {days.map((x) => (
        <div key={x} onClick={() => setCurrentDate(x)}>
          {moment(new Date(x)).format("DD dd")}
        </div>
      ))}
      <TasksList currentDate={currentDate} />
      <button onClick={() => history.push("dodaj-zadanie")}>
        dodaj nowe zadanie
      </button>
    </div>
  );
};

export default PlanPage;
