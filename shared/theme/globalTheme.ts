import { createTheme } from '@nextui-org/react';
import { getDefaultTheme } from './defaultTheme';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    ...getDefaultTheme('all'),
    colors: {
      ...(getDefaultTheme('colors') as any),
      background: '#FCFCFC',
    },
  },
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    ...getDefaultTheme('all'),
    colors: {
      ...(getDefaultTheme('colors') as any),
      background: '#1F2128',
    },
  },
});

export { lightTheme, darkTheme };
