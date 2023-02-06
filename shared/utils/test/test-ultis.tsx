import { NextUIProvider } from '@nextui-org/react';
import { darkTheme, lightTheme } from '@shared/theme/globalTheme';
import { RenderOptions, queries, render, within } from '@testing-library/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React, { ReactElement } from 'react';

import * as customQueries from './custom-queries';

const allQueries = {
  ...queries,
  ...customQueries,
};

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  return (
    <NextThemesProvider
      defaultTheme="light"
      attribute="class"
      enableSystem={false}
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  );
};

const customScreen = within(document.body, allQueries);
const customWithin = (element: any) => within(element, allQueries);
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, queries: allQueries, ...options });

export * from '@testing-library/react';
export {
  customScreen as screen,
  customWithin as within,
  customRender as render,
};
