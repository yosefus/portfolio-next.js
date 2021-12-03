import Layout from '../layout/Layout';
import '../styles/globals.css';
import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './../components/Themes/Themes';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
export const LanguageContext = createContext();

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const LangState = useState('en'),
    [Language] = LangState;

  const ThemeState = useState(LightTheme),
    [Theme] = ThemeState;

  return (
    <div className={Language === 'he' ? 'font-he' : 'font-en'} dir={Language === 'he' ? 'rtl' : 'ltr'}>
      <ThemeProvider theme={Theme}>
        <AnimatePresence exitBeforeEnter>
          <LanguageContext.Provider value={LangState}>
            <Layout router={router} location={router.pathname} ThemeState={ThemeState}>
              <Component {...pageProps} />
            </Layout>
          </LanguageContext.Provider>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
