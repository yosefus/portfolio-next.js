import React, { useContext } from 'react';
import styled from 'styled-components';

import { FaLaptopCode } from 'react-icons/fa';
import { BiPaint } from 'react-icons/bi';
import { MdPhotoCamera } from 'react-icons/md';
import { LanguageContext } from './_app';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1050px) {
    padding-top: 10vh;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background: transparent;
  padding: 2rem;
  width: 35vw;
  min-height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: ${(props) => (props.lang == 'he' ? 'M PLUS 1p' : 'Ubuntu Mono')}, monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1050px) {
    margin: 5vh 0;
    width: 70vw;
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
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1vw);
`;

const Descrition = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.4rem + 1vw);
  padding: 0.5rem 0;

  @media (max-width: 480px) {
    font-size: calc(0.6rem + 1vw);
  }
`;

const Text = {
  en: {
    designTitle: 'Web designer, photographer and graphic artist.',
    designP:
      'I love  to design websites in an elegant and eye-catching way. Enjoys taking and editing photos of all types of categories.',

    designStrong: 'My experience:',
    designList: [
      'Nature photography, landscapes and people.',
      'editing with Lightroom and Photoshop.',
      'Designing and building websites.',
    ],
    designTools: 'Tools:',
    designToolsList: ['Lightroom, Photoshop, Professional camera, Bootstrap 5, Material ui, css'],
    developTitle: '',
    developP: ' ',
    developStrong: '',
    developList: [''],
    developTools: 'Tools:',
    developToolsList: [''],
  },
  he: {
    designTitle: 'מעצב אתרים, צלם וגרפיקאי',
    designP:
      'אני אוהב לעצב אתרים בצורה מושכת את העין, בסגנון נקי ומינימלי. נהנה לצלם ולערוך תמונות מכל סוגי קטגוריות. ',
    designStrong: 'הניסיון  שלי:',
    designList: [
      'צלם טבע, נופים ואירועים.',
      'ניסיון עשיר בעריכה בתוכנות לייטרום ופוטושופ.',
      'עיצוב ובניית אתרים.',
    ],

    designTools: 'כלים:',
    designToolsList: ['מצלמה מקצועית, לייטרום, פוטושופ,', ' css, Bootstrap 5, Material ui'],
    developTitle: '',
    developP: ' ',
    developStrong: '',
    developList: [''],
    developTools: 'כלים:',
    developToolsList: [''],
  },
};

export default function mySkills() {
  const [lang] = useContext(LanguageContext);
  const {
    designTitle,
    designP,
    designStrong,
    designList,
    designTools,
    designToolsList,
    developTitle,
    developP,
    developStrong,
    developList,
    developTools,
    developToolsList,
  } = Text[lang];

  return (
    <Container>
      <Main lang={lang}>
        <Title>
          <BiPaint />
          {designTitle}
        </Title>
        <Descrition>{designP}</Descrition>
        <Descrition>
          <strong>{designStrong}</strong>
          <ul>
            {designList.map((listText, i) => (
              <li key={`k${i}`}>{listText}</li>
            ))}
          </ul>
        </Descrition>
        <Descrition>
          <strong>{designTools}</strong>
          <ul>
            {designToolsList.map((listText, i) => (
              <li key={`k${i}`}>{listText}</li>
            ))}
          </ul>
        </Descrition>
      </Main>
      <Main lang={lang}>
        <Title>
          <FaLaptopCode />
          {developTitle}
        </Title>
        <Descrition>{developP}</Descrition>
        <Descrition>
          <strong>{developStrong}</strong>
          <ul>
            {developList.map((listText, i) => (
              <li key={`k${i}`}>{listText}</li>
            ))}
          </ul>
        </Descrition>
        <Descrition>
          <strong>{developTools}</strong>
          <ul>
            {developToolsList.map((listText, i) => (
              <li key={`k${i}`}>{listText}</li>
            ))}
          </ul>
        </Descrition>
      </Main>
    </Container>
  );
}
