import { stripe } from '../lib/stripe';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Stripe from 'stripe';
import Head from 'next/head';
import Image from 'next/image';

import logoImg from '../assets/logo.svg';

import { ImageContainer, SuccessContainer } from '../styles/pages/success';

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name='robots' content='noindex' />
      </Head>
      <SuccessContainer>
        <Image src={logoImg} alt='' />

        <div>
          {products.map((product, index) => (
            <ImageContainer key={`${product.name}-${index}`}>
              <Image src={product.imageUrl} width={120} height={110} alt='' />
            </ImageContainer>
          ))}
        </div>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          <strong>{products.length}</strong> camisetas já está a caminho da sua
          casa.
        </p>

        <Link href='/'>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  if (!session) {
    return {
      props: {},
    };
  }

  const customerName = session.customer_details
    ? session.customer_details.name
    : '';
  const products = session.line_items
    ? session.line_items.data.map((item) => {
        return item.price?.product as Stripe.Product;
      })
    : [
        {
          name: '',
          images: [''],
        },
      ];

  return {
    props: {
      customerName,
      products: products.map((product) => {
        return {
          name: product.name,
          imageUrl: product.images[0],
        };
      }),
    },
  };
};
