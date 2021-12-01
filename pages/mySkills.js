import React, { useContext } from 'react';
import { LanguageContext } from './_app';
// style and icons
import styled from 'styled-components';
import { FaLaptopCode } from 'react-icons/fa';
import { BiPaint } from 'react-icons/bi';
import lion from '../assets/Images/lion.jpg';
import sheLion from '../assets/Images/sheLion.jpg';
// components
import { AboutBox } from '../components';
import { motion } from 'framer-motion';
import Particle from '../layout/Particle';

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

const Back = styled(motion.span)`
  z-index: 1;
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(10px);

  @media (max-width: 1050px) {
    margin: 5vh 0;
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
    designTools: 'Knowledge:',
    designToolsList: ['Lightroom, Photoshop, photography, Bootstrap 5, Material ui, css'],
    developTitle: 'Frontend and Backend Developer.',
    developP: 'I enjoy developing and creating complex and simple sites, from end to end',
    developStrong: 'Back-end:',
    developList: ['Creating routes and complex logic,', 'Node.js, Express, mongoDb'],
    developTools: 'Front-end:',
    developToolsList: [
      'Build complex websites, including support for multiple languages.',
      'html, css, js, React,  Next.js',
    ],
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

    designTools: 'ידע נרחב ב:',
    designToolsList: ['צילום, לייטרום, פוטושופ,', ' css, Bootstrap 5, Material ui'],
    developTitle: 'בונה אתרים, צד לקוח וצד שרת',
    developP: 'אני נהנה לפתח וליצור אתרים מורכבים ופשוטים, מקצה לקצה ',
    developStrong: 'Back-end',
    developList: ['יצירת ראוטים ולוגיקה מורכבת,', 'node.js, express, mongoDb'],
    developTools: 'Front-end',
    developToolsList: ['בניית אתרים מורכבים, כולל תמיכה בשפות מרובות', 'html, css, js, React, Next.js'],
  },
};

export default function mySkills() {
  const [lang] = useContext(LanguageContext),
    {
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
      <Back
        whileHover={{
          background: `url(${lion.src}), linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))`,
          backgroundPosition: 'right',
          backgroundSize: 'cover',
          scale: 1.1,
          borderRadius: '50%',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 1 }}
      >
        <AboutBox
          lang={lang}
          TitleText={designTitle}
          p={designP}
          strong={designStrong}
          mainList={designList}
          strong2={designTools}
          secondList={designToolsList}
          icon={<BiPaint />}
        />
      </Back>

      <Back
        whileHover={{
          background: `url(${sheLion.src}), linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))`,
          backgroundPosition: 'right',
          backgroundSize: 'cover',
          scale: 1.1,
          borderRadius: '50%',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 1 }}
      >
        <AboutBox
          lang={lang}
          TitleText={developTitle}
          p={developP}
          strong={developStrong}
          mainList={developList}
          strong2={developTools}
          secondList={developToolsList}
          icon={<FaLaptopCode />}
        />
      </Back>

      <Particle />
    </Container>
  );
}
