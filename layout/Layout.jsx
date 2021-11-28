import React from 'react';
import { IconGrpoup, Logo, PowerButton, SocialIcons } from '../components';

export default function Layout({ children, ThemeState }) {
  return (
    <div>
      <PowerButton />
      <Logo />
      <SocialIcons />
      <IconGrpoup ThemeState={ThemeState} />
      {children}
    </div>
  );
}
