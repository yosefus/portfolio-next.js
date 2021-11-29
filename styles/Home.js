import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }
`;

const Container = styled.div`
  background: ${(props) => props.theme.body};
  padding: 2rem;
`;

const Center = styled.button`
  background: transparent;
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: ${(props) => (props.click ? '85%' : '50%')};
  left: ${(props) => (props.click ? '92%' : '50%')};
  transform: translate(-50%, -50%);

  transition: all ease 0.5s;

  @media (max-width: 480px) {
    left: ${(props) => (props.click ? '85%' : '50%')};
  }

  h3 {
    font-size: ${(props) => (props.click ? '3rem' : '8rem')};
  }

  svg {
    animation: ${rotate} infinite 2s linear;
  }

  span {
    font-size: ${(props) => (props.click ? '0' : '1rem')};
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? '50%' : '0')};
  height: ${(props) => (props.click ? '100%' : '0')};
  z-index: 1;
  background: ${(props) => props.theme.text};
  transition: height 0.5s ease, width 1s ease 0.5s;

  /* @media (max-width: 480px) {
    bottom: 50%;
    left: 0;
    right: 0;
    width: ${(props) => (props.click ? '100%' : '0')};
    height: ${(props) => (props.click ? '50%' : '0')};
  } */
`;

export { MainContainer, Container, Center, DarkDiv };
