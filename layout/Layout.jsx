import React from 'react';
import { ControlIcons, Logo, PowerButton, SoundBar } from '../components';
import { useRouter } from 'next/router'
import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi'

const Back = styled("div")`
  position: fixed;
  cursor: pointer;
  top: 1rem;
  left: 2rem;
  font-size: 2rem;
  z-index: 40;
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

  svg {
    transition: all ease-in-out 0.2s;
  }

  &:hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

export default function Layout({ children, ThemeState }) {
  const router = useRouter()

  return (
    <div>
      <PowerButton />
      {router.pathname !== '/' &&
        <Back onClick={() => router.back()}>
          <BiArrowBack />
        </Back>}
      {/* <SoundBar /> */}
      {/* <Logo /> */}
      <ControlIcons ThemeState={ThemeState} />
      {children}
    </div>
  );
}
