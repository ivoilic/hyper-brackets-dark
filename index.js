// Syntax scheme

const brackets = {
  black: "#1d1f21",
  white: "#dddddd",
  orange: "#d89333",
  red: "#dc322f",
  green: "#85a300",
  blue: "#6c9ef8",
  purple: "#b77fdb",
  bluePurple: "#6c71c4",
  pink: "#d85896",
  gray: "#767676"
};

const backgroundColor = brackets.black;
const foregroundColor = brackets.white;
const cursorColor = "#c5c8c6";
const borderColor = "#333F48";

const colors = {
  black: backgroundColor,
  red: brackets.orange,
  green: brackets.green,
  yellow: brackets.pink,
  blue: brackets.blue,
  magenta: brackets.bluePurple,
  cyan: brackets.purple,
  white: foregroundColor,
  lightBlack: brackets.gray,
  lightRed: brackets.orange,
  lightGreen: brackets.green,
  lightYellow: brackets.pink,
  lightBlue: brackets.blue,
  lightMagenta: brackets.bluePurple,
  lightCyan: brackets.purple,
  lightWhite: foregroundColor
};

// Config
exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    colors,
    cursorColor: config.cursorColor || cursorColor,
    cursorShape: config.cursorShape || "BEAM",
    fontSize: config.fontSize || 12,
    fontFamily: config.fontFamily || "Space Mono",
    termCSS: `
            ${config.termCSS || ""}
            ::selection {
                background: #333F48 !important;
            }
            x-screen x-row {
                font-variant-ligatures: initial;
            }
            span {
                font-weight: normal !important;
            }
        `,
    css: `
            ${config.css || ""}
            ::selection {
                background: #333F48 !important;
            }
        `
  });
};
