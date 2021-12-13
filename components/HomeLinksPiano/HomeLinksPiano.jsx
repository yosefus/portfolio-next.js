import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { LanguageContext } from '../../pages/_app';
import { motion } from 'framer-motion';
import styles from './style.module.css';

const keyPress = keyframes`
 0% {
  transform: translateX(0px);
}
 20% {
  transform: translateX(5px);
}
 40% {
  transform: translateX(10px);
}
 60% {
  transform: translateX(0px);
}
 80% {
  transform: translateX(-20px);
}
 100% {
  transform: translateX(-200px);
}
`;

const MenuOn = keyframes`
   0% {
  transform: translateX(-110%)
}

 100% {
  transform: translateX(0)}
}
`;
const MenuOff = keyframes`
   0% {
    transform: translateX(0)}

 100% {
  transform: translateX(-110%)
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
    about: 'about',
    work: 'work',
    photography: 'Images',
    mySkills: 'my skills',
  },
};

const ani = {
  off: MenuOff,
  on: MenuOn,
};

const Piano = styled(motion.div)`
  direction: ltr;
  position: absolute;
  top: 4rem;
  left: 0;
  height: 30vh;
  box-shadow: 5px 5px 13px #6161617a;
  display: grid;
  grid-template-rows: repeat(40, 1fr);
  grid-template-columns: repeat(3, 1fr);
  z-index: 10;
  min-width: calc(10vw + 2rem);
  background: transparent;
  animation: ${(props) => (!props.click && props.burgerclick ? ani['on'] : ani['off'])} linear forwards 0.7s;

  @media (max-width: 600px) {
    min-width: calc(20vw + 6rem);
    height: 25vh;
  }
`;

const Key = styled(motion.div)`
  cursor: pointer;
  background: #fff;
  z-index: 10;
  width: 100%;
  padding: 0 1rem;
  grid-column: 1 / span 3;
  border-radius: 0 3px 3px 0;
  border: 1px solid #e6e6e6;
  transition: all ease-in-out 0.3s;
  text-transform: capitalize;

  a {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    a {
      font-size: 0.8rem;
    }
  }

  a {
    transition: all ease-in-out 0.6s;
  }

  &:hover {
    background: linear-gradient(to right, #ffffff, #ececec);
    border-top: 1px solid #b9b9b9;
    border-bottom: 1px solid #b9b9b9;

    p {
      animation: ${keyPress} linear 0.5s forwards;
    }
  }
`;

const LittleOne = styled.div`
  grid-row: 9 / span 4;
  grid-column: 1 / span 2;
  border-radius: 0 7px 7px 0;
`;

const LittleTwo = styled.div`
  grid-column: 1 / span 2;
  grid-row: 19 / span 4;
  border-radius: 0 7px 7px 0;
`;

const LittleThree = styled.div`
  grid-column: 1 / span 2;
  grid-row: 39 / span 2;
  border-radius: 0 7px 0 0;
`;

export default function HomeLinksPiano({ burgerclick, click }) {
  console.log(burgerclick);
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

      {/* 1 */}

      <Key className={styles.first}>
        <Link href="/work">
          <a>
            <p>{Text[lang].work}</p>
          </a>
        </Link>
      </Key>

      {/* 2 */}

      <Key className={styles.second}>
        <Link href="/about">
          <a>
            <p>{Text[lang].about}</p>
          </a>
        </Link>
      </Key>

      {/* 3 */}

      <Key className={styles.third}>
        <Link href="/mySkills">
          <a>
            <p>{Text[lang].mySkills}</p>
          </a>
        </Link>
      </Key>

      {/* 4 */}

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
