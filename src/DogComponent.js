import React, { useContext, useState } from "react";
import { DogContext } from "./context/dog-context/DogProvider";

const DogComponent = () => {
  const { dogs, fetch, add } = useContext(DogContext);
  const [values, setValues] = useState({
    name: "",
    price: ""
  });
  console.log(dogs);
  const handleInput = ({ target }) => {
    const { value, name } = target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    add(values);
  };
  //   console.log(values)
  return (
    <div>
      <button onClick={() => fetch()}>Fetch Dogs</button>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={handleInput}
        />
        <input
          type='text'
          name='price'
          placeholder='Price'
          onChange={handleInput}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default DogComponent;
