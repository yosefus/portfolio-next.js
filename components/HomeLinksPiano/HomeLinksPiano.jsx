import React, { useContext } from 'react';
import Link from 'next/link';
// context
import { LanguageContext } from '../../pages/_app';
// style
import styles from './style.module.css';
import { LittleThree, Key, LittleOne, LittleTwo, Piano } from './style';

const Text = {
  he: {
    about: 'אודות',
    work: 'העבודות שלי',
    photography: 'תמונות',
    mySkills: 'הכישורים שלי',
  },
  en: {
    about: 'about',
    work: 'work',
    photography: 'Images',
    mySkills: 'my skills',
  },
};

export default function HomeLinksPiano({ burgerclick, click }) {
  const [lang] = useContext(LanguageContext);

  return (
    <Piano
      initial={{ x: -200 }}
      animate={{ x: 0, transition: { duration: 2, type: 'spring' } }}
      exit={{ x: -200 }}
      click={click}
      burgerclick={burgerclick}
    >
      <LittleOne className={styles.littleKey} />
      <LittleTwo className={styles.littleKey} />
      <LittleThree className={styles.littleKey} />

      <Key className={styles.first}>
        <Link href="/work">
          <a>
            <p>{Text[lang].work}</p>
          </a>
        </Link>
      </Key>

      <Key className={styles.second}>
        <Link href="/about">
          <a>
            <p>{Text[lang].about}</p>
          </a>
        </Link>
      </Key>

      <Key className={styles.third}>
        <Link href="/mySkills">
          <a>
            <p>{Text[lang].mySkills}</p>
          </a>
        </Link>
      </Key>

      <Key className={styles.forth}>
        <Link href="/photography">
          <a>
            <p>{Text[lang].photography}</p>
          </a>
        </Link>
      </Key>
    </Piano>
  );
}
