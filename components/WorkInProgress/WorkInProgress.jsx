import React from 'react';
import styled, { keyframes } from 'styled-components';
import img from '../../assets/Images/work.png';
import { motion } from 'framer-motion';

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const float = keyframes`
0%{
  transform: translateY(-10px) 
}
25%{
  transform: translateY(15px) 
}
50%{
  transform: translateY(-10px) 
}
75%{
  transform: translateY(15px) 
}
100%{
  transform: translateY(-10px) 
}
`;

const Content = styled(motion.div)`
  direction: ltr;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  text-align: center;
  animation: ${float} ease infinite 5s;
  text-transform: capitalize;

  h2 {
    font-size: 6rem;
    text-shadow: 3px 4px 13px #000;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

export default function WorkInProgress() {
  return (
    <Main>
      <Content>
        <h2> work in progress</h2>
      </Content>
    </Main>
  );
}
