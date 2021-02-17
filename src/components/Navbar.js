import React from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
const Nav = styled.div`
  background: white;
  padding: 1rem;
`;

const NavContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShoppingCart = styled(FiShoppingCart)`
  font-size: 3em;
  &:hover {
    cursor: pointer;
  }
`;

const LinkContainer = styled(Link)`
  text-decoration: none;
  color: #444;
`;

export default function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <LinkContainer to="/cart">
          <h1>Super store</h1>
        </LinkContainer>
        <ShoppingCart onClick={() => {}} />
      </NavContainer>
    </Nav>
  );
}
