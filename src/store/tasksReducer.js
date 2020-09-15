import { ADD_NEW_TASK } from "../components/NewTaskPage/actionTypes";

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

    default:
      return state;
  }
};
export default tasksState;
