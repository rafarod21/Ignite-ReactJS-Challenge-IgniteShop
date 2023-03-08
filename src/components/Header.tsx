import Image from 'next/image';
import { Handbag, X } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../assets/logo.svg';

import { ShoppingCart } from './ShoppingCart';

import {
  HeaderContainer,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from '../styles/components/Header';

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg} alt='' />

      <Dialog.Root>
        <DialogTrigger type='button'>
          <Handbag size={24} />
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
    </HeaderContainer>
  );
}
