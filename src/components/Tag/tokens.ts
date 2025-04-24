import { inube } from "../Foundations";

const tokens = {
  primary: {
    background: {
      color: inube.palette.blue.B50,
    },
    border: {
      color: inube.palette.blue.B400,
    },
    content: {
      appearance: "primary",
    },
  },
  success: {
    background: {
      color: inube.palette.green.G50,
    },
    border: {
      color: inube.palette.green.G400,
    },
    content: {
      appearance: "success",
    },
  },
  warning: {
    background: {
      color: inube.palette.yellow.Y50,
    },
    border: {
      color: inube.palette.yellow.Y500,
    },
    content: {
      appearance: "warning",
    },
  },
  danger: {
    background: {
      color: inube.palette.red.R50,
    },
    border: {
      color: inube.palette.red.R400,
    },
    content: {
      appearance: "danger",
    },
  },
  help: {
    background: {
      color: inube.palette.purple.P50,
    },
    border: {
      color: inube.palette.purple.P400,
    },
    content: {
      appearance: "help",
    },
  },
  dark: {
    background: {
      color: inube.palette.neutral.N30,
    },
    border: {
      color: inube.palette.neutral.N900,
    },
    content: {
      appearance: "dark",
    },
  },
  gray: {
    background: {
      color: inube.palette.neutral.N10,
    },
    border: {
      color: inube.palette.neutral.N200,
    },
    content: {
      appearance: "gray",
    },
  },
  light: {
    background: {
      color: inube.palette.neutralAlpha.N0A,
    },
    border: {
      color: inube.palette.neutral.N10,
    },
    content: {
      appearance: "light",
    },
  },
};

export { tokens };
