import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { LanguageContext } from './../../pages/_app';
import { motion } from 'framer-motion';
// images
import calcImg from '../../assets/Images/calc.png';
import ticImg from '../../assets/Images/tic.png';
import { BsGithub } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';

const images = {
  calc: calcImg.src,
  tic: ticImg.src,
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
  }

  h3 {
    text-transform: capitalize;
  }

  .tec-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  span {
    margin: 1px 3px;
    padding: 2px 5px;
    text-align: center;
    border: 1px solid ${(props) => props.theme.body};
    text-transform: capitalize;
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
    }

    @media (max-width: 300px) {
      width: 90vw;
    }
  }
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${(props) => `url(${images[props.img_path]})`};
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

  a {
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

export default function WorkCard({ workItem }) {
  const [lang] = useContext(LanguageContext),
    [showOverlay, setShowOverlay] = useState(false);

  const { title, description, note } = workItem[lang],
    { tec, img_path, git_link, web_link } = workItem;

  return (
    <Box variants={item} onMouseEnter={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>
      {showOverlay ? (
        <Overlay
          img_path={img_path}
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ type: 'spring', duration: 2 }}
        >
          <a target="_blank" rel="noreferrer" href={git_link}>
            <BsGithub />
          </a>
          <a target="_blank" rel="noreferrer" href={web_link}>
            <FaArrowRight />
          </a>
        </Overlay>
      ) : null}
      <h2>{title}</h2>
      <h3>{description}</h3>
      <p>{note}</p>
      <div className="tec-box">
        {tec.map((item, i) => (
          <span key={`key${i}`}>
            <p>{item}</p>
          </span>
        ))}
      </div>
    </Box>
  );
}
