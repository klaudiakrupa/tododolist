import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TasksListItem from "./TasksListItem";

const TasksList = ({ currentDate }) => {
  const { dailyTasks } = useSelector((state) => state.tasksState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SET_DAILY_TASKS", payload: currentDate });
  }, [dispatch, currentDate]);

  return (
    <div>
      {dailyTasks.map((x) => (
        <TasksListItem key={x.taskId} task={x} />
      ))}
    </div>
  );
};

export default TasksList;
