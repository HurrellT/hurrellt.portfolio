import { GeistProvider, CssBaseline } from "@geist-ui/react";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { PrefersContext, themes } from '../lib/use-prefers';

const Portfolio = ({ Component, pageProps }) => {
  const [themeType, setThemeType] = useState('dark');

  useEffect(() => {
    document.documentElement.removeAttribute('style');
    document.body.removeAttribute('style');

    const theme = window.localStorage.getItem('theme');
    if (themes.includes(theme)) setThemeType(theme);
  }, []);

  const switchTheme = useCallback((theme) => {
    setThemeType(theme);
    if (typeof window !== 'undefined' && window.localStorage) window.localStorage.setItem('theme', theme);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>Tomás Hurrell Portfolio</title>
        <meta name="og:title" content="React Dashboard Design" />
        <meta
          name="og:description"
          content="Inspired by and based on the Vercel™ Design System."
        />
        <meta
          name="description"
          content="Inspired by and based on the Vercel™ Design System."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <PrefersContext.Provider value={{ themeType, switchTheme }}>
          <NavBar />
          <Component {...pageProps} />
          {/* <Footer /> */}
        </PrefersContext.Provider>
      </GeistProvider>
    </>
  );
}

export default Portfolio;
