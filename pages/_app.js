import Layout from '../layout/Layout';
import '../styles/globals.css';
import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './../components/Themes/Themes';
export const LanguageContext = createContext();

function MyApp({ Component, pageProps }) {
  const LangState = useState('he'),
    [Language] = LangState;

  const ThemeState = useState(DarkTheme),
    [Theme] = ThemeState;

  return (
    <div className={Language === 'he' ? 'font-he' : 'font-en'} dir={Language === 'he' ? 'rtl' : 'ltr'}>
      <ThemeProvider theme={Theme}>
        <LanguageContext.Provider value={LangState}>
          <Layout ThemeState={ThemeState}>
            <Component {...pageProps} />
          </Layout>
        </LanguageContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
