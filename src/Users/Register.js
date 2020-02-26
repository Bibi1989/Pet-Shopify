import React, { useState, useContext } from "react";
import { Form, Button } from "semantic-ui-react";
import { UserContext } from "../context/user-context/UserProvider";
import { useHistory } from "react-router-dom";
const Register = () => {
  const { handleRegister } = useContext(UserContext);
  const history = useHistory();
  const [bool, setBool] = useState("");
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  });
  const handleInput = ({ target: { value, name } }) => {
    setValues({
      ...values,
      [name]: value
    });
  };
  const handleUser = e => {
    const value = e.target.value;
    setBool(value);
    history.push("/home");
  };

  const data = {
    name: values.name,
    phone: values.phone,
    email: values.email,
    password: values.password,
    isSeller: bool
  };

  const onSubmit = e => {
    e.preventDefault();
    handleRegister(data);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "5%" }}>Register</h1>
      <Form onSubmit={onSubmit} style={{ padding: "5% 10%" }}>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='First name'
            name='name'
            onChange={handleInput}
            placeholder='First name'
          />
          <Form.Input
            fluid
            label='Phone Number'
            name='phone'
            onChange={handleInput}
            placeholder='Last name'
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            type='email'
            fluid
            label='Email Address'
            name='email'
            onChange={handleInput}
            placeholder='First name'
          />
          <Form.Input
            fluid
            label='Password'
            name='password'
            onChange={handleInput}
            placeholder='Last name'
          />
        </Form.Group>
        <Form.Input
          fluid
          label='Confirm Password'
          name='confirmPassword'
          onChange={handleInput}
          placeholder='Last name'
        />
        <select style={{ margin: "2% 0" }} onChange={handleUser}>
          <option value='' selected='false'>
            Select User Type
          </option>
          <option value='buyer'>Buyer</option>
          <option value='seller'>Seller</option>
        </select>
        <Button type='submit'>Register</Button>
      </Form>
    </div>
  );
};

export default Register;
