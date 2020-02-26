import React, { useContext, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { UserContext } from "../context/user-context/UserProvider";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { handleLogin } = useContext(UserContext);
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const handleInput = ({ target: { value, name } }) => {
    setValues({
      ...values,
      [name]: value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    handleLogin(values);
    history.push("/");
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "5%" }}>Login</h1>
      <Form onSubmit={onSubmit} style={{ padding: "5% 30%" }}>
        <Form.Field>
          <label>Email Address</label>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={handleInput}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleInput}
          />
        </Form.Field>
        <Button type='submit' style={{ display: "block", margin: "auto" }}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
