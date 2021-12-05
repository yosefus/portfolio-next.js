import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { LanguageContext } from '../../pages/_app';
import { motion } from 'framer-motion';

const Links = styled.span`
  text-transform: capitalize;

  a {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    a {
      font-size: 0.8rem;
    }
  }
`;

const About = styled(motion.div)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: 1.7rem;
  text-decoration: none;
  z-index: 10;
  p {
    transform: rotate(270deg);
  }
`;

const Photography = styled(motion.div)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: 1.8rem;
  text-decoration: none;
  z-index: 2;

  p {
    margin: 0;
    padding: 0;
    line-height: 0;
    transform: rotate(90deg);
  }
`;

const Work = styled(motion.div)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  bottom: 2rem;
  left: 33%;
  text-decoration: none;
  z-index: 2;

  @media (max-width: 480px) {
    left: 18%;
  }
`;

const MySkills = styled(motion.div)`
  color: ${(props) => props.theme.text};
  position: absolute;
  bottom: 2rem;
  right: 33%;
  text-decoration: none;
  z-index: 1;

  @media (max-width: 480px) {
    right: 18%;
  }
`;

const Text = {
  he: {
    about: 'אודות',
    work: 'העבודות שלי',
    photography: 'תמונות',
    mySkills: 'הכישורים שלי',
  },
  en: {
    about: 'about .',
    work: 'work .',
    photography: 'photography .',
    mySkills: 'my skills .',
  },
};

export default function HomeLinks({ click }) {
  const [lang] = useContext(LanguageContext);

  return (
    <Links>
      <Photography
        initial={{ x: -200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
        animate={{ x: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
        whileHover={{ fontWeight: 700, scale: 1.2 }}
        click={click}
        style={{ left: lang == 'he' ? '1.7rem' : '0rem' }}
      >
        <Link href="/photography">
          <a>
            <p>{Text[lang].photography}</p>
          </a>
        </Link>
      </Photography>
      <About
        initial={{ x: 200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
        animate={{ x: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
        whileHover={{ fontWeight: 700, scale: 1.2 }}
      >
        <Link href="/about">
          <a>
            <p>{Text[lang].about}</p>
          </a>
        </Link>
      </About>
      <MySkills
        initial={{ y: 200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
        animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
        whileHover={{ fontWeight: 700, scale: 1.2 }}
      >
        <Link href="/mySkills">
          <a>{Text[lang].mySkills}</a>
        </Link>
      </MySkills>
      <Work
        initial={{ y: 200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
        animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
        whileHover={{ fontWeight: 700, scale: 1.2 }}
        click={click}
      >
        <Link href="/work">
          <a>{Text[lang].work}</a>
        </Link>
      </Work>
    </Links>
  );
}
