import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Icons = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  top: 0;
  right: 2rem;
  background: transparent;
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;

  p {
    margin: 0.3rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;

    p {
      margin: 0.3rem 0;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

export const Line = styled.span`
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
