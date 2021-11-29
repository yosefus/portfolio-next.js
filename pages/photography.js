import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.body};
`;
export default function photography() {
  return <Container>photography</Container>;
}
