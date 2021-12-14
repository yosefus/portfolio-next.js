import React from 'react';
import { Descrition, Main, Title, Icons } from './style';

// icons
import { BsGithub, BsFillBootstrapFill } from 'react-icons/bs';
import { MdAnimation } from 'react-icons/md';
import { AiFillHtml5, AiFillCamera } from 'react-icons/ai';
import { DiCss3, DiReact, DiSass, DiJavascript1, DiPhotoshop } from 'react-icons/di';
import {
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiAdobelightroom,
  SiShutterstock,
} from 'react-icons/si';

const icons = {
  iconsDev: [
    <AiFillHtml5 />,
    <DiReact />,
    <SiNextdotjs />,
    <SiNodedotjs />,
    <SiMongodb />,
    <SiExpress />,
    <DiJavascript1 />,
    <BsFillBootstrapFill />,
    <BsGithub />,
  ],

  iconsArt: [
    <DiSass />,
    <MdAnimation />,
    <DiCss3 />,
    <AiFillCamera />,
    <DiPhotoshop />,
    <SiAdobelightroom />,
    <SiShutterstock />,
  ],
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
      {/* <Icons>
        {icons[iconList].map((item, index) => (
          <span key={`rrr${index}`}>{item}</span>
        ))}
      </Icons> */}
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
