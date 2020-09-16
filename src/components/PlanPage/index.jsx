import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import "moment/locale/pl";

import TasksList from "../../shared/TasksList/TasksList";
import Button from "../../shared/Button";

import components from "./styles";

moment.locale("pl");

const addDays = (date, days) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const PlanPage = () => {
  const { DateBox, DayBox, Dates } = components;
  const history = useHistory();
  const [currentDate, setCurrentDate] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );
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
      <Dates>
        {days.map((x) => (
          <DateBox
            key={x}
            isActive={currentDate === x}
            onClick={() => setCurrentDate(x)}
          >
            {moment(new Date(x)).format("DD")}
            <DayBox>{moment(new Date(x)).format("dd")}</DayBox>
          </DateBox>
        ))}
      </Dates>
      <TasksList currentDate={currentDate} />
      <Button
        onClick={() => history.push("dodaj-zadanie")}
        text="dodaj nowe zadanie"
        color="dark"
      />
    </div>
  );
};

export default PlanPage;
