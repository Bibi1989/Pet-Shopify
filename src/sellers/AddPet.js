import React, { useState } from "react";
import {
  Container,
  Grid,
  Form,
  TextArea,
  Label,
  Input,
  Button
} from "semantic-ui-react";
import axios from "axios";
import { cities } from "../state-cities";

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
const birdtype = [
  "Falcon Bird",
  "Indian Peacock",
  "Parrot",
  "Dove",
  "Ostrich Bird",
  "Other Bird"
];
const monkeytype = ["Africa Monkey", "Indian Monkey", "Baboon", "Chimpazee"];
const rabbittype = ["Squirel", "Rabbit"];

const animals = ["Dogs", "Cats", "Birds", "Rabbits", "Monkeys"];

const AddPet = () => {
  const [name, setPet] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState({});

  // function checkFullName(name) {
  //   let splittedName = name.split(" ");
  //   let validateName = splittedName[1];
  //   return validateName;
  // }

  const handlePets = ({ target: { value } }) => setPet(value);
  const handleTypes = ({ target: { value } }) => setBreed(value);
  const handleDescription = ({ target: { value } }) => setDescription(value);
  const handlePrice = ({ target: { value } }) => setPrice(value);
  const handleAge = ({ target: { value } }) => setAge(value);
  const handleFile = e => setFile(e.target.files[0]);
  const handleLocation = e => setLocation(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("breed", breed);
    data.append("description", description);
    data.append("price", price);
    data.append("age", age);
    data.append("location", location);
    data.append("image", file);
    axios
      .post(`http://localhost:3001/animals`, data, {
        headers: {
          "content-type": "multipart/form-data",
          "x-auth":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNTFhMWJhZjUzYmRiMzdhYzdkMTQ2OCIsInBob25lIjoiMTIzNDU2Nzg3ODkiLCJlbWFpbCI6ImJiQGdtYWlsLmNvbSIsIm5hbWUiOiJiYiIsImlhdCI6MTU4MjQwODEyMn0.Qkn5kiU9h22znDv1JvylGT07jM0WoiQ0TGvqH9x99Yk"
        }
      })
      .then(response => console.log(response));
  };

  return (
    <Container style={{ margin: "2rem 0" }}>
      <h1 style={{ fontSize: "3rem" }}>Sell Your Pet</h1>
      <hr style={{ marginBottom: "2rem" }} />
      <Form onSubmit={handleSubmit}>
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
                <h2>Add Your Dog Type</h2>
                <select onChange={handleTypes} style={style}>
                  <option unselectable='true'>Select A Dog Type</option>
                  {dogtype.map(dog => (
                    <option key={dog} value={dog}>
                      {dog}
                    </option>
                  ))}
                </select>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div>
                <h2>Add Your Cat Type</h2>
                <select onChange={handleTypes} style={style}>
                  <option unselectable='true'>Select A Cat Type</option>
                  {cattype.map(cat => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div>
                <h2>Add Your Birds Type</h2>
                <select onChange={handleTypes} style={style}>
                  <option unselectable='true'>Select A Pet Type</option>
                  {birdtype.map(bird => (
                    <option key={bird} value={bird}>
                      {bird}
                    </option>
                  ))}
                </select>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div>
                <h2>Add Your Rabbit | Squirel Type</h2>
                <select onChange={handleTypes} style={style}>
                  <option unselectable='true'>Select A Pet Type</option>
                  {rabbittype.map(rabbit => (
                    <option key={rabbit} value={rabbit}>
                      {rabbit}
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
                  {monkeytype.map(monkey => (
                    <option key={monkey} value={monkey}>
                      {monkey}
                    </option>
                  ))}
                </select>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <hr style={{ margin: "1rem 0" }} />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <div>
                <h1>Add Your Location</h1>
                <select onChange={handleLocation} style={style}>
                  <option unselectable='true'>Select Your Location</option>
                  {cities.map(city => (
                    <option key={city.state} value={city.state}>
                      {city.state}
                    </option>
                  ))}
                </select>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <hr style={{ margin: "1rem 0" }} />

        <Label
          content='Price'
          style={{ padding: "10px", margin: "1% 0", fontSize: "1.3rem" }}
        />
        <br />
        <Input
          name='price'
          onChange={handlePrice}
          icon='money'
          iconPosition='left'
          placeholder='Search users...'
        />

        <hr style={{ margin: "1rem 0" }} />
        <Label
          content='Pet Description'
          as='h1'
          style={{ padding: "10px", margin: "1% 0", fontSize: "1.2rem" }}
        />
        <TextArea
          name='description'
          onChange={handleDescription}
          placeholder='Short Description of the pet and breed'
        />

        <hr style={{ margin: "1rem 0" }} />
        <Label
          content='Age Of Pet'
          style={{ padding: "10px", margin: "1% 0", fontSize: "1.3rem" }}
        />
        <br />
        <Input
          name='age'
          onChange={handleAge}
          type='number'
          icon='amilia'
          iconPosition='left'
          placeholder='Search users...'
        />
        <hr style={{ margin: "1rem 0" }} />
        <Input
          type='file'
          name='image'
          onChange={handleFile}
          loading
          icon='user'
          placeholder='Search...'
        />

        <Button type='submit'>Submit</Button>
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
