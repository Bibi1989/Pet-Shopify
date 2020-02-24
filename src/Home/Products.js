import React, { useContext } from "react";
import DogProducts from "./SingleComponents/DogProducts";
import styled from "styled-components";
import CatProducts from "./SingleComponents/CatProducts";
import { DogContext } from "../context/dog-context/DogProvider";
import MonkeyProduct from "./SingleComponents/MonkeyProducts";
import BirdProduct from "./SingleComponents/BirdProducts";

const Products = () => {
  const { pets } = useContext(DogContext);
  return (
    <>
      <div style={line}>
        <h1 style={{ textAlign: "center", fontSize: "3.2rem", color: "#777" }}>
          Dogs Categories
        </h1>
        <Container>
          {pets.map(pet => {
            return (
              pet.name === "dogs" && <DogProducts key={pet._id} pet={pet} />
            );
          })}
        </Container>
      </div>

      <div style={line}>
        <h1 style={{ textAlign: "center", fontSize: "3.2rem", color: "#777" }}>
          Cats Categories
        </h1>
        <Container>
          {pets.map(pet => {
            return (
              pet.name === "cats" && <CatProducts key={pet._id} pet={pet} />
            );
          })}
        </Container>
      </div>

      <div style={line}>
        <h1 style={{ textAlign: "center", fontSize: "3.2rem", color: "#777" }}>
          Monkeys Categories
        </h1>
        <Container>
          {pets.map(pet => {
            return (
              pet.name === "monkeys" && (
                <MonkeyProduct key={pet._id} pet={pet} />
              )
            );
          })}
        </Container>
      </div>

      <div style={line}>
        <h1 style={{ textAlign: "center", fontSize: "3.2rem", color: "#777" }}>
          Birds Categories
        </h1>
        <Container>
          {pets.map(pet => {
            return (
              pet.name === "birds" && <BirdProduct key={pet._id} pet={pet} />
            );
          })}
        </Container>
      </div>
    </>
  );
};

const line = {
  borderTop: "1px solid #999",
  padding: "2% 0"
};

const Container = styled.div`
  margin: 2% 10%;
  padding: 1% 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 4%;
  overflow-x: auto;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Products;
