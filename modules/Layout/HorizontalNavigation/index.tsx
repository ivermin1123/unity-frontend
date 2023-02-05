import React from 'react';
import { Row, useTheme } from '@nextui-org/react';

const HorizontalNavigation = () => {
  const { theme } = useTheme();
  return (
    <Row
      css={{
        boxShadow: `inset 0px -1px 0px ${theme?.colors.border}`,
        minHeight: '112px',
      }}
    ></Row>
  );
};

export default HorizontalNavigation;
