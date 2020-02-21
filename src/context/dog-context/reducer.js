//
import { FETCH_DOG, ADD_DOG } from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_DOG:
        return {
            ...state,
            animals: action.payload
        };
        case ADD_DOG:
      return {
        ...state,
        animals: [action.payload, ...state.animals]
      };
    default:
      return state;
  }
};

export default reducer;
