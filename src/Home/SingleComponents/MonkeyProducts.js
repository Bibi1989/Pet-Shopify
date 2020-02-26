import React, { useContext } from "react";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {
  RatingComponent
  // ButtonComponent
} from "../../UiComponets/UiComponents";
import { DogContext } from "../../context/dog-context/DogProvider";
import { Image, Cart, Price } from "../../StyleComponent";
import moment from "moment";

const MonkeyProduct = ({ pet }) => {
  const { addToCart, getCart } = useContext(DogContext);
  const { id } = JSON.parse(localStorage.getItem("users"));
  const handleCart = pet => {
    addToCart(pet, id);
    getCart(id);
  };
  return (
    <div>
      <DogCard pet={pet} handleCart={handleCart} />
    </div>
  );
};

export default MonkeyProduct;

const DogCard = ({ pet, handleCart }) => (
  <Card style={{ width: "300px" }}>
    <Image style={{ width: "100%", height: "200px", position: "relative" }}>
      <img src={pet.image_url} alt='cat2' width='100%' height='100%' />
      <div className='overlay'>
        <Link className='link' to={`/view/${pet._id}`}>
          <span>View Pet</span>
        </Link>
      </div>
    </Image>
    <Card.Content style={{ height: '150px', overflowY: 'auto'}}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card.Header style={{ color: "teal" }}>
          {pet.name.toUpperCase()}
        </Card.Header>
        <p>{moment(pet.createdAt).fromNow(true)}</p>
      </div>
      <Card.Meta>{pet.breed}</Card.Meta>
      <Card.Description>{pet.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Price>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <div className='sub-price'>
            <span>&#8358;</span> <span>{pet.price}</span>
            <div>
              <i>-</i>
              <span>&#8358;</span>{" "}
              <span
                style={{ textDecoration: "line-through", color: "orangered" }}
              >
                {parseInt(pet.price) + 1000}
              </span>
            </div>
          </div>
          <p>{pet.location}</p>
        </div>
      </Price>
      <Cart>
        <RatingComponent />
        <Button
          content='Add To Cart'
          size='mini'
          icon='cart'
          labelPosition='left'
          onClick={() => handleCart(pet)}
        />
      </Cart>
    </Card.Content>
  </Card>
);
