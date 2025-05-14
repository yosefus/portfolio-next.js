import Link from 'next/link';
import React, { useContext } from 'react';
// language
import { LanguageContext } from '../../pages/_app';
// style
import { motion } from 'framer-motion';
import { CiGlobe } from "react-icons/ci";
import { IoMdArrowBack } from 'react-icons/io';
import { MdDoubleArrow } from 'react-icons/md';
import { Box, ButtonsContainer, SubBox, TextBox } from './introStyle';


const Text = {
  he: {
    head: 'שלום',
    main: 'אני יוסף',
    p: 'אני מפתח פול סטאק, מעצב ובונה אתרים, צלם חובב וגרפיקאי',
    myWorkLink: 'תיק עבודות',
    personalWeb: 'בלוג'
  },
  en: {
    head: 'Hi,',
    main: "I'm Yosefus.",
    p: 'I am a full stack developer, graphic designer, and photographer.',
    myWorkLink: 'portfolio',
    personalWeb: 'blog'
  },
};

export default function Intro({ click }) {
  const [lang] = useContext(LanguageContext);
  const { head, main, p, myWorkLink, personalWeb } = Text[lang];

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
          <ButtonsContainer>
            <Link href="/work">
              <a className="linkPort">
                {myWorkLink}
                <span>{lang === 'en' ? <MdDoubleArrow /> : <IoMdArrowBack />}</span>
              </a>
            </Link>
            <a className='link' href="https://yosefus-flavius.com" target="_blank">
              {personalWeb}
              <CiGlobe />
            </a>
          </ButtonsContainer>
        </TextBox>
      </SubBox>
      <SubBox>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }}>
          <img className="pic" alt="propfile pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
}
