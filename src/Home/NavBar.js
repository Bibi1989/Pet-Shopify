import React, { useState } from "react";
import { Input, Menu, Icon, Button } from "semantic-ui-react";

export const NavBar = () => {
  const [state, setState] = useState({ activeItem: "home" });

  const handleItemClick = (e, { name }) => setState({ activeItem: name });

  const { activeItem } = state;

  return (
    <Menu style={{ padding: "0.5% 10%", background: "#f1f1f1" }} secondary>
      <Menu.Item
        name='pet-shopify'
        size="max"
        color='teal'
        as='h3'
        active={activeItem === "pet-shopify"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='messages'
        active={activeItem === "messages"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='friends'
        active={activeItem === "friends"}
        onClick={handleItemClick}
      />
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search Pets...' />
        </Menu.Item>
        <Button icon>
          <Icon name='users' size='max' color='teal' />
          <span style={{ padding: "0 5px" }}>My Wishlist</span>
        </Button>
        <Button color='white' icon>
          <Icon name='cart' size='big' color='teal' />
        </Button>
        <Button style={{ margin: "0 10px" }} icon>
          <Icon name='user' size='max' color='teal' />
          <span style={{ padding: "0 5px" }}>Login</span>
        </Button>
        <Button icon>
          <Icon name='users' size='max' color='teal' />
          <span style={{ padding: "0 5px" }}>Register</span>
        </Button>
      </Menu.Menu>
    </Menu>
  );
};
