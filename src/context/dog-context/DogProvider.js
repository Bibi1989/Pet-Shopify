import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "./reducer";
import { FETCH_PET, ADD_DOG, SINGLE_PET, ERRORS } from "./types";

const initialState = {
  animals: [],
  view_pet: [],
  cats: [],
  monkeys: [],
  rabbits: []
};

export const DogContext = createContext();

export const DogProvider = ({ children }) => {
  const url = `http://localhost:3001/animals`;
  const [state, dispatch] = useReducer(reducer, initialState);

  // all pets
  const fetchPets = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          "content-type": "application/json",
          "x-auth":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNTFhMWJhZjUzYmRiMzdhYzdkMTQ2OCIsInBob25lIjoiMTIzNDU2Nzg3ODkiLCJlbWFpbCI6ImJiQGdtYWlsLmNvbSIsIm5hbWUiOiJiYiIsImlhdCI6MTU4MjQwODEyMn0.Qkn5kiU9h22znDv1JvylGT07jM0WoiQ0TGvqH9x99Yk"
        }
      });
      dispatch({ type: FETCH_PET, payload: response.data.data });
    } catch (error) {}
  };

  const fetchSinglePet = async id => {
    try {
      const response = await axios.get(`http://localhost:3001/animals/${id}`, {
        headers: {
          "content-type": "application/json",
          "x-auth":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNTFhMWJhZjUzYmRiMzdhYzdkMTQ2OCIsInBob25lIjoiMTIzNDU2Nzg3ODkiLCJlbWFpbCI6ImJiQGdtYWlsLmNvbSIsIm5hbWUiOiJiYiIsImlhdCI6MTU4MjQwODEyMn0.Qkn5kiU9h22znDv1JvylGT07jM0WoiQ0TGvqH9x99Yk"
        }
      });
      dispatch({ type: SINGLE_PET, payload: response.data.data });
    } catch (error) {
      dispatch({ type: ERRORS, payload: error });
    }
  };

  useEffect(() => {
    fetchPets();
    // eslint-disable-next-line
  }, [url]);

  const addDog = body => {
    dispatch({
      type: ADD_DOG,
      payload: { id: state.pets.length + 1, ...body }
    });
  };

  console.log(state.view_pet);
  console.log(state.animals);

  return (
    <DogContext.Provider
      value={{
        pets: state.animals,
        get_single_pet: fetchSinglePet,
        view_pet: state.view_pet,
        fetch: fetchPets,
        add: addDog
      }}
    >
      {children}
    </DogContext.Provider>
  );
};
