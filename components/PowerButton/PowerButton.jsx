import React from 'react';
import styled from 'styled-components';
import { CgHome } from 'react-icons/cg';
import Link from 'next/link';

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background: ${(props) => props.theme.body};
  padding: 0.3rem;
  border-radius: 50%;
  border: none;
  /* border: 1px solid ${(props) => props.theme.text}; */
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
  z-index: 4;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    box-shadow: 0 0 8px 6px #26262694;
  }
`;

export default function PowerButton() {
  return (
    <Link href="/">
      <a>
        <Power>
          <CgHome size="1.5rem" />
        </Power>
      </a>
    </Link>
  );
}
