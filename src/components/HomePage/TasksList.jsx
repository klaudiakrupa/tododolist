import React from "react";
import { useSelector } from "react-redux";

import TasksListItem from "./TasksListItem";

const TasksList = () => {
  const { tasks } = useSelector((state) => state.tasksState);

  return (
    <div>
      {tasks.map((x, idx) => (
        <TasksListItem task={x} />
      ))}
    </div>
  );
};

export default TasksList;
