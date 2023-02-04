import { createTheme } from '@nextui-org/react';
import { getDefaultTheme } from './defaultTheme';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    ...getDefaultTheme('all'),
    colors: {
      ...(getDefaultTheme('colors') as any),
      background: '#FCFCFC',
      authText: '#11142D',
    },
  },
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    ...getDefaultTheme('all'),
    colors: {
      ...(getDefaultTheme('colors') as any),
      background: '#242731',
      authText: '#FFFFFF',
    },
  },
});

export { lightTheme, darkTheme };
