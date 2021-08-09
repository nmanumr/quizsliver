import {styled, keyframes} from '@stitches/react';

export const Loader = styled('div', {
  border: "1px solid",
  height: 32,
  borderRadius: 18,
  position: "absolute",
  top: 73,
  right: 15,
  display: "flex",
  alignItems: 'center',
  overflow: "hidden",
  padding: "6px 12px",
  cursor: "pointer",

  "&:hover .message": {
    opacity: 1,
    maxWidth: 600,
    marginLeft: 10,
    transition: "opacity 100ms ease-out 400ms, max-width 500ms ease-out 50ms, margin 100ms linear 0ms",
  },

  "& .message": {
    display: "inline-block",
    opacity: 0,
    marginLeft: 0,
    maxWidth: 0,
    transition: "opacity 100ms ease-out 0ms, max-width 450ms ease-out 0ms, margin 100ms linear 0ms",
  },

  "& .icon": {
    display: "inline-block",
    position: "relative",
    padding: "1px 6px",
    width: 16,
    height: 16,
  },

  variants: {
    state: {
      success: {
        color: "#155724",
        borderColor: "#c3e6cb",
        backgroundColor: "#d4edda",
      },
      error: {
        color: "#721c24",
        borderColor: "#f5c6cb",
        backgroundColor: "#f8d7da",
      },
      loading: {
        color: "#0c5460",
        borderColor: "#c3e6cb",
        backgroundColor: "#d4edda",
      }
    },
    expanded: {
      true: {
        "& .message": {
          opacity: 1,
          maxWidth: 600,
          marginLeft: 10,
        }
      }
    }
  },
});
