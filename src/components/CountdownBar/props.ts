const appearances = [
  "primary",
  "success",
  "warning",
  "danger",
  "help",
  "dark",
  "gray",
  "light",
] as const;
type ICountdownBarAppearance = (typeof appearances)[number];

const parameters = {
  docs: {
    description: {
      component:
        "A countdown bar graphically communicates to the user a countdown",
    },
  },
};

const props = {
  height: {
    description:
      "which allows it to be given a custom thickness, according to the need.",
    table: {
      defaultValue: { summary: "4px" },
    },
  },
  appearance: {
    options: appearances,
    description: "colors used to identify the state of the component",
    table: {
      defaultValue: { summary: "primary" },
    },
  },
  duration: {
    description: "the total duration of the animation, in milliseconds",
    table: {
      defaultValue: { summary: "1000" },
    },
  },
  paused: {
    description: "pause or start the animation",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  onCountdown: {
    description: "function to be executed when the progress bar reaches zero",
  },
};

export { props, parameters };
export type { ICountdownBarAppearance };
