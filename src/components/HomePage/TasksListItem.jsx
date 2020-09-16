import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { DELETE_TASK } from "../../store/actionTypes";

const TasksListItem = (props) => {
  const { name, date, time, labels, taskId } = props.task;
  const dispatch = useDispatch();

  const onDeleteClicked = () =>
    dispatch({ type: DELETE_TASK, payload: taskId });

  return (
    <div>
      {`${name}, ${date}, ${time}, ${labels.map((x) => x.label).join()}`}
      <div onClick={onDeleteClicked}>DELETE</div>
    </div>
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
