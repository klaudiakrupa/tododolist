import { SET_USER_NAME } from "./actionTypes";

const initialState = {
  userName: "",
};

const homePageState = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, userName: action.payload };

    default:
      return state;
  }
};
export default homePageState;
