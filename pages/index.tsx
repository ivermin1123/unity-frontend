import Head from 'next/head';
import { Inter } from '@next/font/google';
import { useSession } from 'next-auth/react';
import App from './_app';
import SignIn from './sign_in';

const inter = Inter({ subsets: ['vietnamese'] });

const LANDING_PAGE_TITLE = 'Landing Page';
const SIGN_IN_PAGE_TITLE = 'Sign In';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <>
        <Head>
          <title>{LANDING_PAGE_TITLE}</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{SIGN_IN_PAGE_TITLE}</title>
      </Head>
      <SignIn />
    </>
  );
}
