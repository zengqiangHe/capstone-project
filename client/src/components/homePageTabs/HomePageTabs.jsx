import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function HomePageTabs() {
  return (
    <Wrapper>
        
        <NavLink to="/"><Button>Anstehend</Button></NavLink>
        <NavLink to="/erstellte-events"><Button>Erstellte Events</Button></NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.ul`
display:flex;
gap:20px;
padding:10px;
`
const Button =styled.button`
font-size:1em;
color:#fff;
padding: 8px 20px;
border:0;
border-radius:4px;
background-color:black;
cursor: pointer;
text-decoration:none;
margin:20px auto;
`