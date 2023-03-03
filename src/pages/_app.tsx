import Image from 'next/image';
import type { AppProps } from 'next/app';
import { Handbag } from 'phosphor-react';

import { globalStyles } from '../styles/global';

import logoImg from '../assets/logo.svg';
import { Container, Header } from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt='' />

        <button type='button'>
          <Handbag size={24} />
        </button>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
