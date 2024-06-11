import colorsConfig from "./tokens/colors";
import minMaxWidthConfig from "./tokens/min-max-width";
import minMaxHeightConfig from "./tokens/min-max-height";
import spacing from "./tokens/spacing";
import fontFamily from "./tokens/font-families";
import fontSize from "./tokens/font-size";
import flex from "./tokens/flex";
import letterSpacing from "./tokens/letter-spacing";
import lineHeight from "./tokens/line-height";
import breakpoints from "./tokens/breakpoints";
import scale from "./tokens/scale";
import animationAndKeyframes from "./tokens/animation";
import border from "./tokens/border";
import inset from "./tokens/inset";

export const content = [
  "./src/**/*.{js,ts,html,svelte}",
];
export const media = false;
export const theme = {
  extend: {
    ...minMaxWidthConfig,
    ...minMaxHeightConfig,
    ...flex,
    ...animationAndKeyframes,
    ...border,
    spacing,
    scale,
    colors: colorsConfig,
    fontFamily,
    fontSize,
    letterSpacing,
    lineHeight,
    inset,
    zIndex: {
      99: "99",
    },
    transformOrigin: {
      100: "100% 100%",
    },
    skew: {
      60: "60deg",
    },
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      ...colorsConfig,
    }),
    boxShadow: {
      range: "-405px 0 0 400px #017AFF",
      shadowOuter: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      userSelectionBox:
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      recommendBox: "0px 12px 24px rgba(0, 0, 0, 0.12)",
      one: "0px 1px 6px rgba(0, 0, 0, 0.08)",
      bannerCard: "0px 1px 6px 0px rgba(0, 0, 0, 0.08)",
    },
    dropShadow: {
      card: "0px 1px 6px 0px rgba(0, 0, 0, 0.8)",
      footer:
        "0px 1px 8px 0px rgba(0, 0, 0, 0.1), 0px 2px 4px 0px rgba(0, 0, 0, 0.12), 0px 1px 2px 0px rgba(0, 0, 0, 0.16)",
      textMultiple: "-3px -2px 0px rgba(74, 167, 252, 1)",
    },
  },
  screens: breakpoints,
};
export const plugins = [];
