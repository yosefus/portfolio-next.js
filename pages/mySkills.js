import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @media (max-height: 700px) {
    padding-top: 10vh;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background: transparent;
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-height: 700px) {
    margin: 5vh 0;
    width: 60vw;
  }
`;
export default function mySkills() {
  return (
    <Container>
      <Main></Main>
      <Main></Main>
    </Container>
  );
}
