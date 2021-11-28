import React from 'react';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { SiShutterstock } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import styled from 'styled-components';

const Icons = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  bottom: 0;
  left: 2rem;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;

    & > *:not(:last-child) {
      margin: 0.3rem 0;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background: ${(props) => props.theme.text};

  @media (max-width: 480px) {
    height: 6rem;
  }

  @media (max-height: 600px) {
    height: 4rem;
  }
`;

export default function SocialIcons() {
  return (
    <Icons>
      <div>
        <Link href="/">
          <a target="_blank">
            <AiFillGithub />
          </a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a target="_blank">
            <SiShutterstock />
          </a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a target="_blank">
            <BsFacebook />
          </a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a target="_blank">
            <FaLinkedinIn />
          </a>
        </Link>
      </div>
      <Line />
    </Icons>
  );
}
