import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;
`;

export default function Home() {
  return (
    <Cards>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Cards>
  );
}
