import React from 'react';
import { useTheme } from '@nextui-org/react';
import { HorizontalNavigationWrapper } from './styled';

const HorizontalNavigation = () => {
  const { theme } = useTheme();
  return (
    <HorizontalNavigationWrapper
      style={{ boxShadow: `inset 0px -1px 0px ${theme?.colors.border}` }}
    ></HorizontalNavigationWrapper>
  );
};

export default HorizontalNavigation;
