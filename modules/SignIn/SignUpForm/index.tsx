import React from 'react';
import {
  Button,
  Card,
  Col,
  Input,
  Row,
  Spacer,
  Text,
  useTheme,
} from '@nextui-org/react';

const SignUpForm = () => {
  const { theme } = useTheme();

  return (
    <Card css={{ mw: '400px' }}>
      <Card.Body
        css={{
          padding: theme?.space[16],
          background: theme?.colors.background.value,
        }}
      >
        <Col>
          <Text size="$4xl" weight="semibold" color="$authText">
            Sign Up
          </Text>
          <Row>
            <Text css={{ marginRight: theme?.space[4] }}>Already a user?</Text>
            <Text color="$primary">Login now</Text>
          </Row>
          <Spacer y={1.5} />
          <Row>
            <Input
              fullWidth
              required
              clearable
              label="First name"
              placeholder="First name"
            />
            <Spacer x={0.5} />
            <Input
              fullWidth
              required
              clearable
              label="Last name"
              placeholder="Last name"
            />
          </Row>
          <Spacer y={1} />
          <Input
            fullWidth
            required
            clearable
            label="Emaill Address"
            placeholder="Enter your email"
          />
          <Spacer y={0.5} />
          <Input.Password
            fullWidth
            clearable
            required
            label="Password"
            placeholder="Enter your password"
          />
          <Spacer y={1} />
          <Button size="lg" shadow color='secondary' css={{ width: '100%' }}>
            Continue
          </Button>
          <Spacer y={1} />
          <Text css={{ marginRight: theme?.space[4] }}>Sign up by Open ID</Text>
          <Spacer y={1} />
          <Button size="lg" shadow css={{ width: '100%' }}>
            Google Account
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default SignUpForm;
