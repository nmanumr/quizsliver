import {styled} from '@stitches/react';

const nativeFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';

export const ModalContainer = styled('div', {
  fontFamily: nativeFontFamily,

  variants: {
    opened: {
      true: {
        background: 'rgba(0, 0, 0, .6)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      false: {
        display: 'none',
      }
    }
  },
});

export const Modal = styled('div', {
  maxWidth: 420,
  borderRadius: 6,
  background: '#fff',
  padding: '16px 16px 0',

  '& > div': {
    padding: 16,
  },

  '& .h1': {
    fontWeight: 500,
    fontSize: 16,
    marginBottom: 10,
  },
});

export const ModalFooter = styled('div', {
  borderTop: '1px solid #d1d1d1',
  display: 'flex',
  justifyContent: 'space-between',

  '& > div:first-child': {
    opacity: .7,
  }
});

export const Button = styled('a', {
  display: 'inline-block',
  textTransform: 'uppercase',
  padding: '5px 10px',
  cursor: 'pointer',

  '&:hover': {
    opacity: 1,
    background: 'rgba(66, 139, 202, 0.2)',
    borderRadius: 3,
  }
});


export const Link = styled('a', {
  color: 'inherit',
  opacity: .6,
  display: 'inline-block',
  padding: '6px 13px',
  fontSize: '90%',
  cursor: 'pointer',

  '&:hover': {
    color: 'inherit',
    textDecoration: 'underline',
  }
});
