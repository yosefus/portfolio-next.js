import React from 'react';
import { IconGrpoup, Footer, Header, Logo, PowerButton, SocialIcons } from '../components';

export default function Layout({ children, ThemeState }) {
  return (
    <div>
      {/* <Header ThemeState={ThemeState} /> */}
      <PowerButton />
      <Logo />
      <SocialIcons />
      <IconGrpoup ThemeState={ThemeState} />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
