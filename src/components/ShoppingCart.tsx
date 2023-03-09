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
  const { cartDetails, removeItem, cartCount, formattedTotalPrice } =
    useShoppingCart();

  console.log(cartDetails);

  return (
    <ShoppingCartContainer>
      <div>
        <DialogTitle>Sacola de compras</DialogTitle>

        <ProductList>
          {cartDetails &&
            Object.values(cartDetails).map((product) => (
              <ProductContainer>
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
          {/* <ProductContainer>
            <ImageContainer>
              <Image src={shirtImg} width={94} height={94} alt='' />
            </ImageContainer>

            <ProductDetails>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button type='button'>Remover</button>
            </ProductDetails>
          </ProductContainer> */}
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

        <button>Finalizar compra</button>
      </footer>
    </ShoppingCartContainer>
  );
}
