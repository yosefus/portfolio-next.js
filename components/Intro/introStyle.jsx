import styled from 'styled-components';
import me from '../../assets/Images/profile.png';
import me2 from '../../assets/Images/profile2.png';
import { motion } from 'framer-motion';

const Box = styled(motion.div)`
  direction: ltr;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(to right, ${(props) => props.theme.body} 50%, ${(props) => props.theme.text} 50%) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  @media (max-width: 480px) {
    width: 70vw;
  }
  @media (max-width: 320px) {
    width: 65vw;
  }
`;

const TextBox = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  direction: ${(props) => (props.lang == 'he' ? 'rtl' : 'ltr')};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h6 {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-weight: 300;
  }

  .linkPort {
    font-size: 1rem;
    width: fit-content;
    padding-top: 0.3rem;
    display: flex;

    span {
      display: flex;
      align-items: center;
      opacity: 0;
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      span {
        padding-left: 0.4rem;
        padding-right: 0.4rem;
        opacity: 1;
      }
    }
  }

  h1 {
    margin: 0;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    justify-content: flex-start;
    gap: 0.2rem;

    h3,
    h6,
    h1 {
      margin-bottom: 5px;
      z-index: 3;
      text-shadow: ${(props) => `3px 3px 8px ${props.theme.text}`};
    }

    .linkPort {
      margin: auto;
      span {
        opacity: 0.8;
      }
    }
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    content: ${`url( ${me.src})`};
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    .pic {
      content: ${`url( ${me2.src})`};
      left: 120%;

      /* bottom: -20px; */
      width: 100vw;
      z-index: 1;
    }
  }
`;

export { Box, TextBox, SubBox };
