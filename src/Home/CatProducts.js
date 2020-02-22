import React from "react";
import { Card, Button } from "semantic-ui-react";
import styled from "styled-components";
import cat2 from "../images/cat2.jpg";

const CatProducts = () => {
  return (
    <div>
      <CatCard />
    </div>
  );
};

export default CatProducts;

const CatCard = () => (
  <Card style={{ width: "100%" }}>
    {/* <Image src={cat2} wrapped ui={false} /> */}
    <div style={{ width: "100%", height: "200px" }}>
      <img src={cat2} alt="cat2" width='100%' height='100%' />
    </div>
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
          icon='cart'
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
