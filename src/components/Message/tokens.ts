import { inube } from "../Foundations";

const tokens = {
  primary: {
    background: {
      color: inube.palette.blue.B50,
    },
    icon: {
      appearance: "primary",
    },
    content: {
      appearance: "gray",
    },
    action: {
      appearance: {
        primary: "primary",
        secondary: "gray",
      },
    },
  },
  success: {
    background: {
      color: inube.palette.green.G50,
    },
    icon: {
      appearance: "success",
    },
    content: {
      appearance: "gray",
    },
    action: {
      appearance: {
        primary: "success",
        secondary: "gray",
      },
    },
  },
  warning: {
    background: {
      color: inube.palette.yellow.Y50,
    },
    icon: {
      appearance: "warning",
    },
    content: {
      appearance: "gray",
    },
    action: {
      appearance: {
        primary: "warning",
        secondary: "gray",
      },
    },
  },
  danger: {
    background: {
      color: inube.palette.red.R50,
    },
    icon: {
      appearance: "danger",
    },
    content: {
      appearance: "gray",
    },
    action: {
      appearance: {
        primary: "danger",
        secondary: "gray",
      },
    },
  },
  help: {
    background: {
      color: inube.palette.purple.P50,
    },
    icon: {
      appearance: "help",
    },
    content: {
      appearance: "gray",
    },
    action: {
      appearance: {
        primary: "help",
        secondary: "gray",
      },
    },
  },
  dark: {
    background: {
      color: inube.palette.neutral.N30,
    },
    icon: {
      appearance: "dark",
    },
    content: {
      appearance: "gray",
    },
    action: {
      appearance: {
        primary: "dark",
        secondary: "gray",
      },
    },
  },
  gray: {
    background: {
      color: inube.palette.neutral.N10,
    },
    icon: {
      appearance: "gray",
    },
    content: {
      appearance: "gray",
    },
    action: {
      appearance: {
        primary: "dark",
        secondary: "gray",
      },
    },
  },
  light: {
    background: {
      color: inube.palette.neutral.N0,
    },
    icon: {
      appearance: "dark",
    },
    content: {
      appearance: "gray",
    },
    action: {
      appearance: {
        primary: "dark",
        secondary: "gray",
      },
    },
  },
};

export { tokens };
