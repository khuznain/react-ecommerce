import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: white;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  width: 32%;
  box-sizing: border-box;
  transform: scale(1);
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }

  .price {
    text-align: end;
  }

  button {
    padding: 0.5rem 2rem;
    background: transparent;
    border-radius: 1.5rem;
    border: 1px solid #4444;
    outline: none;
    cursor: pointer;
  }
`;

export default function Card() {
  return (
    <CardContainer>
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <button>Add to cart</button>

      <h3 className="price">$8888</h3>
    </CardContainer>
  );
}
