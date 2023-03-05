import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '..';

export const ShoppingCartContainer = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '3rem',

  footer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

    div: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: '$gray100',
    },

    button: {
      marginTop: '3rem',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: '1.25rem 2rem',

      borderRadius: 8,
      backgroundColor: '$green500',

      color: '$white',
      fontWeight: '700',
      fontSize: '$md',
      lineHeight: '160%',

      transition: 'background-color 0.2s',

      '&:hover': {
        backgroundColor: '$green300',
      },
    },
  },
});

export const DialogTitle = styled(Dialog.Title, {
  fontSize: '$lg',
  fontWeight: '700',
  marginTop: '1.5rem',
  marginBottom: '2rem',
});

export const ProductList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const ProductContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.25rem',

  height: '5.875rem',
  maxHeight: 94,
});

export const ImageContainer = styled('div', {
  // width: '100%',
  maxWidth: 102,
  maxHeight: 94,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
});

export const ProductDetails = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '0.5rem',

  lineHeight: '160%',

  span: {
    fontSize: '$md',
    color: '$gray300',
  },

  strong: {
    fontSize: '$md',
    color: '$gray100',
    marginTop: '-0.75rem',
  },

  button: {
    border: 0,
    background: 'transparent',

    fontSize: '1rem',
    fontWeight: '700',
    color: '$green500',

    cursor: 'pointer',

    transition: 'color 0.2s',

    '&:hover': {
      color: '$green300',
    },
  },
});
