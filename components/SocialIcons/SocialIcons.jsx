import React from 'react';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { SiShutterstock } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Icons = styled(motion.div)`
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
    margin: 0.4rem 0;
  }

  svg {
    transition: all 0.2s ease-in-out;
  }

  a {
    &:hover {
      svg {
        transform: scale(1.5) !important;
      }
    }
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

const Line = styled(motion.span)`
  width: 2px;
  height: 6rem;
  background: ${(props) => (props.click ? props.theme.body : props.theme.text)};

  @media (max-width: 480px) {
    height: 5rem;
  }

  @media (max-height: 600px) {
    height: 4rem;
  }
`;

export default function SocialIcons({ click }) {
  return (
    <Icons
      initial={{ y: 300 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', duration: 1, delay: 0.8 }}
      click={click}
    >
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', delay: 1, duration: 1 }}
      >
        <Link href="https://github.com/yosefus?tab=repositories">
          <a target="_blank">
            <AiFillGithub />
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', delay: 1.2, duration: 1 }}
      >
        <Link href="https://www.shutterstock.com/g/yosefus_flavius">
          <a target="_blank">
            <SiShutterstock />
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', delay: 1.4, duration: 1 }}
      >
        <Link href="https://www.facebook.com/yosefus.flavius.1">
          <a target="_blank">
            <BsFacebook />
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', delay: 1.6, duration: 1 }}
      >
        <Link href="https://www.linkedin.com/in/yosef-yaha-612694215/">
          <a target="_blank">
            <FaLinkedinIn />
          </a>
        </Link>
      </motion.div>
      <Line click={click} />
    </Icons>
  );
}
