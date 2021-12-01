import React from 'react';
import styled, { useTheme } from 'styled-components';
import Particles from 'react-tsparticles';
import { DarkTheme, LightTheme } from '../components/Themes/Themes';

import configDark from '../config/particlesjs-config-dark.json';
import configLight from '../config/particlesjs-config-light.json';

import configAboutDark from '../config/particlesjs-config-dark-big.json';
import configAboutLight from '../config/particlesjs-config-light-big.json';

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const Particle = ({ about }) => {
  const theme = useTheme();

  return (
    <Box>
      <Particles
        style={{ position: 'absolute', top: 0 }}
        params={
          about
            ? theme == DarkTheme
              ? configDark
              : configLight
            : theme == DarkTheme
            ? configAboutDark
            : configAboutLight
        }
      />
    </Box>
  );
};

export default Particle;
