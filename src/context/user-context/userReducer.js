//
import { REGISTER_USER, LOGIN_USER, USER_PROFILE } from "./user-types";

const reducer = (state, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        animals: action.payload
      };
    case LOGIN_USER:
      return {
        ...state,
        animals: action.payload
      };
    case USER_PROFILE:
      return {
        ...state,
        animals: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
