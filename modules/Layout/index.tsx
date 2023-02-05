import React from 'react';
import { Col, Row, useTheme } from '@nextui-org/react';

import VerticalNavigation from './VerticalNavigation';
import { useSession } from 'next-auth/react';
import HorizontalNavigation from './HorizontalNavigation';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { status } = useSession();

  if (status !== 'authenticated') {
    return (
      <Row
        css={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
        }}
      >
        <VerticalNavigation />
        <Col>
          <HorizontalNavigation />
          {children}
        </Col>
      </Row>
    );
  }

  return <>{children}</>;
};

export default Layout;
