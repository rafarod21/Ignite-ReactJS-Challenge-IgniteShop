import Image from 'next/image';
import type { AppProps } from 'next/app';
import { Handbag, X } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

import { globalStyles } from '../styles/global';

import logoImg from '../assets/logo.svg';
import {
  Container,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
  Header,
} from '../styles/pages/app';
import { ShoppingCart } from '../components/ShoppingCart';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt='' />

        <Dialog.Root>
          <DialogTrigger type='button'>
            {/* <button type='button'> */}
            <Handbag size={24} />
            {/* </button> */}
          </DialogTrigger>
          <Dialog.Portal>
            <DialogOverlay />
            <DialogContent>
              <DialogClose>
                <X
                  size={24}
                  weight='bold'
                  aria-label='Fechar Sacola de Compras'
                />
              </DialogClose>

              <ShoppingCart />
            </DialogContent>
          </Dialog.Portal>
        </Dialog.Root>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
