import Image from 'next/image';
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
  return (
    <ShoppingCartContainer>
      <div>
        <DialogTitle>Sacola de compras</DialogTitle>

        <ProductList>
          <ProductContainer>
            <ImageContainer>
              <Image src={shirtImg} width={94} height={94} alt='' />
            </ImageContainer>

            <ProductDetails>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button type='button'>Remover</button>
            </ProductDetails>
          </ProductContainer>
          <ProductContainer>
            <ImageContainer>
              <Image src={shirtImg} width={94} height={94} alt='' />
            </ImageContainer>

            <ProductDetails>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button type='button'>Remover</button>
            </ProductDetails>
          </ProductContainer>
          <ProductContainer>
            <ImageContainer>
              <Image src={shirtImg} width={94} height={94} alt='' />
            </ImageContainer>

            <ProductDetails>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button type='button'>Remover</button>
            </ProductDetails>
          </ProductContainer>
        </ProductList>
      </div>

      <footer>
        <div>
          <span>Quantidade</span>
          <span>3 itens</span>
        </div>
        <div>
          <strong>Valor total</strong>
          <strong>R$ 270,00</strong>
        </div>

        <button>Finalizar compra</button>
      </footer>
    </ShoppingCartContainer>
  );
}
