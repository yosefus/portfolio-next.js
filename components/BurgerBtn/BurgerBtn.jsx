import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHamburger } from 'react-icons/fa';

const Burger = styled(motion.div)`
  position: absolute;
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

export default function BurgerBtn({ click, onClickBurger }) {
  return (
    <Burger
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', duration: 1.5, delay: 1 }}
      click={click}
    >
      <FaHamburger onClick={onClickBurger} />
    </Burger>
  );
}
