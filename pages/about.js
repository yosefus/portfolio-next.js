import React, { useContext } from 'react';
import { LanguageContext } from './_app';
// animation
import { motion } from 'framer-motion';
import Particle from '../layout/Particle';
// style
import Astro from '../assets/Images/spaceman.png';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${(props) => props.theme.body};
  position: relative;

  @media (max-width: 786px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Main = styled.div`
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  background: transparent;
  padding: 2rem;
  width: 50vw;
  z-index: 2;
  line-height: 1.5;
  font-family: ${(props) => (props.lang == 'he' ? 'M PLUS 1p' : 'Ubuntu Mono')}, monospace;
  display: flex;
  font-size: calc(0.6rem + 1vw);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  backdrop-filter: blur(5px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-style: italic;

  @media (max-width: 1050px) {
    top: 5rem;
    font-size: calc(0.5rem + 1vw);
  }

  @media (max-width: 768px) {
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    position: relative;
    width: 70vw;
  }

  @media (max-width: 400px) {
    width: 60vw;
  }
`;

const float = keyframes`
0%{
  transform: translateY(-10px)
}
50%{
  transform: translateY(15px) translateX(15px)
}
100%{
  transform: translateY(-10px)
}
`;

const Spaceman = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s infinite ease;
  z-index: 9;

  img {
    width: 100%;
    z-index: 9;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    left: 5%;

    img {
      transform: scaleX(-1);
    }
  }
`;

const Text = {
  he: {
    a: 'אני מפתח פרונטאנד ובק אנד ומתגורר בישראל, אוהב ליצור אתרים מתקדמים ורספונסיביים מכל הסוגים, וללמוד טכנולוגיות חדשות ומרתקות.',
    b: 'אני מתעניין בכל עולמות התכנות ומלא תשוקה לתחום בכלל.',
    c: 'אוהב אתגרים, חברותי ועובד צוות נהדר, נהנה מאתגרים קשים ככל שיהיו- ונהנה ללמוד דברים חדשים כל יום.',
    d: 'בעל ניסיון בתחום הצילום, עיצוב גרפי, ובניית אתרים.',
  },
  en: {
    a: "I'm a frontend and backend developer and live in Israel, I like to create advanced and responsive websites.",
    b: 'I am interested in all the programming worlds and full of passion for the field in general.',
    c: 'I love challenges, I am a very sociable person and love teamwork, enjoy difficult challenges - and enjoy learning new things every day.',
    d: 'Has experience in photography, graphic design, and website building.',
  },
};

export default function about() {
  const [lang] = useContext(LanguageContext),
    { a, b, c, d } = Text[lang];
  return (
    <Container>
      <Particle about={1} />
      <Main lang={lang}>
        {a}
        <br />
        <br />
        {b}
        <br />
        <br />
        {c}
        <br />
        <br />
        {d}
      </Main>
      <Spaceman whileTap={{ top: '-50vh' }} transition={{ type: 'spring', duration: 6 }}>
        <motion.img whileTap={{ scale: 0.3 }} transition={{ type: 'spring', duration: 2 }} src={Astro.src} />
      </Spaceman>
    </Container>
  );
}
