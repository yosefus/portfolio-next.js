import styled from 'styled-components';

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

export { MainContainer, Container };
