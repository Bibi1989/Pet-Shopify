//
import { FETCH_PET, ADD_DOG, SINGLE_PET } from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_PET:
      return {
        ...state,
        animals: action.payload
      };
    case SINGLE_PET:
      console.log(action.payload)
      return {
        ...state,
        view_pet: action.payload
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
