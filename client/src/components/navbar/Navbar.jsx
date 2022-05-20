import React from 'react';
import styled from 'styled-components';
import home_icon from '../../assets/home_icon.png';
import add_icon from '../../assets/add_icon.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Wrapper role="list">
      <StyledNavLink to="/">
        <NavIcons src={home_icon} alt="home icon" />
      </StyledNavLink>
      <StyledNavLink to="create">
        <NavIcons src={add_icon} alt="add new event icon" />
      </StyledNavLink>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  gap: 1.8rem;
  background-color: #191919;
  position: fixed;
  bottom: 0;
  padding: 20px;
  width: 100%;
  border-radius: 20px;
`;
const StyledNavLink = styled(NavLink)`
  cursor: default;
  &.active {
    opacity: 35%;
    cursor: default;
`;
const NavIcons = styled.img`
  width: 40px;
`;

export default Navbar;
