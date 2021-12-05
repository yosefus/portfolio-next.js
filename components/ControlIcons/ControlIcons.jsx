import React, { useContext } from 'react';
import { DarkTheme, LightTheme } from '../Themes/Themes';
import { LanguageContext } from '../../pages/_app';
import Link from 'next/link';
import styled from 'styled-components';
// icons
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';
import { motion } from 'framer-motion';

const Icons = styled(motion.div)`
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
    margin: 0.3rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
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

export default function ControlIcons({ ThemeState }) {
  const [Theme, setTheme] = ThemeState;
  const [Language, setLanguage] = useContext(LanguageContext);

  return (
    <Icons initial={{ y: -300 }} animate={{ y: 0 }} transition={{ type: 'spring', duration: 1, delay: 0.8 }}>
      <Line />
      <motion.div
        initial={{ transform: 'scale(0)', transition: { type: 'spring', duration: 1.5, delay: 1 } }}
        animate={{ scale: [0, 1, 1.5, 1], transition: { type: 'spring', duration: 1.5, delay: 1 } }}
        whileHover={{ scale: 1.7, rotate: '360deg' }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href="mailto:yosefus741@gmail.com">
          <a target="_blank">
            <AiOutlineMail />
          </a>
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setLanguage(Language === 'he' ? 'en' : 'he')}
      >
        <motion.p
          initial={{ transform: 'scale(0)', transition: { type: 'spring', duration: 1.5, delay: 1 } }}
          animate={{ scale: [0, 1, 1.5, 1], transition: { type: 'spring', duration: 1.5, delay: 1.2 } }}
        >
          <MdLanguage />
        </motion.p>
        <motion.p
          initial={{ transform: 'scale(0)', transition: { type: 'spring', duration: 1.5, delay: 1 } }}
          animate={{ scale: [0, 1, 1.5, 1], transition: { type: 'spring', duration: 1.5, delay: 1.4 } }}
        >
          {Language === 'he' ? 'en' : 'עב'}
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)', transition: { type: 'spring', duration: 1.5, delay: 1 } }}
        animate={{ scale: [0, 1, 1.5, 1], transition: { type: 'spring', duration: 1.5, delay: 1.6 } }}
        onClick={() => setTheme(Theme == LightTheme ? DarkTheme : LightTheme)}
      >
        <motion.p whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
          {Theme !== LightTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
        </motion.p>
      </motion.div>
    </Icons>
  );
}
