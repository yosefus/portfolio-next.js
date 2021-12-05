import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
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
    transition: all 2s ease-in-out;
  }

  &:hover {
    color: #fff;
    backdrop-filter: none;
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

const Title = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: calc(1rem + 1vw);

  svg {
    margin: 0 1rem;
  }

  ${Main}:hover & {
    text-shadow: -3px 6px 7px #000;
    flex-direction: column;

    svg {
      text-shadow: 4px 3px 2px #000;
    }

    & > * {
      color: #fff;
      fill: #fff;
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

const Descrition = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.4rem + 1vw);
  padding: 0.5rem 0;
  background: transparent;

  ${Main}:hover & {
    color: #fff;
    display: none;
  }

  @media (max-width: 480px) {
    font-size: calc(0.6rem + 1vw);
  }
`;

export default function AboutBox({
  lang,
  TitleText,
  p,
  strong,
  mainList,
  strong2,
  secondList,
  icon,
  backSrc,
}) {
  return (
    <Main backSrc={backSrc} lang={lang}>
      <Title>
        {icon}
        {TitleText}
      </Title>
      <Descrition>{p}</Descrition>
      <Descrition>
        <strong>{strong}</strong>
        <ul>
          {mainList.map((listText, i) => (
            <li key={`k${i}`}>{listText}</li>
          ))}
        </ul>
      </Descrition>
      <Descrition>
        <strong>{strong2}</strong>
        <ul>
          {secondList.map((listText, i) => (
            <li key={`k${i}`}>{listText}</li>
          ))}
        </ul>
      </Descrition>
    </Main>
  );
}
