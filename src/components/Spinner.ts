import {keyframes, styled} from "@stitches/react";

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export default styled('div', {
  border: "2px solid transparent",
  borderTopColor: "currentColor",
  borderRadius: "50%",
  display: "inline-block",
  width: 18,
  height: 18,
  animation: `${spin} 1s linear infinite`,
});
