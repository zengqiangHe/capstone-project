import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function HomePageTabs() {
  return (
    <Wrapper>
        
        <Link to="/">Anstehend</Link>
        <Link to="/erstellte-events">Erstellte Events</Link>
    </Wrapper>
  )
}
const Wrapper = styled.ul`
`