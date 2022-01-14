import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Box = styled(motion.li)`
  position: relative;
  width: 22rem;
  min-height: 22rem;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border-radius: 0 50px 0 50px; */
  border-radius: 10px;
  margin-right: 3rem;
  /* overflow: hidden; */

  h2 {
    text-transform: uppercase;
    font-weight: 800;
  }

  h3 {
    text-transform: capitalize;
  }

  .tec-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    span {
      margin: 3px;
      padding: 3px 6px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${(props) => props.theme.body};
      font-size: 1.4rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 0.7rem;
    width: 70vw;
    min-height: 75vw;
  }

  @media (max-width: 400px) {
    padding: 1rem;

    .tec-box {
      padding-left: 10px;
      span {
        font-size: 1.2rem;
      }
    }

    @media (max-width: 300px) {
      width: 90vw;
    }
  }
`;

export const Overlay = styled(motion.div)`
  direction: ltr;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 2rem;
  font-size: 2rem;
  border: 3px solid ${(props) => props.theme.text};
  /* border-radius: 0 50px 0 50px; */
  border-radius: 10px;

  .layout-img {
    border-radius: 10px;
    /* border-radius: 0 50px 0 50px; */
    z-index: 12;
  }

  span {
    position: absolute;
    bottom: 0;
    z-index: 16;
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    z-index: 1000;
  }

  a {
    z-index: 1000;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.text};
    box-shadow: 3px 3px 15px ${(props) => props.theme.text};
    transition: all 0.2s ease-in-out;

    transform: translateY(50%);
  }

  a:hover {
    transform: scale(1.3) translateY(40%);
  }

  @media (max-width: 600px) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 70vw;
    min-height: 75vw;
  }
`;
