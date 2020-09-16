import {
  ADD_NEW_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  SET_DAILY_TASKS,
} from "./actionTypes";

const initialState = {
  maxTaskId: 0,
  tasks: [],
  dailyTasks: [],
};

const tasksState = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      const maxTaskId = ++state.maxTaskId;
      const newTasks = [
        ...state.tasks,
        { ...action.payload, taskId: maxTaskId },
      ];
      console.log(newTasks);
      return {
        ...state,
        maxTaskId: maxTaskId,
        tasks: newTasks.sort((x) => x.time),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((x) => x.taskId !== action.payload),
        dailyTasks: state.dailyTasks.filter((x) => x.taskId !== action.payload),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((x) => {
          return x.taskId === action.payload
            ? { ...x, isChecked: !x.isChecked }
            : x;
        }),
        dailyTasks: state.dailyTasks.map((x) => {
          return x.taskId === action.payload
            ? { ...x, isChecked: !x.isChecked }
            : x;
        }),
      };
    case SET_DAILY_TASKS:
      return {
        ...state,
        dailyTasks: state.tasks.filter((x) => x.date === action.payload),
      };
    default:
      return state;
  }
};
export default tasksState;
