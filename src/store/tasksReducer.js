import { ADD_NEW_TASK } from "../components/NewTaskPage/actionTypes";

const initialState = {
  tasks: [],
};

const tasksState = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    default:
      return state;
  }
};
export default tasksState;
