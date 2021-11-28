import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { LanguageContext } from '../../pages/_app';

const Links = styled.span`
  text-transform: capitalize;

  @media (max-width: 480px) {
    a {
      font-size: 0.8rem;
    }
  }
`;

const About = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: rotate(90deg);
  text-decoration: none;
  z-index: 1;
`;

const Photography = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: rotate(90deg);
  text-decoration: none;
  z-index: 2;
`;

const Work = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  bottom: 2rem;
  left: 33%;
  text-decoration: none;
  z-index: 2;

  @media (max-width: 480px) {
    left: 20%;
  }
`;

const MySkills = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  bottom: 2rem;
  right: 33%;
  text-decoration: none;
  z-index: 1;

  @media (max-width: 480px) {
    right: 20%;
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
      <Photography click={click} style={{ left: lang == 'he' ? '1.7rem' : '.1rem' }}>
        <Link href="photography">
          <a>{Text[lang].photography}</a>
        </Link>
      </Photography>
      <About>
        <Link href="about">
          <a>{Text[lang].about}</a>
        </Link>
      </About>
      <MySkills>
        <Link href="mySkills">
          <a>{Text[lang].mySkills}</a>
        </Link>
      </MySkills>
      <Work click={click}>
        <Link href="work">
          <a>{Text[lang].work}</a>
        </Link>
      </Work>
    </Links>
  );
}
