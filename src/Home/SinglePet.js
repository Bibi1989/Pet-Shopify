import React, { useState } from "react";
import styled from "styled-components";
import { Menu, Button, Rating, Pagination } from "semantic-ui-react";
import cat1 from "../images/cat1.jpg";

const SinglePet = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <SingleParent>
      <div className='first'>
        <div className='first-sub-child'>
          <img src={cat1} alt={cat1} width='70%' height='100%' />
        </div>
        <div className='second-sub-child'>
          <h2>
            American Bobtail Cat, It is most notable for its stubby "bobbed"
            tail about one-third to one-half the length of a normal cat's tail
          </h2>
          <p className='brand'>
            Brand: Samsung | Similar products from Samsung
          </p>
          <RatingExampleStar />
          <div className='price'>
            <div>
              <span>&#8358;</span> <span>3,000</span>
            </div>
            <div style={{ color: "orangered" }}>
              <span>&#8358;</span>{" "}
              <span style={{ textDecoration: "line-through" }}>4,000</span>
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
    grid-template-columns: 40% 60%;
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
