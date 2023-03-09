import { useState } from 'react';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useShoppingCart } from 'use-shopping-cart';
import Stripe from 'stripe';

import { Header } from '../../components/Header';

import { stripe } from '../../lib/stripe';

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product';

export interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    formatPrice: string;
    price: number;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const { addItem, cartDetails, setItemQuantity } = useShoppingCart();

  async function handleBuyProduct() {
    setIsCreatingCheckoutSession(true);

    try {
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      alert('Falha ao redirecionar ao checkout!');

      setIsCreatingCheckoutSession(false);

      console.log(error);
    }
  }

  function setItemsToOne() {
    if (!cartDetails) return;

    const listProducts = Object.keys(cartDetails);
    listProducts.forEach((product) => setItemQuantity(product, 1));
  }

  function handleAddItemToShoppingCart() {
    if (cartDetails) {
      const listProducts = Object.keys(cartDetails);

      const productIsAlreadyInShoppingCart = listProducts.includes(product.id);

      if (productIsAlreadyInShoppingCart) {
        alert('Este produto já está na sacola.');
      } else {
        addItem({
          name: product.name,
          description: product.description,
          id: product.id,
          price: product.price,
          currency: 'BRL',
          image: product.imageUrl,
          defaultPriceId: product.defaultPriceId,
        });

        setItemsToOne();
        alert('Item adicionado à sacola!');
      }
    } else {
      addItem({
        name: product.name,
        description: product.description,
        id: product.id,
        price: product.price,
        currency: 'BRL',
        image: product.imageUrl,
      });

      // console.log('adicionou');
      alert('Item adicionado à sacola!');
    }
  }

  if (isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <Header />

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt='' />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.formatPrice}</span>

          <p>{product.description}</p>

          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleAddItemToShoppingCart}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_NOq9Td68PKmnSS' } }],
    fallback: true, // 'blocking' não irá mostrar nada em tela até ter os dados
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params) {
    return {
      props: {},
    };
  }
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;
  const finalPrice = price.unit_amount || 0;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        formatPrice: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(finalPrice / 100),
        price: finalPrice,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 2,
  };
};
