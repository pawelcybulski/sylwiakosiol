import defaultColors from "../util/default-colors.json"
import darkColors from "../util/dark-theme-colors.json"
import { lightness } from "@theme-ui/color"
const theme = {
  colors: {
    ...defaultColors,
    text: "#222",
    background: "#fff",
    primary: "#5C2941",
    accent: "#5C2941",
    muted: "rgba(0, 0, 0, 0.7)",
    cardBg: "#fff",
    borderColor: "#540229",
    labelText: "#777",
    inputBorder: "#aaa",
    inputBackground: "#fff",
    socialIcons: lightness("siteColor", 0.4),
    socialIconsHover: lightness("siteColor", 0.3),
    buttonColor: "#fff",
    buttonHoverBg: lightness("siteColor", 0.4),
    buttonHoverColor: lightness("siteColor", 0.8),
    modes: {
      dark: {
        text: "#fff",
        background: "#222",
        primary: "#252525",
        accent: "#5C2941",
        muted: "rgba(255, 255, 255, 0.7)",
        cardBg: "#252525",
        borderColor: "#888",
        labelText: "#777",
        inputBorder: "#777",
        inputBackground: "#333",
        socialIcons: lightness("siteColor", 0.5),
        socialIconsHover: lightness("siteColor", 0.9),
        buttonColor: "#FFF",
        buttonHoverBg: lightness("siteColor", 0.3),
        buttonHoverColor: lightness("siteColor", 0.9),
        ...darkColors,
      },
    },
  },
  links: {
    postLink: {
      color: "muted",
      "&:hover": {
        color: "text",
      },
    },
  },
  variants: {
    button: {
      bg: "accent",
      color: "buttonColor",
      "&:hover": {
        bg: "buttonHoverBg",
        color: "buttonHoverColor",
      },
    },
    socialIcons: {
      a: {
        color: "socialIcons",
        ":hover": {
          color: "socialIconsHover",
        },
      },
    },
  },
}

export default theme
