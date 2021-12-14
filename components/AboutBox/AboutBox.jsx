import React from 'react';
import { Descrition, Main, Title, Icons } from './style';

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
      <Icons>{iconList && iconList.map((item, i) => <span key={i}>{item}</span>)}</Icons>
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
            <li key={`k${i}`}>{listText}</li>
          ))}
        </ul>
      </Descrition>
    </Main>
  );
}
