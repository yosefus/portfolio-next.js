import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import img from '../assets/Images/lost.jpg';
import { motion } from 'framer-motion';

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left left;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const float = keyframes`
0%{
  transform: translateY(-10px)
}
25%{
  transform: translateY(15px) translateX(15px)
}
50%{
  transform: translateY(-10px)
}
75%{
  transform: translateY(15px) translateX(15px)
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
  animation: ${float} infinite ease 4s;
  h2 {
    font-size: 10rem;
    text-shadow: 3px 4px 13px #000;
  }

  h3 {
    font-size: 3rem;
    font-weight: 400;
  }
`;

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <Main>
      <Content>
        <h2> 404</h2>
        <h3> Damn!!!!</h3>
        <span>u just got lost!</span>
      </Content>
    </Main>
  );
}
