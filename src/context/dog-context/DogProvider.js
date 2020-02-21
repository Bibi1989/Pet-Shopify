import React, { createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { FETCH_DOG, ADD_DOG } from "./types";

const dogs = [
  { id: 1, name: "bingo", price: "#2000" },
  { id: 2, name: "bulldog", price: "#3000" },
  { id: 3, name: "german shephard", price: "#4000" },
  { id: 4, name: "Elephant", price: "#5000" },
  { id: 5, name: "Sheep", price: "#6000" }
];

const initialState = {
  animals: []
};

export const DogContext = createContext();

export const DogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchDog = () => {
    dispatch({ type: FETCH_DOG, payload: dogs });
  };

  useEffect(() => {
    fetchDog();
  }, []);

  const addDog = body => {
    dispatch({
      type: ADD_DOG,
      payload: { id: state.animals.length + 1, ...body }
    });
  };

  return (
    <DogContext.Provider
      value={{
        dogs: state.animals,
        fetch: fetchDog,
        add: addDog
      }}
    >
      {children}
    </DogContext.Provider>
  );
};
