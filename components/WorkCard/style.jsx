import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Box = styled(motion.li)`
  position: relative;
  width: 22rem;
  min-height: 22rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow:  ${(props) => props.theme.name == "light" ? ` 0px 10px 15px -3px ${props.theme.text}` : "none"};
  border:  ${(props) => props.theme.name == "dark" ? ` 3px solid ${props.theme.mainC}` : "none"};
  border-radius:  ${(props) => props.theme.name == "dark" ? `15px` : "none"};
  
  .action {
    position: absolute;
    bottom: 0;
    z-index: 16;
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    z-index: 1000;
  }

  .action a {
    z-index: 1000;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.body};
    box-shadow: 3px 3px 15px ${(props) => props.theme.text};
    transition: all 0.2s ease-in-out;
  color: ${(props) => props.theme.text};
    transform: translateY(50%);

    svg{
      font-size:1.5rem ;
    }
  }

  .action a:hover {
    transform: scale(1.3) translateY(40%);
  }
  `;


export const Text = styled(motion.div)`
 background: ${(props) => props.theme.text};
 border-radius:  ${(props) => props.theme.name == "dark" ? `12px` : "none"};
  color: ${(props) => props.theme.body};
   position: absolute; 
   top: 0;
   right: 0;
   bottom: 0;
  left: 0; 
z-index:10 ;
padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition:all ease-in-out .6s ;
  overflow: hidden;

  h2, h3, p, div {
    transition: all ease-in-out .7s;
  }

  img {
    transform: translateX(-400px) !important;
    z-index: -1;
    transition: all ease-in-out .3s;
  }
  
  &:hover{
    
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover ;
    
    img{
      display : block !important;
      transform: translateX(0) !important;
    }
    
    h2, h3, p, div {
      opacity: 0;
    }
  }

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
`
