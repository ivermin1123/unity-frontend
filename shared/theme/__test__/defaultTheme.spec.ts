import { getDefaultTheme, defaultTheme } from '../defaultTheme';
import { DefaultThemeType } from '../types';

describe('defaultTheme', () => {
  it('should return the correct theme', () => {
    const theme = getDefaultTheme('all');
    expect(theme).toEqual(defaultTheme);
  });

  it.each`
    type
    ${'colors'}
    ${'fonts'}
    ${'fontSizes'}
    ${'fontWeights'}
    ${'lineHeights'}
    ${'letterSpacings'}
    ${'radii'}
    ${'borderWeights'}
    ${'spacing'}
    ${'breakpoints'}
    ${'zIndices'}
    ${'all'}
  `(
    'should return the correct theme with type = $type',
    ({ type }: { type: DefaultThemeType }) => {
      const result = getDefaultTheme(type);
      if (type === 'all') {
        expect(result).toEqual(defaultTheme);
      } else {
        expect(result).toEqual(defaultTheme[type]);
      }
    }
  );
});
