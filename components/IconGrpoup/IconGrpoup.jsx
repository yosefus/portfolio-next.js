import React, { useContext } from 'react';
import { DarkTheme, LightTheme } from '../Themes/Themes';
import { LanguageContext } from '../../pages/_app';
import Link from 'next/link';
import styled from 'styled-components';
// icons
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';

const Icons = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  top: 0;
  right: 2rem;
  background: transparent;
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;

  p {
    margin: 0.5rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;

    p {
      margin: 0.3rem 0;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background: ${(props) => props.theme.text};

  @media (max-width: 480px) {
    height: 6rem;
  }

  @media (max-height: 600px) {
    height: 4rem;
  }
`;

export default function IconGrpoup({ ThemeState }) {
  const [Theme, setTheme] = ThemeState;
  const [Language, setLanguage] = useContext(LanguageContext);

  return (
    <Icons>
      <Line />
      <div>
        <Link href="mailto:yosalson@gmail.co">
          <a target="_blank">
            <AiOutlineMail />
          </a>
        </Link>
      </div>
      <div onClick={() => setLanguage(Language === 'he' ? 'en' : 'he')}>
        <p>
          <MdLanguage />
        </p>
        <p>{Language === 'he' ? 'עב' : 'en'}</p>
      </div>
      <div onClick={() => setTheme(Theme == LightTheme ? DarkTheme : LightTheme)}>
        <p>{Theme == LightTheme ? <BsFillSunFill /> : <BsFillMoonFill />}</p>
      </div>
    </Icons>
  );
}
