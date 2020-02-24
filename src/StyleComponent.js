import styled from "styled-components";

export const Image = styled.div`
  position: relative;
  .overlay {
    display: none;
    .link {
      text-decoration: none;
      color: #eee;
      width: 100%;
      span {
        border: 1px solid #eee;
        padding: 1% 2%;
        cursor: pointer;
      }
    }
  }
  &:hover .overlay {
    display: inline-block;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 5%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #3333339f;
    color: white;
  }
`;


export const Cart = styled.i`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  button {
    background: teal !important;
    color: #eee !important;
  }
`;

export const Price = styled.div`
  display: flex;
  i {
    padding: 0 5px;
  }
  .sub-price {
    display: flex;
  }
`;
