import looky from ".";

const interpolate = (v: any) => `margin-bottom: ${v};`;

interface TestCase {
  title: string;
  expected: string;
  interpolate: (v: any) => string;
  props: {
    spacing?: string | Array<string | null>;
    theme: {
      media: string[];
      spacings?: { [k: string]: string };
    };
  };
}

const testCases: TestCase[] = [
  {
    title: "resolves single value",
    expected: "margin-bottom: 32px;",
    interpolate,
    props: {
      spacing: "spacings.large",
      theme: {
        media: ["576px", "768px", "992px", "1200px"],
        spacings: { large: "32px" }
      }
    }
  },
  {
    title: "resolves responsive value",
    expected: [
      "margin-bottom: 8px;",
      "@media (min-width: 576px) { margin-bottom: 16px; }",
      "",
      "@media (min-width: 992px) { margin-bottom: 32px; }"
    ].join("\n"),
    interpolate,
    props: {
      spacing: ["spacings.small", "spacings.default", null, "spacings.large"],
      theme: {
        media: ["576px", "768px", "992px", "1200px"],
        spacings: { small: "8px", default: "16px", large: "32px" }
      }
    }
  },
  {
    title: "resolves missing value",
    expected: "",
    interpolate,
    props: {
      spacing: "unknown",
      theme: {
        media: ["576px", "768px", "992px", "1200px"],
        spacings: { small: "8px", default: "16px", large: "32px" }
      }
    }
  },
  {
    title: "resolves missing responsive values",
    expected: [
      "margin-bottom: 8px;",
      "",
      "",
      "@media (min-width: 992px) { margin-bottom: 32px; }"
    ].join("\n"),
    interpolate,
    props: {
      spacing: ["spacings.small", "spacings.unknown", null, "spacings.large"],
      theme: {
        media: ["576px", "768px", "992px", "1200px"],
        spacings: { small: "8px", default: "16px", large: "32px" }
      }
    }
  },
  {
    title: "ignores excess values",
    expected: [
      "margin-bottom: 4px;",
      "@media (min-width: 576px) { margin-bottom: 8px; }",
      "@media (min-width: 768px) { margin-bottom: 16px; }",
      "",
      ""
    ].join("\n"),
    interpolate,
    props: {
      spacing: [
        "spacings.tiny",
        "spacings.small",
        "spacings.default",
        "spacings.large",
        "spacings.large"
      ],
      theme: {
        media: ["576px", "768px"],
        spacings: { tiny: "4px", small: "8px", default: "16px", large: "32px" }
      }
    }
  }
];

testCases.forEach(({ title, expected, interpolate, props }) => {
  test(title, () => {
    const resolver = looky(props => props.theme.media);
    const resolveSpacing = resolver("spacing", interpolate);
    const out = resolveSpacing(props);
    expect(out).toBe(expected);
  });
});
