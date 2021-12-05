import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { LanguageContext } from '../_app';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { WorkInProgress } from '../../components';

// export const getStaticPaths = () => {
//   const paths = projects.map((p) => {
//     return { params: { name: p.name.toString() } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = (context) => {
//   return {
//     props: { name: context.params.name },
//   };
// };

export default function project() {
  const [Language] = useContext(LanguageContext);

  const router = useRouter();
  const { name } = router.query;

  // let current = projectsObj[name];

  return (
    <>
      <WorkInProgress />
    </>
  );
}
