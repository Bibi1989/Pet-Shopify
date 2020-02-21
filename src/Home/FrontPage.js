import React from "react";
import { Button, Menu } from "semantic-ui-react";

import styled from "styled-components";
import dog1 from "../images/dog1.jpg";

const FrontPage = () => {
  return (
    <div>
      <Parent>
        <div className='child-one'>
          <Category />
          {/* <ul>
            <li>
              <h1>Pet Categories</h1>
            </li>
            <li>
              <i class='fas fa-dog'></i>
              <span>Dogs</span>
            </li>
            <li>
              <i class='fas fa-cat'></i>
              <span>Cats</span>
            </li>
            <li>
              <i class='fas fa-dove'></i>
              <span>Birds</span>
            </li>
            <li>
              <i class='fas fa-rabbit'></i>
              <span>Rabbits</span>
            </li>
            <li>
              <i class='fas fa-tortois'></i>
              <span>Monkeys</span>
            </li>
            <li>
              <i class='fas fa-tortois'></i>
              <span>Squirels</span>
            </li>
          </ul> */}
        </div>
        <div className='child-two'>
          <div className='overlay'></div>
          <h1>Shop For Your Favorite Pet</h1>
          <div className='shop'>
            <Button>
              <span>Shop Now</span>
            </Button>
          </div>
        </div>
      </Parent>
    </div>
  );
};

const Parent = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  padding: 1% 10%;
  height: 70vh;
  .child-one {
    ul {
      list-style: none;
      padding: 1% 5%;
      li {
        color: #eee;
        border-bottom: 1px solid #bbb;
        padding: 5% 0;
        font-size: 1.5em;
        cursor: pointer;
        .fas {
          color: teal;
          font-size: 2rem;
          padding: 0 1.5rem;
        }
      }
    }
  }
  .child-two {
    background: url(${dog1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: teal;
    position: relative;
    .overlay {
      background: #222;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      opacity: 0.4;
    }
  }
`;

const Category = () => {
  return (
    <div style={{width: "100%"}}>
      <Menu vertical style={{width: "90%"}}>
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

export default FrontPage;
