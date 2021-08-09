import {styled} from '@stitches/react';

const nativeFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';

export const McqsCard = styled('div', {
  float: 'left',
  margin: 16,
  padding: 16,
  overflowX: 'auto',
  fontSize: 16,
  width: 'calc(100% - 30px)',
  fontFamily: nativeFontFamily,

  '& ol': {
    padding: 0,
  },

  '& h1': {
    marginBottom: 40,
    fontWeight: 300,
    opacity: .8,
    textAlign: 'center'
  },

  '& p': {
    fontSize: 16,
  }
});
