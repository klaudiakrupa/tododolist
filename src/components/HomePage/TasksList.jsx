import React from "react";
import { useSelector } from "react-redux";

import TasksListItem from "./TasksListItem";

const TasksList = () => {
  const { tasks } = useSelector((state) => state.tasksState);

  return (
    <div>
      {tasks.map((x) => (
        <TasksListItem key={x.taskId} task={x} />
      ))}
    </div>
  );
};

export default TasksList;
