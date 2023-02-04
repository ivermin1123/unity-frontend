import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { lightTheme, darkTheme } from '@/shared/theme/globalTheme';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="light"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
