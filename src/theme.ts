export enum Color {
  Primary = "primary",
  Secondary = "secondary",

  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",

  Dark = "dark",
  Light = "light",
  Muted = "muted",
  Text = "text",
  Link = "link",
  Active = "active",
  White = "white",

  None = "none"
}

export enum Size {
  None = "none",
  XSmall = "xsmall",
  Small = "small",
  Medium = "medium",
  Large = "large",
  XLarge = "xlarge"
}

export enum FontSize {
  Base = "base",
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6"
}

export interface Theme {
  focusRingWidth: string;
  borderRadiusBase: string;
  media: string[];
  fontFamilies: {
    base: string;
    headings: string;
    monospace: string;
  };
  colors: { [k in Color]: string };
  sizes: { [k in Size]: string };
  fontSizes: {
    [k in FontSize]: {
      fontSize: string;
      lineHeight: string;
    }
  };
}

const systemFonts = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica",
  "Arial",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol"
].join(", ");

const monospaceFonts = [
  "Consolas",
  "Andale Mono WT",
  "Andale Mono",
  "Lucida Console",
  "Lucida Sans Typewriter",
  "DejaVu Sans Mono",
  "Bitstream Vera Sans Mono",
  "Liberation Mono",
  "Nimbus Mono L",
  "Monaco",
  "Courier New",
  "Courier",
  "monospace"
].join(", ");

const theme: Theme = {
  focusRingWidth: "3px",
  borderRadiusBase: "3px",
  media: ["576px", "768px", "992px", "1200px"],
  fontFamilies: {
    base: systemFonts,
    headings: systemFonts,
    monospace: monospaceFonts
  },
  colors: {
    [Color.Primary]: "#4834d4",
    [Color.Secondary]: "#22a6b3",

    [Color.Success]: "#6ab04c",
    [Color.Danger]: "#eb4d4b",
    [Color.Warning]: "#f0932b",
    [Color.Info]: "#7ed6df",

    [Color.Dark]: "#16161d",
    [Color.Light]: "#dff9fb",
    [Color.Muted]: "#535c68",
    [Color.Text]: "#222222",
    [Color.Link]: "#686de0",
    [Color.Active]: "#c7ecee",
    [Color.White]: "#ffffff",

    [Color.None]: "transparent"
  },

  sizes: {
    [Size.None]: "none",
    [Size.XSmall]: "xsmall",
    [Size.Small]: "small",
    [Size.Medium]: "medium",
    [Size.Large]: "large",
    [Size.XLarge]: "xlarge"
  },

  fontSizes: {
    [FontSize.Base]: { fontSize: "16px", lineHeight: "1.5" },
    [FontSize.H1]: { fontSize: "40px", lineHeight: "1.2" },
    [FontSize.H2]: { fontSize: "32px", lineHeight: "1.2" },
    [FontSize.H3]: { fontSize: "28px", lineHeight: "1.2" },
    [FontSize.H4]: { fontSize: "24px", lineHeight: "1.2" },
    [FontSize.H5]: { fontSize: "20px", lineHeight: "1.2" },
    [FontSize.H6]: { fontSize: "16px", lineHeight: "1.2" }
  }
};

export default theme;
