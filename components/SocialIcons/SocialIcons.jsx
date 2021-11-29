import React from 'react';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { SiShutterstock } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Icons = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  bottom: 0;
  left: 2rem;
  background: transparent;
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
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
  background: ${(props) => (props.click ? props.theme.body : props.theme.text)};

  @media (max-width: 480px) {
    height: 6rem;
  }

  @media (max-height: 600px) {
    height: 4rem;
  }
`;

export default function SocialIcons({ click }) {
  return (
    <Icons click={click}>
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <Link href="/">
          <a target="_blank">
            <AiFillGithub />
          </a>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <Link href="/">
          <a target="_blank">
            <SiShutterstock />
          </a>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <Link href="/">
          <a target="_blank">
            <BsFacebook />
          </a>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <Link href="/">
          <a target="_blank">
            <FaLinkedinIn />
          </a>
        </Link>
      </motion.div>
      <Line click={click} />
    </Icons>
  );
}
