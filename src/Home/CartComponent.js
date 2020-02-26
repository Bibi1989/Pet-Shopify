import React, { useContext, useEffect } from "react";
import { Container, Item, Label, Button, Icon } from "semantic-ui-react";
import { DogContext } from "../context/dog-context/DogProvider";
// import { useParams } from "react-router-dom";

const CartComponent = () => {
  const { carts, getCart, deleteCart } = useContext(DogContext);
  useEffect(() => {
    getCart();
    // eslint-disable-next-line
  }, []);
  const handleRemove = id => {
    deleteCart(id);
  };

  return (
    <Container>
      <h1>Your Cart</h1>
      {carts !== undefined &&
        carts.map(a => (
          <Item.Group key={a._id} divided>
            <Item>
              <Item.Image src={a.image_url} width='200px' />

              <Item.Content>
                <Item.Header as='a'>{a.name}</Item.Header>
                <Item.Meta>
                  <span className='cinema'>{a.description}</span>
                </Item.Meta>
                <Item.Description>{a.location}</Item.Description>
                <Item.Extra>
                  <Label>
                    <span>Quantity</span>{" "}
                    <span style={{ color: "teal" }}>5</span>
                  </Label>
                  <Label>
                    <span>&#8358;</span> {a.price}
                  </Label>
                  <Label>
                    <span>&#8358;</span> 29999
                  </Label>
                  <Button primary floated='right'>
                    Check Out
                    <Icon name='right chevron' />
                  </Button>
                  <Button
                    onClick={() => handleRemove(a._id)}
                    color='red'
                    floated='right'
                  >
                    Remove Item
                    <Icon name='times' />
                  </Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        ))}
    </Container>
  );
};

export default CartComponent;
