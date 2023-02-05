import { Col, Container, Row, Card, Grid, Link } from '@nextui-org/react';
import React from 'react';
import styled from 'styled-components';
import { Image, Text, useTheme } from '@nextui-org/react';
import SignUpForm from '@/modules/SignIn/SignUpForm';

const SignUpWrapper = styled.div`
  background-image: url('/images/sign_in_bg.png');
  min-height: 100vh;
  display: flex;
  background-position: center;
`;

const SignIn = () => {
  const { theme } = useTheme();
  return (
    <SignUpWrapper>
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
          </Col>
          <Col span={6}>
            {/* <SignUpForm /> */}
            <Card css={{ p: "$6", mw: "400px" }}>
              <Card.Header>
                <img
                  alt="nextui logo"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width="34px"
                  height="34px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                      Next UI
                    </Text>
                  </Grid>
                  <Grid xs={12}>
                    <Text css={{ color: "$accents8" }}>nextui.org</Text>
                  </Grid>
                </Grid.Container>
              </Card.Header>
              <Card.Body css={{ py: "$2" }}>
                <Text>
                  Make beautiful websites regardless of your design experience.
                </Text>
              </Card.Body>
              <Card.Footer>
                <Link
                  color="primary"
                  target="_blank"
                  href="https://github.com/nextui-org/nextui"
                >
                  Visit source code on GitHub.
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </SignUpWrapper>
  );
};

export default SignIn;
