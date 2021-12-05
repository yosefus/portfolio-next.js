import React from 'react';
import styled from 'styled-components';

import { motion } from 'framer-motion';
import { WorkInProgress } from '../components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.body};
`;

export default function Photography() {
  return <WorkInProgress />;
}
