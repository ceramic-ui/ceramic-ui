// examples: https://codesandbox.io/s/y270nr9851

const expandHex = hex3 =>
  hex3
    .split("")
    .map(c => `${c}${c}`)
    .join("");

export const hexToRGB = hex => {
  const trimmed = hex.substring(hex.charAt(0) === "#" ? 1 : 0);
  const cleaned = trimmed.length === 3 ? expandHex(trimmed) : trimmed;
  const num = parseInt(cleaned, 16);
  return {
    r: num >> 16,
    g: (num >> 8) & 0x00ff,
    b: num & 0x0000ff
  };
};

const pad = s => (s.length === 1 ? `0${s}` : s);
export const rgbToHex = ({ r, g, b }) => {
  const hr = pad(r.toString(16));
  const hg = pad(g.toString(16));
  const hb = pad(b.toString(16));
  return `#${hr}${hg}${hb}`;
};

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const darkenLighten = (hex, percent) => {
  const input = hexToRGB(hex);
  const amount = Math.floor(255 * percent / 100);
  return rgbToHex({
    r: clamp(input.r + amount, 0, 255),
    g: clamp(input.g + amount, 0, 255),
    b: clamp(input.b + amount, 0, 255)
  });
};

export const darken = (hex, amount) => darkenLighten(hex, -1 * amount);
export const lighten = darkenLighten;

/**
 * Given `props` and a key to look for in props, attempt to resolve the value of
 * a colour defined in themes. So for example:
 * `resolveColor(props, 'background')` will get the value `props.background`
 * which will be a brand color short name such as "primary" and then returns
 * `props.theme.brandPrimary`
 *
 * @param {object} props
 * @param {string} propKey
 *
 * @returns {string}
 */
export const resolveColor = (props, propKey) => {
  const value = props[propKey];
  const themeProp = `brand${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  return props.theme[themeProp] || "";
};
