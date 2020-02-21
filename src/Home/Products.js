import React from "react";
import DogProducts from "./DogProducts";
import styled from "styled-components";
import CatProducts from "./CatProducts";

const Products = () => {
  return (
    <>
    <div style={line}>
      <h1 style={{ textAlign: "center", fontSize: "3.2rem", color: "#777" }}>
        Dogs Categories
      </h1>
      <Container>
        {[1, 2, 3, 4].map(count => {
          return <DogProducts key={count} />;
        })}
        {/* <CatProduct />
                <BirdProducts /> */}
      </Container>
      </div>

      <div style={line}>
        <h1 style={{ textAlign: "center", fontSize: "3.2rem", color: "#777" }}>
          Cats Categories
        </h1>
        <Container>
          {[1, 2, 3, 4].map(count => {
            return <CatProducts key={count} />;
          })}
          {/* <CatProduct />
                <BirdProducts /> */}
        </Container>
      </div>
    </>
  );
};

const line = {
  borderTop: "1px solid #999",
//   borderBottom: "1px solid #999",
  padding: "2% 0",
};

const Container = styled.div`
  padding: 2% 10%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4%;
`;

export default Products;
