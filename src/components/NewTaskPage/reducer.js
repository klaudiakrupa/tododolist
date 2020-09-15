import { ADD_NEW_TASK } from "./actionTypes";

const initialState = {
  labels: [
    { value: 1, label: "Dom" },
    { value: 2, label: "Rodzina i przyjaciele" },
    { value: 3, label: "Praca" },
    { value: 4, label: "Zdrowie" },
  ],
};

const newTaskPageState = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      const newValues = action.payload.labels
        .filter((x) => x.__isNew__)
        .map((x) => ({ value: x.value, label: x.label }));

      return { ...state, labels: [...state.labels, ...newValues] };

    default:
      return state;
  }
};
export default newTaskPageState;
