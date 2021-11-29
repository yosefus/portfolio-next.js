import React from 'react';
import { ControlIcons, Logo, PowerButton } from '../components';

export default function Layout({ children, ThemeState }) {
  return (
    <div>
      <PowerButton />
      <Logo />
      <ControlIcons ThemeState={ThemeState} />
      {children}
    </div>
  );
}
