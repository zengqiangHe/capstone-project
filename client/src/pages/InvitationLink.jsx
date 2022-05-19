import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

export default function InvitationLink() {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  function diplayLinkCopiedMessage() {
    setIsLinkCopied(true);
    setTimeout(() => setIsLinkCopied(false), 1500);
  }

  const location = useLocation();
  const url = `http://localhost:3000/voting/${location.state.id}`;
  return (
    <Wrapper>
      <InvitationText>
        <h2>Einladung teilen</h2>
        <p>
          Fast geschaft! Lade jetzt die Teilnahmer ein, damit deine Abstimmung durchführen kann.
        </p>
      </InvitationText>
      <LinkBox>{url}</LinkBox>
      <Button
        onClick={() => {
          navigator.clipboard.writeText(url);
          diplayLinkCopiedMessage();
        }}
      >
        Link koppieren
      </Button>
      {isLinkCopied ? <StyledMessage>Link kopiert!</StyledMessage> : ''}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 80vh;
`;
const InvitationText = styled.div`
  margin: 100px 25px 0;
  line-height: 30px;
  color: #f2f2f2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const LinkBox = styled.div`
  display: block;
  font-size: 0.6rem;
  text-align: center;
  padding: 30px;
  background-color: red;
  margin: 50px 25px 50px;
  width: auto;
  background: linear-gradient(45deg, #24c6dc, #514a9d);
  border-radius: 2rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
`;
const Button = styled.button`
  display: block;
  width: 170px;
  font-size: 1em;
  color: #efefef;
  padding: 20px 20px;
  border: 0;
  border-radius: 15px;
  background: linear-gradient(45deg, #348f50, #56b4d3);
  cursor: pointer;
  text-decoration: none;
  margin: 0 auto;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 1);
`;
const StyledMessage = styled.p`
  color: green;
  text-align: center;
  background: #cde7b3;
  padding: 1rem 1.5rem;
  margin: 0.5rem 1rem;
  border-radius: 10px;
  opacity: 0.7;
`;
