import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { TOGGLE_TASK, DELETE_TASK } from "../../../store/actionTypes";

import components from "./styles";

const TasksListItem = (props) => {
  const {
    TaskItem,
    TimeBox,
    TaskBox,
    CheckBox,
    Label,
    TaskName,
    DeleteIcon,
  } = components;

  const { name, time, labels, taskId, isChecked } = props.task;
  const dispatch = useDispatch();

  const onCheckToggle = () => dispatch({ type: TOGGLE_TASK, payload: taskId });

  const onDeleteClicked = () =>
    dispatch({ type: DELETE_TASK, payload: taskId });

  return (
    <TaskItem>
      <TimeBox>{time}</TimeBox>
      <TaskBox>
        <CheckBox onClick={onCheckToggle} isChecked={isChecked} />
        <Label>{labels.map((x) => x.label).join()}</Label>
        <TaskName>{name}</TaskName>
        <DeleteIcon onClick={onDeleteClicked}>DELETE</DeleteIcon>
      </TaskBox>
    </TaskItem>
  );
};

TasksListItem.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  labels: PropTypes.array,
};

TasksListItem.defaultProps = {
  labels: [],
};
export default TasksListItem;
