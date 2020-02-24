import React from "react";
import { Rating, Button } from "semantic-ui-react";

export const RatingComponent = () => (
  <Rating
    style={{ marginTop: "20px" }}
    size='mini'
    icon='star'
    defaultRating={3}
    maxRating={5}
  />
);

export const ButtonComponent = () => (
  <Button content='Add To Cart' size='mini' icon='cart' labelPosition='left' />
);
