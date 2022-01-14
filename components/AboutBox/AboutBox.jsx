import React from 'react';
import { Descrition, Main, Title, Icons } from './style';

// icons
import { BsGithub, BsFillBootstrapFill } from 'react-icons/bs';
import { MdAnimation } from 'react-icons/md';
import { AiFillHtml5, AiFillCamera } from 'react-icons/ai';
import { DiCss3, DiReact, DiSass, DiJavascript1, DiPhotoshop, DiLess } from 'react-icons/di';
import {
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiAdobelightroom,
  SiShutterstock,
} from 'react-icons/si';

const icons = {
  iconsDev: {
    a: <AiFillHtml5 />,
    b: <DiReact />,
    c: <SiNextdotjs />,
    d: <SiNodedotjs />,
    e: <SiMongodb />,
    f: <SiExpress />,
    g: <DiJavascript1 />,
    h: <BsFillBootstrapFill />,
    y: <BsGithub />,
  },

  iconsArt: {
    a: <DiSass />,
    b: <MdAnimation />,
    c: <DiCss3 />,
    d: <AiFillCamera />,
    e: <DiPhotoshop />,
    f: <SiAdobelightroom />,
    g: <SiShutterstock />,
    h: <DiLess />,
  },
};

export default function AboutBox({
  lang,
  TitleText,
  p,
  strong,
  mainList,
  strong2,
  secondList,
  icon,
  backSrc,
  iconList,
}) {
  return (
    <Main backSrc={backSrc} lang={lang}>
      <Title>
        {icon}
        {TitleText}
      </Title>
      <Icons>
        {Object.keys(icons[iconList]).map((k, index) => (
          <span key={`rrr${index}`}>{icons[iconList][k]}</span>
        ))}
      </Icons>
      <Descrition>{p}</Descrition>
      <Descrition>
        <strong>{strong}</strong>
        <ul>
          {mainList.map((listText, i) => (
            <li key={`k${i}`}>{listText}</li>
          ))}
        </ul>
      </Descrition>
      <Descrition>
        <strong>{strong2}</strong>
        <ul>
          {secondList.map((listText, i) => (
            <li key={`ddd${i}`}>{listText}</li>
          ))}
        </ul>
      </Descrition>
    </Main>
  );
}
