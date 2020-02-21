import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

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
    <Image
      src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
      wrapped
      ui={false}
    />
    <Card.Content>
      {/* <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta> */}
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div>
        <span>&#8358;</span> <span>3,000</span>
        <div style={{ color: "orangered" }}>
          <span>&#8358;</span>{" "}
          <span style={{ textDecoration: "line-through" }}>4,000</span>
        </div>
      </div>
    </Card.Content>
  </Card>
);
