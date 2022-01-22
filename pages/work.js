import React, { useEffect, useRef, useContext, useState } from 'react';
import { FilterBox, WorkCard } from '../components';
import WorkArr from '../data/work-data';
import BigTitle from '../layout/BigTitle';
// style
import { CgYinyang } from 'react-icons/cg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LanguageContext } from './_app';
import { filter } from '../functions/filterWork';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${(props) => props.theme.body};
  position: relative;
  padding: 7rem 2rem;
`;

const Main = styled(motion.ul)`
  /* position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  display: flex; */
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 2rem;

  /* @media (max-width: 992px) {
    top: 45%;
    left: 30%;
  }

  @media (max-width: 600px) {
    top: 40%;
    left: 30%;
  } */
`;

const Rotate = styled.div`
  font-size: 8rem;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 1;
  color: ${(props) => props.theme.text};
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  /* box-shadow: 0px 2px 41px -3px rgba(0, 0, 0, 0.75); */

  background: ${(props) => props.theme.body};
  border-radius: 50%;

  @media (max-width: 600px) {
    font-size: 5rem;
  }
`;

const cont = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5, duration: 0.5 } },
};

export default function Work() {
  const ref = useRef(null);
  const yingYang = useRef(null);
  const [FilterQuery, setFilterQuery] = useState({ difficulty: '', search: '', sort_path: '' });

  const filteredArr = filter({ WorkArr, FilterQuery });

  useEffect(() => {
    console.log(FilterQuery);
  }, [FilterQuery]);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      if (!yingYang.current || !element) return;
      // element.style.transform = `translateX(-${window.pageYOffset}px)`;
      yingYang.current.style.transform = `rotate(${-window.pageYOffset}deg)`;
    };

    window.addEventListener('scroll', rotate);

    return () => window.removeEventListener('scroll', rotate);
  }, []);

  const handleChangeFilter = (e) => setFilterQuery({ ...FilterQuery, [e.target.name]: e.target.value });

  return (
    <Container>
      <BigTitle text="My Work" top={`10%`} left={`10%`} />
      <FilterBox handleChangeFilter={handleChangeFilter} FilterQuery={FilterQuery} />

      <Main variants={cont} initial="hidden" animate="show" ref={ref}>
        {filteredArr.map((workItem, i) => (
          <WorkCard key={`key${i}`} workItem={workItem} />
        ))}
      </Main>

      <Rotate ref={yingYang}>
        <CgYinyang />
      </Rotate>
    </Container>
  );
}
