import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import styled from "styled-components";
import dog2 from "../images/dog2.jpg";

const DogProducts = () => {
  return (
    <div>
      <DogCard />
    </div>
  );
};

export default DogProducts;

const DogCard = () => (
  <Card style={{ width: "100%" }}>
    <Image src={dog2} wrapped ui={false} />
    <Card.Content>
      {/* <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta> */}
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Cart>
        <div>
          <div>
            <span>&#8358;</span> <span>3,000</span>
          </div>
          <div style={{ color: "orangered" }}>
            <span>&#8358;</span>{" "}
            <span style={{ textDecoration: "line-through" }}>4,000</span>
          </div>
        </div>
        <Button
          content='Add To Cart'
          size='mini'
          icon='add'
          labelPosition='left'
        />
      </Cart>
    </Card.Content>
  </Card>
);

const Cart = styled.i`
  display: flex;
  justify-content: space-between;
  button {
    background: teal !important;
    color: #eee !important;
  }
`;
