import Head from 'next/head';
import '../node_modules/normalize.css';
import { MainContainer, Container, Center, DarkDiv } from '../styles/Home';
import { HomeLinks, SocialIcons, Intro, HomeLinksPiano } from './../components';
import { GiYinYang } from 'react-icons/gi';
import { useContext, useState } from 'react';
import { LanguageContext } from '../pages/_app';
import { BurgerBtn } from '../components';

export default function Home() {
  const [lang] = useContext(LanguageContext);
  const [clickCenter, setClickCenter] = useState(0);
  const [burgerClick, setburgerClick] = useState(0);

  const Text = {
    he: {
      clickMe: 'מה אתה לוחץ עלי?',
    },
    en: {
      clickMe: 'Click Me',
    },
  };

  const onClickBurger = () => {
    if (burgerClick == 0) {
      setburgerClick(1);
      setClickCenter(0);
    } else {
      setburgerClick(0);
    }
  };

  const onClickCenter = () => {
    if (clickCenter == 0) {
      setburgerClick(0);
      setClickCenter(1);
    } else {
      setClickCenter(0);
    }
  };

  return (
    <div>
      <MainContainer>
        <Container>
          <BurgerBtn click={clickCenter} onClickBurger={onClickBurger} />

          <HomeLinksPiano click={clickCenter} burgerclick={burgerClick} />
          {!clickCenter && burgerClick ? null : null}

          {/* <HomeLinks click={click} /> */}

          <SocialIcons click={clickCenter} />

          <DarkDiv click={clickCenter} />

          {clickCenter ? <Intro click={clickCenter} /> : null}

          <Center click={clickCenter} onClick={onClickCenter}>
            <h3>
              <GiYinYang />
            </h3>
            <h4>{Text[lang].clickMe}</h4>
          </Center>
        </Container>
      </MainContainer>
    </div>
  );
}
