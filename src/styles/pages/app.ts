import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '0 10rem',
});

export const Header = styled('header', {
  padding: '3rem 0',
  width: '100%',
  maxWidth: 1280,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  // button: {
  //   padding: '0.75rem',
  //   border: '1px solid transparent',
  //   borderRadius: 6,
  //   backgroundColor: '$gray800',
  //   color: '$gray300',

  //   cursor: 'pointer',

  //   transition: 'all 0.2s',

  //   '&:hover': {
  //     borderColor: '$gray300',
  //   },
  // },
});

export const DialogTrigger = styled(Dialog.Trigger, {
  padding: '0.75rem',
  border: '1px solid transparent',
  borderRadius: 6,
  backgroundColor: '$gray800',
  color: '$gray300',

  cursor: 'pointer',

  transition: 'all 0.2s',

  '&:hover': {
    borderColor: '$gray500',
  },
});

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
});

export const DialogContent = styled(Dialog.Content, {
  position: 'absolute',
  top: 0,
  right: 0,

  backgroundColor: '$gray800',
  height: '100%',
  width: '30rem',
  maxWidth: '30rem',
  padding: '2.5rem',

  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
});

export const DialogClose = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',

  backgroundColor: 'transparent',
  color: '$gray500',
  border: 0,

  cursor: 'pointer',

  transition: 'all 0.2s',

  '&:hover': {
    color: '$gray300',
  },
});

export const DialogTitle = styled(Dialog.Title, {
  fontSize: '1.875rem',
  lineHeight: '2.25rem',
  fontWeight: '800',
});
