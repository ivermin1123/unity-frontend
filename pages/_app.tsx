import Layout from '@modules/Layout';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme, lightTheme } from '@shared/theme/globalTheme';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <NextThemesProvider
        defaultTheme="light"
        attribute="class"
        enableSystem={false}
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </NextThemesProvider>
    </SessionProvider>
  );
}
