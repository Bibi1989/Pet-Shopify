import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Menu, Button, Rating, Pagination } from "semantic-ui-react";
import { DogContext } from "../context/dog-context/DogProvider";
import { useParams } from "react-router-dom";

const SinglePet = () => {
  const { view_pet, get_single_pet } = useContext(DogContext);
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    get_single_pet(id);
  }, [id, get_single_pet]);
  return (
    <SingleParent>
      <div className='first'>
        <div className='first-sub-child'>
          <img
            src={view_pet.image_url}
            alt={view_pet.image_url}
            width='70%'
            height='50%'
          />
        </div>
        <div className='second-sub-child'>
          <h2>{view_pet.name}</h2>
          <h3>{view_pet.breed}</h3>
          <p className='brand'>{view_pet.description}</p>
          <RatingExampleStar />
          <div className='price'>
            <div>
              <span>&#8358;</span> <span>{view_pet.price}</span>
            </div>
            <div style={{ color: "orangered" }}>
              <span>&#8358;</span>{" "}
              <span style={{ textDecoration: "line-through" }}>
                {parseInt(view_pet.price) + 1000}
              </span>
            </div>
            <Button
              content='Add To Cart'
              size='mini'
              icon='cart'
              labelPosition='left'
            />
          </div>

          <div>
            <h2>Quantity</h2>
            <Quantity handleIncrement={handleIncrement} count={count} />
          </div>
        </div>
      </div>
      <div className='second'>
        <Category />
      </div>
    </SingleParent>
  );
};

const SingleParent = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-gap: 2%;
  padding: 1% 10%;
  height: 70vh;
  .first {
    display: grid;
    grid-template-columns: 50% 50%;
    .first-sub-child {
      /* background: yellow; */
      padding: 5%;
    }
    .second-sub-child {
      padding: 5%;
      .price {
        padding: 10px 0;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        div {
          padding: 2% 0;
        }
      }
    }
  }
  .second {
    /* background: gray; */
  }
`;

const Category = () => {
  return (
    <div style={{ width: "100%" }}>
      <Menu vertical style={{ width: "90%" }}>
        <Menu.Item href='//google.com' target='_blank'>
          <h1>Categories</h1>
        </Menu.Item>
        <Menu.Item link>Dogs</Menu.Item>
        <Menu.Item link>Cats</Menu.Item>
        <Menu.Item link>Birds</Menu.Item>
        <Menu.Item link>Rabbits</Menu.Item>
        <Menu.Item link>Monkeys</Menu.Item>
      </Menu>

      {/* {message && <Message content={message} />} */}
    </div>
  );
};

const RatingExampleStar = () => (
  <Rating icon='star' defaultRating={3} maxRating={5} />
);

const Quantity = ({ handleIncrement, count }) => (
  <Pagination
    boundaryRange={0}
    defaultActivePage={count}
    firstItem={null}
    lastItem={null}
    siblingRange={0}
    totalPages={10}
  />
);

export default SinglePet;
