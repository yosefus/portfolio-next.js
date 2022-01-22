import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../../pages/_app';
import { motion } from 'framer-motion';

const filterText = {
  en: {
    titleDiff: 'difficulty',
    easy: 'easy',
    medium: 'medium',
    hard: 'hard',
    sort_pathTitle: 'front/back',
    back: 'backend',
    front: 'frontend',
    searchTitle: 'search in tech',
  },
  he: {
    titleDiff: 'רמת קושי',
    easy: 'קל',
    medium: 'בינוני',
    hard: 'קשה',
    sort_pathTitle: 'צד לקוח/ שרת',
    back: 'צד שרת',
    front: 'צד לקוח',
    searchTitle: 'חפש לפי טכנולוגיה',
  },
};

const FilterDiv = styled(motion.div)`
  z-index: 10;
  position: relative;
  /* height: 70px; */
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 1rem auto;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  min-height: 70px;
  background: ${(props) => props.theme.text};

  input,
  select {
    width: 300px;
    outline: none;
    border: none;
    line-height: 1.6rem;
    padding: 0.3rem 0.6rem;
    font-size: 1.2rem;
  }

  * {
    z-index: 10;
  }
`;

export default function FilterBox({ handleChangeFilter, FilterQuery }) {
  const [lang] = useContext(LanguageContext);

  return (
    <FilterDiv>
      <select value={FilterQuery.difficulty} onChange={handleChangeFilter} name="difficulty">
        <option value="">{filterText[lang].titleDiff}...</option>
        <option value="easy">{filterText[lang].easy}</option>
        <option value="medium">{filterText[lang].medium}</option>
        <option value="hard">{filterText[lang].hard}</option>
      </select>
      <select value={FilterQuery.sort_path} onChange={handleChangeFilter} name="sort_path">
        <option value="">{filterText[lang].sort_pathTitle}...</option>
        <option value="frontend">{filterText[lang].front}</option>
        <option value="backend">{filterText[lang].back}</option>
      </select>
      <input
        value={FilterQuery.search}
        name="search"
        onChange={handleChangeFilter}
        type={'search'}
        placeholder={`${filterText[lang].searchTitle}...`}
      />
    </FilterDiv>
  );
}
