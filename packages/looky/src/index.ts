import dlv from "dlv";

export type ResponsiveProp<K extends string> = {
  [p in K]?: string | Array<string | null>
};
export interface Themed {
  theme: {
    media: string[];
  };
}

type Props<K extends string> = ResponsiveProp<K> & Themed;

type Interpolator = (value: any) => string;

// Type refining functions
const propAsThemed = (props: Themed): Themed => props;
const propAsResponsive = <K extends string>(
  props: Props<K>
): ResponsiveProp<K> => props;

const lookit = (getMedia: (props: Themed) => string[]) => {
  const resolve = <K extends string>(
    propName: K,
    interpolate: Interpolator
  ) => {
    return (props: Props<K>): string => {
      const value = propAsResponsive(props)[propName];
      const media = getMedia(propAsThemed(props));
      const keys = Array.isArray(value) ? value : [value];
      return keys
        .map((k, i) => {
          if (!k) {
            return "";
          }
          const themeValue = dlv(props.theme, k);
          if (!themeValue) {
            return "";
          }
          const rules = interpolate(themeValue);
          if (i === 0) {
            return rules;
          }
          const breakpoint = media[i - 1];
          if (!breakpoint) {
            return "";
          }
          return `@media (min-width: ${breakpoint}) { ${rules} }`;
        })
        .join("\n");
    };
  };

  return resolve;
};

export default lookit;
