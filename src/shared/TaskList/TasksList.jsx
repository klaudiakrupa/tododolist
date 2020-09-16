import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TasksListItem from "../TaskList/TasksListItem";

const TasksList = ({ currentDate }) => {
  const { dailyTasks } = useSelector((state) => state.tasksState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SET_DAILY_TASKS", payload: currentDate });
  }, [currentDate]);

  return (
    <div>
      {dailyTasks.map((x) => (
        <TasksListItem key={x.taskId} task={x} />
      ))}
    </div>
  );
};

export default TasksList;
