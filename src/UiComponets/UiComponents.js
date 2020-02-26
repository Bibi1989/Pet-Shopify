import React from "react";
import { Rating, Button, Pagination } from "semantic-ui-react";

export const RatingComponent = () => (
  <Rating
    style={{ marginTop: "20px" }}
    size='mini'
    icon='star'
    defaultRating={3}
    maxRating={5}
  />
);

export const RatingExampleStar = () => (
  <Rating icon='star' defaultRating={3} maxRating={5} />
);

export const Quantity = ({ count }) => (
  <Pagination
    boundaryRange={0}
    defaultActivePage={count}
    firstItem={null}
    lastItem={null}
    siblingRange={0}
    totalPages={10}
  />
);

export const ButtonComponent = () => (
  <Button content='Add To Cart' size='mini' icon='cart' labelPosition='left' />
);
