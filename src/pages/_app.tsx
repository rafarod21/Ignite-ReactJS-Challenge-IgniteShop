import type { AppProps } from 'next/app';
import { CartProvider } from 'use-shopping-cart';

import { globalStyles } from '../styles/global';

import { Container } from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  return (
    <CartProvider
      shouldPersist={true}
      cartMode='client-only'
      mode='payment'
      stripe={`${process.env.STRIPE_PUBLIC_KEY}`}
      successUrl={successUrl}
      cancelUrl={cancelUrl}
      currency='BRL'
    >
      <Container>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
