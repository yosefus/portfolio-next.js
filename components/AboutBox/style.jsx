import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.div`
  color: ${(props) => props.theme.text};
  background: transparent;
  padding: 2rem;
  width: 35vw;
  min-height: 68vh;
  z-index: 3;
  line-height: 1.3;
  font-family: ${(props) => (props.lang == 'he' ? 'M PLUS 1p' : 'Ubuntu Mono')}, monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  & > * {
    transition: all 0.6s ease-in-out;
  }

  &:hover {
    /* color: #fff; */
    backdrop-filter: none;
    justify-content: space-around;
    text-align: center;
  }

  strong {
    margin-bottom: 0.6rem;
    text-transform: uppercase;
  }

  ul li {
    margin-left: ${(props) => (props.lang == 'he' ? 0 : '1rem')};
    margin-right: ${(props) => (props.lang == 'en' ? 0 : '1rem')};
    text-transform: capitalize;
  }

  @media (max-width: 1280px) {
    min-height: 75vh;
  }

  @media (max-width: 1050px) {
    width: 70vw;
    min-height: 55vh;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.3rem;
  }
  @media (max-width: 320px) {
    width: 65vw;
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: calc(1rem + 1vw);

  svg {
    margin: 0 1rem;
  }

  ${Main}:hover & {
    /* text-shadow: -3px 6px 7px #000; */
    flex-direction: column;

    svg {
      /* text-shadow: 4px 3px 2px #000; */
    }

    & > * {
      /* color: #fff; */
      /* fill: #fff; */
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    svg {
      font-size: 2rem;
      margin: 0.5rem;
    }
  }
`;

export const Descrition = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.4rem + 1vw);
  padding: 0.5rem 0;
  background: transparent;

  ${Main}:hover & {
    /* color: #fff; */
    display: none;
  }

  @media (max-width: 480px) {
    font-size: calc(0.6rem + 1vw);
  }
`;

export const Icons = styled(motion.div)`
  display: none;

  ${Main}:hover & {
    align-self: flex-end;
    justify-self: flex-end;
    display: flex;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    & > * {
      transition: all 0.2s ease-in-out;
    }

    span {
      margin: 0.4rem;
      font-size: 2rem;
      border-radius: 50%;
      background: ${(props) => props.theme.text};
      color: ${(props) => props.theme.body};
      border: 1px solid #ffffff68;
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
