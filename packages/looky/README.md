# @ceramic-ui/looky

`Looky` is a utility that lets you resolve props into values from your theme responsively. It is intended for use in CSS-in-JS libraries like [styled-components][s-c] and [emotion][emotion].

## Install

```
npm install @ceramic-ui/looky
```

## Use

Here's a simple example of creating a `Container` component with responsive gutters and spacing.

```js
import styled, { ThemeProvider } from "styled-components";
import Looky from "@ceramic-ui/looky";

/*
First let's define a theme with spacing DNA among other attributes and a `media` property listing our breakpoints
*/
const theme = {
  spacings: {
    none: "0px",
    xsmall: "4px",
    small: "8px",
    default: "16px",
    large: "24px",
    xlarge: "32px"
  },
  colors: {
    primary: "#4834d4",
    secondary: "#535c68"
  },
  media: [
    "576px", // mobile landscape
    "768px", // tablet portrait
    "992px", // tablet landscape and small screen laptops
    "1200px" // larger laptops and desktops
  ]
};

/* We need to show Looky how to get the breakpoints */
const looky = Looky(props => props.theme.media);

/* Now we can create some resolvers for some style attributes */

/*
This resolver will look at the value of the gutterX prop and resolve it from
our theme calling the interpolation function (the second arguments) to generate
css for corresponding breakpoints
*/
const gutterX = looky(
  "gutterX",
  value => `
padding-left: ${value};
padding-right: ${value};
`
);

/* Same idea as the resolver for the gutterX prop */
const gutterY = looky(
  "gutterY",
  value => `
padding-left: ${value};
padding-right: ${value};
`
);

/* Same idea as the resolver for the gutterX prop */
const spacing = looky("spacing", value => `margin-bottom: ${value};`);

const Container = styled.div`
  box-sizing: border-box;
  ${gutterX};
  ${gutterY};
  ${spacing};
`;

/*
Imagine this is your top-level app component
*/
const App = () => {
  <ThemeProvider theme={theme}>
    <Container gutterX="spacings.small">
      This container will have horizontal gutters of 8px across all breakpoints
      since spacings.small resolves to 8px from our theme.
    </Container>

    <Container
      spacing={["spacings.small", "spacings.default", null, "spacings.large"]}
    >
      This container will have responsive spacing (margin-bottom). The first
      value is the default, mobile-first value. After that the spacing
      corresponds to:<br />
      1. From mobile and up, it will be small (8px)<br />
      2. For landscape mobiles and up, it will be default (16px)<br />
      3. For portrait tablets and up, we specified null meaning we carry on with
      the value from 2. (16px)<br />
      4. For landscape tablets and up, it will be large (24px)<br />
      5. Since we did not specify anything for the laptop/desktop breakpoint we carry
      on from 4. (24px)
    </Container>

    <Container
      gutterY="spacings.default"
      gutterX={["spacings.small", null, "spacings.default"]}
      spacing={["spacings.small", "spacings.default", null, "spacings.large"]}
    >
      Mix it up
    </Container>
  </ThemeProvider>;
};
```

In terms of generated CSS, consider the following snippet:

```js
<Container
  spacing={["spacings.small", "spacings.default", null, "spacings.large"]}
>
  Hi there
</Container>
```

In this case, Container's styles will include:

```css
/*
The class name for Container won't actually be .container
styled-components will generate something like sc-bdVaJa. This is illustrative.
*/
.container {
  margin-bottom: 8px;
}

@media (min-width: 576px) {
  .container {
    margin-bottom: 16px;
  }
}

@media (min-width: 992px) {
  .container {
    margin-bottom: 24px;
  }
}
```

## Looky vs facepaint

This utility serves the same purpose as [facepaint][facepaint] but the difference is that it does not allow styling props to take arbitrary values.

The main reason is that we want all styling values to come from your theme. This introduces consistency across your components since styling values come from a single source of truth (your theme). Furthermore, since arbitrary values are not allowed, we can introduce a level of protection against [script injection scenarios in CSS-in-JS][injection].

[facepaint]: https://github.com/emotion-js/facepaint
[s-c]: https://www.styled-components.com/
[emotion]: https://emotion.sh/
[injection]: https://www.styled-components.com/docs/advanced#security
