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

  button: {
    padding: '0.75rem',
    border: '1px solid transparent',
    borderRadius: 6,
    backgroundColor: '$gray800',
    color: '$gray300',

    cursor: 'pointer',

    transition: 'all 0.2s',

    '&:hover': {
      borderColor: '$gray300',
    },
  },
});
