// Press feedback for buttons and button-like links: shrinks slightly while held, so taps feel
// physical. Colour changes ride the same transition.
// (scale 0.97 · 160ms · strong ease-out — see --ease-out in index.css)
export const pressable =
  "transition-[color,background-color,border-color,scale] duration-160 ease-out active:scale-97";
