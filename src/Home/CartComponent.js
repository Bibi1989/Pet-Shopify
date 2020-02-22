import React from "react";
import { Table, Container } from "semantic-ui-react";

const CartComponent = () => {
  return (
    <Container>
      {[1,2,3].map((a) => (<Table key={a} style={{borderTop: "none", borderBottom: "none", borderLeft: "1px solid #ccc"}}>
        <Table.Header style={{border: "none"}}>
          <Table.Row  style={{border: "none"}}>
            <Table.HeaderCell>Item</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Unit Price</Table.HeaderCell>
            <Table.HeaderCell>Total Unit Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row style={{margin: "2rem 0"}}>
            <Table.Cell>Dogs</Table.Cell>
            <Table.Cell>200</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>5,000</Table.Cell>
            <Table.Cell>10,000</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>))}
    </Container>
  );
};

export default CartComponent;
