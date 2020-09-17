import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import components from "./styles";

const ProgressBar = ({ text }) => {
  const { Main, ProgressBar, Progress, ProgressText } = components;

  const { dailyTasks } = useSelector((state) => state.tasksState);

  const CalcActiveTasks = () => {
    const activeTasks = dailyTasks.filter(
      (dailyTasks) => !dailyTasks.isChecked === true
    ).length;
    return activeTasks
      ? `Masz jeszcze ${activeTasks} rzeczy do zrobienia`
      : "Wszystko zrobione!";
  };

  const [progress, setProgress] = useState();

  useEffect(() => {
    setProgress(
      dailyTasks.filter((dailyTasks) => dailyTasks.isChecked === true).length /
        dailyTasks.length
    );
  }, [dailyTasks]);

  return (
    <Main>
      {text && <ProgressText>{CalcActiveTasks()}</ProgressText>}
      <ProgressBar>
        <Progress progress={progress} />
      </ProgressBar>
    </Main>
  );
};

export default ProgressBar;
