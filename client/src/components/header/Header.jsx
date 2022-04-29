import React from "react";
import styled from "styled-components";

const Header = () => {
    return <StyledHeader>BockWurst</StyledHeader>;
  };
  
  const StyledHeader = styled.h1`
    display: flex;
    justify-content: center;
    list-style-type: none;
    gap: 1.8rem;
    background-color: #333;
    position: sticky;
    top: 0;
    padding: 20px;
    width: 100%;
    color: white;
  `;

  export default Header;