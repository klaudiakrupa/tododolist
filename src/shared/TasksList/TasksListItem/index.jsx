import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { TOGGLE_TASK, DELETE_TASK } from "../../../store/actionTypes";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import components from "./styles";

const TasksListItem = (props) => {
  const { name, time, labels, taskId, isChecked } = props.task;
  const [checkboxHover, setCheckboxHover] = useState(false);
  const {
    TaskItem,
    TimeBox,
    TaskBox,
    CheckBox,
    CheckBoxContainer,
    Label,
    TaskName,
    DeleteIcon,
    TextBox,
  } = components;

  const dispatch = useDispatch();

  const onCheckToggle = () => dispatch({ type: TOGGLE_TASK, payload: taskId });

  const onDeleteClicked = () =>
    dispatch({ type: DELETE_TASK, payload: taskId });

  return (
    <TaskItem>
      <TimeBox>{time}</TimeBox>
      <TaskBox
        isChecked={isChecked}
        onMouseOver={() => setCheckboxHover(true)}
        onMouseOut={() => setCheckboxHover(false)}
        hover={checkboxHover}
        onClick={onCheckToggle}
      >
        <CheckBoxContainer hover={checkboxHover} isChecked={isChecked}>
          <CheckBox
            onClick={onCheckToggle}
            icon={faCheckCircle}
            isChecked={isChecked}
            hover={checkboxHover}
          />
        </CheckBoxContainer>
        <TextBox>
          <Label>{labels.map((x) => x.label).join()}</Label>
          <TaskName>{name}</TaskName>
        </TextBox>
      </TaskBox>
      <DeleteIcon
        icon={faTrash}
        onClick={onDeleteClicked}
        onMouseOver={() => setCheckboxHover(true)}
        onMouseOut={() => setCheckboxHover(false)}
      />
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
