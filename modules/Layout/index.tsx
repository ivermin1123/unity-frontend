import { Col, Row } from '@nextui-org/react';
import React from 'react';

import { useSession } from 'next-auth/react';
import HorizontalNavigation from './HorizontalNavigation';
import VerticalNavigation from './VerticalNavigation';

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
