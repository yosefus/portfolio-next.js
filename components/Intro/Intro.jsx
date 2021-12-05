import React, { useContext } from 'react';
import styled from 'styled-components';
import me from '../../assets/Images/profile.png';
import me2 from '../../assets/Images/profile2.png';
import { LanguageContext } from '../../pages/_app';
import { motion } from 'framer-motion';

const Box = styled(motion.div)`
  direction: ltr;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(to right, ${(props) => props.theme.body} 50%, ${(props) => props.theme.text} 50%) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  @media (max-width: 480px) {
    width: 70vw;
  }
  @media (max-width: 320px) {
    width: 65vw;
  }
`;

const TextBox = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  direction: ${(props) => (props.lang == 'he' ? 'rtl' : 'ltr')};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h6 {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-weight: 300;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    justify-content: flex-start;

    h3,
    h6,
    h1 {
      margin-bottom: 5px;
      z-index: 3;
      text-shadow: ${(props) => `3px 3px 8px ${props.theme.text}`};
    }
  }

  h1 {
    margin: 0;
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    .pic {
      content: ${`url( ${me2.src})`};
      left: 120%;

      /* bottom: -20px; */
      width: 100vw;
      z-index: 1;
    }
  }
`;

const Text = {
  he: {
    head: 'שלום',
    main: 'אני יוסף',
    p: 'אני מפתח פול סטאק, מעצב ובונה אתרים, צלם חובב וגרפיקאי',
  },
  en: {
    head: 'Hi,',
    main: "I'm Yosefus.",
    p: 'I am a full stack developer, graphic designer, photographer, and web developer.',
  },
};

export default function Intro({ color }) {
  const [lang] = useContext(LanguageContext);
  const { head, main, p } = Text[lang];

  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <TextBox lang={lang}>
          <h1>{head}</h1>
          <h3>{main}</h3>
          <h6>{p}</h6>
        </TextBox>
      </SubBox>
      <SubBox>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }}>
          <img className="pic" src={me.src} alt="propfile pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
}
