import React, { useContext, useState } from 'react';
import { LanguageContext } from './../../pages/_app';

import Image from 'next/image';
import { Box, Overlay } from './style';

// images
import calcImg from '../../assets/Images/calc.png';
import ticImg from '../../assets/Images/tic.png';
import ticJsImg from '../../assets/Images/ticjs.png';
import countryImg from '../../assets/Images/country.jpg';

// icons
import { BsGithub, BsFillBootstrapFill } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { MdAnimation } from 'react-icons/md';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiReact, DiSass, DiJavascript1 } from 'react-icons/di';
import { SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si';

const images = {
  calc: calcImg,
  tic: ticImg,
  ticjs: ticJsImg,
  country: countryImg,
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: 'spring', duration: 0.5 } },
};

const icons = {
  html: <AiFillHtml5 />,
  css: <DiCss3 />,
  react: <DiReact />,
  next: <SiNextdotjs />,
  node: <SiNodedotjs />,
  mongo: <SiMongodb />,
  express: <SiExpress />,
  sass: <DiSass />,
  animation: <MdAnimation />,
  js: <DiJavascript1 />,
  bootstarp: <BsFillBootstrapFill />,
};

export default function WorkCard({ workItem }) {
  const [lang] = useContext(LanguageContext),
    [showOverlay, setShowOverlay] = useState(false);

  const { title, description, note } = workItem[lang],
    { tec, img_path, git_link, web_link } = workItem;

  return (
    <Box
      onClick={() => setShowOverlay(!showOverlay)}
      variants={item}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      {showOverlay ? (
        <Overlay
          img_path={img_path}
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ type: 'spring', duration: 2 }}
        >
          <Image
            src={images[img_path]}
            layout="fill"
            className="layout-img"
            objectFit="cover"
            priority={true}
          />
          <a onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" href={git_link}>
            <BsGithub />
          </a>
          <a onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" href={web_link}>
            <FaArrowRight />
          </a>
        </Overlay>
      ) : null}
      <h2>{title}</h2>
      <h3>{description}</h3>
      <p>{note}</p>
      <div className="tec-box">
        {tec.map((item, i) => (
          <span key={`key${i}`}>{icons[item]}</span>
        ))}
      </div>
    </Box>
  );
}
