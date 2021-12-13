import React, { useContext, useState } from 'react';
import { LanguageContext } from './../../pages/_app';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
// images
import calcImg from '../../assets/Images/calc.png';
import ticImg from '../../assets/Images/tic.png';
import ticJsImg from '../../assets/Images/ticjs.png';

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
};

const Box = styled(motion.li)`
  position: relative;
  width: 22rem;
  min-height: 22rem;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 50px 0 50px;
  margin-right: 3rem;

  h2 {
    text-transform: uppercase;
    font-weight: 800;
  }

  h3 {
    text-transform: capitalize;
  }

  .tec-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    span {
      margin: 3px;
      padding: 3px 6px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${(props) => props.theme.body};
      font-size: 1.4rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 0.7rem;
    width: 70vw;
    min-height: 75vw;
  }

  @media (max-width: 400px) {
    padding: 1rem;

    .tec-box {
      padding-left: 10px;
      span {
        font-size: 1.2rem;
      }
    }

    @media (max-width: 300px) {
      width: 90vw;
    }
  }
`;

const Overlay = styled(motion.div)`
  direction: ltr;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 2rem;
  font-size: 2rem;
  border: 3px solid ${(props) => props.theme.text};
  border-radius: 0 50px 0 50px;

  .layout-img {
    border-radius: 0 50px 0 50px;
    z-index: 12;
  }

  a {
    z-index: 16;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.text};
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    transform: scale(1.2);
  }

  @media (max-width: 600px) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 70vw;
    min-height: 75vw;
  }
`;

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
          <Image src={images[img_path]} layout="fill" className="layout-img" objectFit="cover" />

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
