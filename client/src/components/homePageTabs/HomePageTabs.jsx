import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function HomePageTabs() {
  return (
    <Wrapper>
      <StyledNavLink to="/">Anstehend</StyledNavLink>
      <StyledNavLink to="/erstellte-events">Erstellte Events</StyledNavLink>
    </Wrapper>
  );
}
const Wrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;
const StyledNavLink = styled(NavLink)`
  font-size: 1em;
  color: #333;
  padding: 8px 20px;
  border-radius: 18px;
  background-color: #eeeeee;
  cursor: pointer;
  text-decoration: none;
  margin-top: 100px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 1);
`;
