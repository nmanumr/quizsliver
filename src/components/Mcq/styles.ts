import {styled} from '@stitches/react';

export const Question = styled('li', {
  paddingTop: 50,
  paddingLeft: 20,
  marginLeft: 20,
  marginBottom: 8,

  '&:first-of-type': {
    paddingTop: 20,
  },
});

export const QuestionText = styled('p', {
  paddingTop: 8,
  fontSize: 16,
  paddingBottom: 20,
});

export const QuestionOption = styled('div', {
  padding: "5px 0 5px 50px",
  position: "relative",

  variants: {
    correct: {
      true: {
        '&::before': {
          content: ' ',
          position: "absolute",
          left: 3,
          top: 8,
          height: 9,
          width: 17,
          opacity: .7,
          borderStyle: "solid",
          borderWidth: "0 0 2px 2px",
          borderColor: "green",
          transform: "rotate(-45deg)",
        }
      }
    },
    disabled: {
      true: {
        '&::before': {
          content: ' ',
          position: "absolute",
          left: 0,
          height: 20,
          width: 20,
          border: "2px solid rgba(0, 0, 0, 0.54)",
          borderRadius: '50%',
        }
      }
    },
    selected: {
      true: {
        '&::before': {
          content: ' ',
          position: "absolute",
          left: 0,
          top: 15,
          width: 20,
          border: '1px solid red',
          opacity: 0.7,
          transform: 'rotate(-45deg)',
        },
        '&::after': {
          content: ' ',
          position: "absolute",
          left: 0,
          top: 15,
          width: 20,
          border: '1px solid red',
          opacity: 0.7,
          transform: 'rotate(45deg)',
        }
      }
    }
  }
});
