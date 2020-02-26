import React, { useState, useContext, useEffect } from "react";
import {
  Input,
  Menu,
  Icon,
  Button,
  Popup,
  Image,
  Dropdown,
  Transition
} from "semantic-ui-react";
import { DogContext } from "../context/dog-context/DogProvider";
import { useHistory, Link } from "react-router-dom";
import decode from "jwt-decode";

export const NavBar = () => {
  const { carts, getCart, onSearch } = useContext(DogContext);
  const token = localStorage.getItem("x-auth");
  const history = useHistory();
  useEffect(() => {
    getCart();
    // eslint-disable-next-line
  }, [history]);

  const user = token ? decode(localStorage.getItem("x-auth")) : "";
  const handleLogout = () => {
    localStorage.removeItem("x-auth");
    localStorage.removeItem("users");
    history.push("/login");
  };

  const handleSearch = e => {
    onSearch(e.target.value);
  };

  return (
    <Menu pointing style={sticky} secondary>
      <Link to='/'>
        <Menu.Item
          name='pet-shopify'
          size='max'
          color='teal'
          as='h1'
          style={{ color: "teal", fontSize: "1.3rem" }}
        />
      </Link>
      <Menu.Menu position='right'>
        <Menu.Item>
          {/* <Input
            icon='search'
            placeholder='Search Pets...'
            onChange={handleSearch}
          /> */}
          <Popup
            trigger={
              <Input
                icon='search'
                placeholder='Search...'
                onChange={handleSearch}
              />
            }
            header='Pets Search'
            content='You may search by pet breed'
            on='focus'
          />
        </Menu.Item>
        {token && (
          <Button>
            <Icon name='users' size='large' color='teal' />
            <span style={{ padding: "0 5px" }}>My Wishlist</span>
          </Button>
        )}
        <Link to={`/cart`}>
          <Button icon>
            <Icon name='cart' size='big' color='teal' />{" "}
            <sup style={{ fontSize: "1rem", color: "orangered" }}>
              {carts.length}
            </sup>
          </Button>
        </Link>
        {token ? (
          <>
            <Button onClick={handleLogout} style={{ margin: "0 10px" }} icon>
              <Icon name='user' size='large' color='teal' />
              <span style={{ padding: "0 5px" }}>Logout</span>
            </Button>
            <div style={{ marginTop: "10px" }}>
              <Popup
                trigger={
                  <Image
                    src='https://res.cloudinary.com/bibi198916/image/upload/c_scale,w_151/v1582566718/pet/dzclfvzd8pic46ltikqb.jpg'
                    avatar
                  />
                }
                on='click'
                hideOnScroll
                position='bottom center'
                content={user.phone}
                header={user.name}
              />
            </div>
          </>
        ) : (
          <>
            <Button style={{ margin: "0 10px" }} icon>
              <Icon name='user' size='large' color='teal' />
              <span style={{ padding: "0 5px" }}>Login</span>
            </Button>
            <Button icon>
              <Icon name='users' size='large' color='teal' />
              <span style={{ padding: "0 5px" }}>Register</span>
            </Button>
          </>
        )}
      </Menu.Menu>
    </Menu>
  );
};

const sticky = {
  padding: "0.5% 10%",
  background: "#f1f1f1",
  position: "-webkit-sticky",
  // eslint-disable-next-line
  position: "sticky",
  top: "0",
  zIndex: "10"
};

const account = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  fontSize: "1.5rem",
  border: "1px solid #999",
  textAlign: "center",
  paddingTop: "5px",
  marginTop: "1vh"
};
