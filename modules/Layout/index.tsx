import React from 'react';
import styled from 'styled-components';
import { Col, useTheme } from '@nextui-org/react';

import VerticalNavigation from './VerticalNavigation';
import { useSession } from 'next-auth/react';
import HorizontalNavigation from './HorizontalNavigation';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
`;

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { status } = useSession();

  if (status !== 'authenticated') {
    return (
      <LayoutWrapper>
        <VerticalNavigation />
        <Col>
          <HorizontalNavigation />
          {children}
        </Col>
      </LayoutWrapper>
    );
  }

  return <>{children}</>;
};

export default Layout;
