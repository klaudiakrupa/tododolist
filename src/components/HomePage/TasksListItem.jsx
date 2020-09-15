import React from "react";
import PropTypes from "prop-types";

const TasksListItem = (props) => {
  const { name, date, time, labels } = props.task;
  return (
    <div>{`${name}, ${date}, ${time}, ${labels
      .map((x) => x.label)
      .join()}`}</div>
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
