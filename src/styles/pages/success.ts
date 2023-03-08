import { styled } from '..';

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  height: 656,

  '> div': {
    marginTop: '8rem',
    display: 'flex',
  },

  h1: {
    marginTop: '5rem',
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$green500',
    textDecoration: 'none',

    '&:hover': {
      color: '$green300',
    },
  },
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 140,
  height: 130,
  // maxHeight: 140,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  borderRadius: 1000,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:not(:nth-child(1))': {
    marginLeft: '-2.5rem',
  },

  img: {
    objectFit: 'cover',
  },
});
