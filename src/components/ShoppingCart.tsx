import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useShoppingCart } from 'use-shopping-cart';

import {
  DialogTitle,
  ShoppingCartContainer,
  ProductList,
  ProductContainer,
  ImageContainer,
  ProductDetails,
} from '../styles/components/ShoppingCart';

import shirtImg from '../assets/Shirt.png';

export function ShoppingCart() {
  const { cartDetails, removeItem, cartCount, formattedTotalPrice, clearCart } =
    useShoppingCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleBuyProducts() {
    setIsCreatingCheckoutSession(true);

    if (!cartDetails) return;

    const products = Object.values(cartDetails);
    const lineItems = products.map((product) => {
      return {
        price: product.defaultPriceId,
        quantity: 1,
      };
    });

    try {
      const response = await axios.post('/api/checkout', {
        lineItems,
      });

      const { checkoutUrl } = response.data;
      clearCart();

      window.location.href = checkoutUrl;
    } catch (error) {
      alert('Falha ao redirecionar ao checkout!');

      setIsCreatingCheckoutSession(false);

      console.log(error);
    }
  }

  return (
    <ShoppingCartContainer>
      <div>
        <DialogTitle>Sacola de compras</DialogTitle>

        <ProductList>
          {cartDetails &&
            Object.values(cartDetails).map((product) => (
              <ProductContainer key={product.id}>
                <ImageContainer>
                  <Image
                    src={product.image || ''}
                    width={94}
                    height={94}
                    alt=''
                  />
                </ImageContainer>

                <ProductDetails>
                  <span>{product.name}</span>
                  <strong>{product.formattedPrice}</strong>
                  <button type='button' onClick={() => removeItem(product.id)}>
                    Remover
                  </button>
                </ProductDetails>
              </ProductContainer>
            ))}
        </ProductList>
      </div>

      <footer>
        <div>
          <span>Quantidade</span>
          <span>{cartCount} itens</span>
        </div>
        <div>
          <strong>Valor total</strong>
          <strong>{formattedTotalPrice}</strong>
        </div>

        <button
          type='button'
          disabled={isCreatingCheckoutSession}
          onClick={handleBuyProducts}
        >
          Finalizar compra
        </button>
      </footer>
    </ShoppingCartContainer>
  );
}
