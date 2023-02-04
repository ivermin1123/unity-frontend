import { Container } from '@nextui-org/react';
import React from 'react';
import styled from 'styled-components';

const SignInWrapper = styled.div`
  background-image: url('/images/signInBg.png');
  min-height: 100vh;
  display: flex;
  background-position: center;
`;

const SignIn = () => {
  return (
    <SignInWrapper>
      <span>Hello !!</span>
    </SignInWrapper>
  );
};

export default SignIn;
