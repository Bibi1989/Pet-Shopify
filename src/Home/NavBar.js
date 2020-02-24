import React, { useState } from "react";
import {
  Input,
  Menu,
  Icon,
  Button,
  Dropdown,
  Transition
} from "semantic-ui-react";

export const NavBar = () => {
  const [state, setState] = useState({ activeItem: "home", name: "Language", visible: true });

  const handleItemClick = (_, { name }) => setState({ activeItem: name });
  const handleClick = names => setState({ name: names });

  const { activeItem } = state;

  return (
    <Menu pointing style={sticky} secondary>
      <Menu.Item
        name='pet-shopify'
        size='max'
        color='teal'
        as='h2'
        active={activeItem === "pet-shopify"}
        onClick={handleItemClick}
        style={{ color: "teal", fontSize: "1.3rem" }}
      />
      <Transition visible={state.visible} animation='scale' duration={500}>
        <Dropdown
          style={{ fontSize: "1.2em", color: "teal" }}
          item
          text={state.name}
        >
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleClick("English")}>
              English
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleClick("Pidgin")}>
              Pidgin
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleClick("Spanish")}>
              Spanish
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Transition>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search Pets...' />
        </Menu.Item>
        <Button>
          <Icon name='users' size='large' color='teal' />
          <span style={{ padding: "0 5px" }}>My Wishlist</span>
        </Button>
        <Button icon>
          <Icon name='cart' size='big' color='teal' />{" "}
          <sup style={{ fontSize: "1rem", color: "orangered" }}>0</sup>
        </Button>
        <Button style={{ margin: "0 10px" }} icon>
          <Icon name='user' size='large' color='teal' />
          <span style={{ padding: "0 5px" }}>Login</span>
        </Button>
        <Button icon>
          <Icon name='users' size='large' color='teal' />
          <span style={{ padding: "0 5px" }}>Register</span>
        </Button>
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
