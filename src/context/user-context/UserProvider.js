import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "./userReducer";
import { REGISTER_USER, LOGIN_USER, USER_PROFILE } from "./user-types";
import { ERRORS } from "../dog-context/types";
import decode from "jwt-decode";

const initialState = {
  registerUser: [],
  loginUser: [],
  profile: []
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const register_url = `http://localhost:3001/users/register`;
  const login_url = `http://localhost:3001/users/login`;
  const user_url = `http://localhost:3001/users/profile`;
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleRegister = async body => {
    try {
      const response = await axios.post(register_url, body);
      localStorage.setItem("x-auth", response.data.token);
      localStorage.setItem("users", JSON.stringify(response.data.data));
      dispatch({ type: REGISTER_USER, payload: response.data.data });
    } catch (error) {
      dispatch({ type: ERRORS, payload: error.message });
    }
  };

  const handleLogin = async body => {
    try {
      const response = await axios.post(login_url, body);
      localStorage.setItem("x-auth", response.data.token);
      localStorage.setItem("users", JSON.stringify(response.data.data));
      dispatch({ type: LOGIN_USER, payload: response.data.data });
    } catch (error) {
      dispatch({ type: ERRORS, payload: error.message });
    }
  };

  // const getUsers = async () => {
  //   const token = localStorage.getItem("x-auth");
  //   const user = decode(token)
  //   console.log(user)
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:3001/users/profile/${user.id}`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json"
  //         }
  //       }
  //     );
  //     console.log(response.data.profile);
  //     dispatch({ type: USER_PROFILE, payload: response.data.profile });
  //   } catch (error) {
  //     dispatch({ type: ERRORS, payload: error.message });
  //   }
  // };

  // useEffect(() => {
  //   getUsers();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <UserContext.Provider
      value={{
        handleRegister,
        handleLogin,
        users: state.registerUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
