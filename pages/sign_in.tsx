import { Col, Container, Row } from '@nextui-org/react';
import React from 'react';
import styled from 'styled-components';
import { Image, Text, useTheme } from '@nextui-org/react';

import Switcher from '@/modules/SignIn/Switcher';
import SignInForm from '@/modules/SignIn/SignInForm';

const SignInWrapper = styled.div`
  background-image: url('/images/sign_in_bg.png');
  min-height: 100vh;
  display: flex;
  background-position: center;
`;

const SignIn = () => {
  const { theme } = useTheme();
  return (
    <SignInWrapper>
      <Container>
        <Row
          css={{
            marginTop: theme?.space['4xl'],
            gap: theme?.space[52],
          }}
        >
          <Col span={6}>
            <Image
              width={281}
              src="/images/logo_gaming_light.png"
              alt="logo"
              objectFit="contain"
              css={{
                margin: 0,
              }}
            />
            <Text
              color="$white"
              weight="semibold"
              css={{ margin: `${theme?.space[8]} 0` }}
            >
              A Video Gaming Platform UI Kit
            </Text>
            <Switcher />
          </Col>
          <Col span={6}>
            <SignInForm />
          </Col>
        </Row>
      </Container>
    </SignInWrapper>
  );
};

export default SignIn;
