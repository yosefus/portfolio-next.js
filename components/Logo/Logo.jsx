import React from 'react';
import styled from 'styled-components';
import { CgYinyang } from 'react-icons/cg';

const LogoH = styled.h3`
  display: inline-block;
  color: ${(props) => props.theme.text};
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  font-size: 2rem;
`;

export default function Logo() {
  return (
    <LogoH>
      <CgYinyang />
    </LogoH>
  );
}
