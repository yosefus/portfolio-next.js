import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const keyPress = keyframes`
 0% {
  transform: translateX(0px);
}
 20% {
  transform: translateX(5px);
}
 40% {
  transform: translateX(10px);
}
 60% {
  transform: translateX(0px);
}
 80% {
  transform: translateX(-20px);
}
 100% {
  transform: translateX(-200px);
}
`;

export const MenuOn = keyframes`
   0% {
  transform: translateX(-110%)
}

 100% {
  transform: translateX(0)}
}
`;
export const MenuOff = keyframes`
   0% {
    transform: translateX(0)}

 100% {
  transform: translateX(-110%)
}
`;

export const ani = {
  off: MenuOff,
  on: MenuOn,
};

export const Piano = styled(motion.div)`
  direction: ltr;
  position: absolute;
  top: 4rem;
  left: 0;
  height: 30vh;
  box-shadow: 5px 5px 13px #6161617a;
  display: grid;
  grid-template-rows: repeat(40, 1fr);
  grid-template-columns: repeat(3, 1fr);
  z-index: 10;
  min-width: calc(10vw + 2rem);
  background: transparent;
  animation: ${(props) => (!props.click && props.burgerclick ? ani['on'] : ani['off'])} linear forwards 0.7s;

  @media (max-width: 600px) {
    min-width: calc(20vw + 6rem);
    height: 25vh;
  }
`;

export const Key = styled(motion.div)`
  cursor: pointer;
  background: #fff;
  z-index: 10;
  width: 100%;
  padding: 0 1rem;
  grid-column: 1 / span 3;
  border-radius: 0 3px 3px 0;
  border: 1px solid #e6e6e6;
  transition: all ease-in-out 0.3s;
  text-transform: capitalize;

  a {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    a {
      font-size: 0.8rem;
    }
  }

  a {
    transition: all ease-in-out 0.6s;
  }

  &:hover {
    background: linear-gradient(to right, #ffffff, #ececec);
    border-top: 1px solid #b9b9b9;
    border-bottom: 1px solid #b9b9b9;

    p {
      animation: ${keyPress} linear 0.5s forwards;
    }
  }
`;

export const LittleOne = styled.div`
  grid-row: 9 / span 4;
  grid-column: 1 / span 2;
  border-radius: 0 7px 7px 0;
`;

export const LittleTwo = styled.div`
  grid-column: 1 / span 2;
  grid-row: 19 / span 4;
  border-radius: 0 7px 7px 0;
`;

export const LittleThree = styled.div`
  grid-column: 1 / span 2;
  grid-row: 39 / span 2;
  border-radius: 0 7px 0 0;
`;
