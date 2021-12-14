import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Icons = styled(motion.div)`
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

export const Line = styled(motion.span)`
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
