import { ADD_NEW_TASK, DELETE_TASK, TOGGLE_TASK } from "./actionTypes";

const initialState = {
  maxTaskId: 0,
  tasks: [],
};

const tasksState = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      const maxTaskId = ++state.maxTaskId;
      return {
        ...state,
        maxTaskId: maxTaskId,
        tasks: [...state.tasks, { ...action.payload, taskId: maxTaskId }],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((x) => x.taskId !== action.payload),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((x) => {
          return x.taskId === action.payload
            ? { ...x, isChecked: !x.isChecked }
            : x;
        }),
      };
    default:
      return state;
  }
};
export default tasksState;
