'use client';
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
import Link from 'next/link';

const SignInForm = () => {
  const { theme } = useTheme();

  return (
    <Card css={{ maxWidth: '512px' }}>
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
            <Link href="/sign_up">
              <Text color="$primary">Create an account</Text>
            </Link>
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
            fullWidth
            required
            label="Password"
            placeholder="Enter your password"
          />
          <Spacer y={1} />
          <Button
            size="lg"
            shadow
            color="secondary"
            css={{
              width: '100%',
            }}
          >
            Continue
          </Button>
          <Spacer y={0.5} />
          <Text>Or continue with</Text>
          <Spacer y={0.5} />
          <Button
            size="lg"
            shadow
            css={{
              width: '100%',
            }}
          >
            Google
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default SignInForm;
