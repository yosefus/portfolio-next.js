import React from 'react';
import { ControlIcons, Logo, PowerButton, SoundBar } from '../components';

export default function Layout({ children, ThemeState }) {
  return (
    <div>
      <PowerButton />
      {/* <SoundBar /> */}
      {/* <Logo /> */}
      <ControlIcons ThemeState={ThemeState} />
      {children}
    </div>
  );
}
