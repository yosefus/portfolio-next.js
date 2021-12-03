import React, { useRef, useState, useEffect } from 'react';
import { MdMusicOff } from 'react-icons/md';
import { GiMusicalNotes } from 'react-icons/gi';
import styled from 'styled-components';
// import music from '../../assets/audio/relax.mp3';

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 8rem;
  top: 3rem;
  z-index: 10;
`;

export default function SoundBar() {
  const [PlayMusic, setPlayMusic] = useState(false);
  const [Music, setMusic] = useState();
  const ref = useRef(null);
  //   let audio = ;

  const handleClick = () => {
    setPlayMusic(!PlayMusic);
    if (!PlayMusic) {
      Music.play();
    } else {
      Music.pause();
    }
  };

  useEffect(() => {
    setMusic(new Audio('../../assets/audio/relax.mp3'));
  }, []);

  return (
    <Box onClick={handleClick}>
      <GiMusicalNotes />
      {/* <audio onClick={handleClick} ref={ref} src={music.src} loop>
         <source
      </audio> */}
    </Box>
  );
}
