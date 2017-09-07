export const size = (base, unit = "rem") => (modify = b => b) =>
  `${modify(base)}${unit}`;
