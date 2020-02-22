import React, { useState } from "react";
import { Container, Grid, Form, TextArea, Label } from "semantic-ui-react";

const dogtype = [
  "German Shepherd",
  "Bulldog",
  "Mountain Dog",
  "Terrier",
  "Chihuahua",
  "Pitbull"
];
const cattype = [
  "American Bobtail Cat",
  "American Shorthair Cat",
  "Birman Cat",
  "Manx Cat"
];
// const dogtype = [
//   "German Shepherd",
//   "Bulldog",
//   "Mountain Dog",
//   "Terrier",
//   "Chihuahua",
//   "Pitbull"
// ];
// const dogtype = [
//   "German Shepherd",
//   "Bulldog",
//   "Mountain Dog",
//   "Terrier",
//   "Chihuahua",
//   "Pitbull"
// ];

const animals = ["Dogs", "Cats", "Birds", "Rabbits", "Monkeys"];

const AddPet = () => {
  const [pet, setPet] = useState("");
  const [type, setType] = useState("");

  function checkFullName(name) {
    let splittedName = name.split(" ");
    let validateName = splittedName[1];
    return validateName;
  }
  console.log(checkFullName("flow with"));

  const handlePets = ({ target: { value } }) => setPet(value);
  const handleTypes = ({ target: { value } }) => setType(value);
  console.log({ pet, type });
  return (
    <Container style={{ margin: "2rem 0" }}>
      <div>
        <h1>Add Your Pets</h1>
        <select onChange={handlePets} style={style}>
          <option unselectable='true'>Select A Pet</option>
          {animals.map(animal => (
            <option key={animal} value={animal.toLowerCase()}>
              {animal}
            </option>
          ))}
        </select>
      </div>
      <hr style={{ margin: "1rem 0" }} />

      <Grid columns='three' divided>
        <Grid.Row>
          <Grid.Column>
            <div>
              <h1>Add Your Dog Type</h1>
              <select onChange={handleTypes} style={style}>
                <option unselectable='true'>Select A Dog Type</option>
                {dogtype.map(dog => (
                  <option
                    key={dog}
                    value={dog
                      .toLowerCase()
                      .split(" ")
                      .join("")}
                  >
                    {dog}
                  </option>
                ))}
              </select>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div>
              <h1>Add Your Cat Type</h1>
              <select onChange={handleTypes} style={style}>
                <option unselectable='true'>Select A Cat Type</option>
                {cattype.map(cat => (
                  <option
                    key={cat}
                    value={cat
                      .toLowerCase()
                      .split(" ")
                      .join("")}
                  >
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div>
              <h1>Add Your Monkey Type</h1>
              <select onChange={handleTypes} style={style}>
                <option unselectable='true'>Select A Pet Type</option>
                {dogtype.map(dog => (
                  <option
                    key={dog}
                    value={dog
                      .toLowerCase()
                      .split(" ")
                      .join("")}
                  >
                    {dog}
                  </option>
                ))}
              </select>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Form style={{borderTop: '1px solid #999'}}>
        <Label content='Pet Description' as='h1' style={{padding: '10px', margin: '1% 0' , fontSize: '1.5rem'}} />
        <TextArea placeholder='Short Description of the pet and breed' />
      </Form>
    </Container>
  );
};

const style = {
  margin: "1rem 0",
  padding: "1rem 2rem",
  outline: "none",
  border: "1px solid teal",
  borderRadius: "5px",
  color: "teal",
  fontSize: "1.2rem"
};

export default AddPet;
