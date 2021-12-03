import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  position: fixed;
  z-index: 0;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.1)`};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  font-size: calc(5rem + 5vw);
  text-transform: capitalize;

  @media (max-width: 600px) {
    padding: 1rem;
    font-size: 4rem;
  }
`;

export default function BigTitle({ text, left, top, right }) {
  return (
    <Text left={left} right={right} top={top}>
      {text}
    </Text>
  );
}
