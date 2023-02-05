'use client';
import { Col, Container, Row } from '@nextui-org/react';
import React from 'react';
import styled from 'styled-components';
import { Image, Text, useTheme } from '@nextui-org/react';

import Switcher from '@/modules/Switcher';
import SignInForm from '@/modules/SignIn/SignInForm';
import Head from 'next/head';

const SignInWrapper = styled.div`
  background-image: url('/images/sign_in_bg.png');
  min-height: 100vh;
  display: flex;
  background-position: center;
`;

const SIGN_IN_PAGE_TITLE = 'Sign In';

const SignIn = () => {
  const { theme } = useTheme();
  return (
    <>
      <Head>
        <title>{SIGN_IN_PAGE_TITLE}</title>
      </Head>
      <SignInWrapper>
        <Container>
          <Row
            css={{
              margin: 'auto',
              marginTop: theme?.space['4xl'],
              gap: theme?.space[52],
              maxWidth: '960px',
            }}
          >
            <Col span={6}>
              <Image
                width={281}
                src="/images/logo_gaming.png"
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
              <Switcher
                style={{
                  justifyContent: 'flex-start',
                }}
              />
            </Col>
            <Col span={6}>
              <SignInForm />
            </Col>
          </Row>
        </Container>
      </SignInWrapper>
    </>
  );
};

export default SignIn;
