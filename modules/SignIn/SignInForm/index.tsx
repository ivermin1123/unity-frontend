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

const SignInForm = () => {
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
            Sign in
          </Text>
          <Row>
            <Text css={{ marginRight: theme?.space[4] }}>New user?</Text>
            <Text color="$primary">Create an account</Text>
          </Row>
          <Spacer y={1.5} />
          <Input
            fullWidth
            required
            clearable
            label="Username or Email"
            placeholder="Enter your username or email"
          />
          <Spacer y={0.5} />
          <Input.Password
            clearable
            required
            label="Password"
            placeholder="Enter your password"
          />
          <Spacer y={1} />
          <Button size="lg" shadow>
            Continue
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default SignInForm;
