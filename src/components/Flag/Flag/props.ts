const appearances = [
  "primary",
  "danger",
  "warning",
  "success",
  "help",
  "gray",
  "dark",
] as const;

type IFlagAppearance = (typeof appearances)[number];

const parameters = {
  docs: {
    description: {
      component:
        "Flag communicate important information in a section of a screen. Flags are persistent, but can disappear when the user takes action or resolves the situation.",
    },
  },
};

const props = {
  id: {
    description: "Unique identifier for the Flag component.",
  },
  title: {
    description: "The title text of the Flag.",
  },
  description: {
    description:
      "The description text of the flag. If the description is too long, it will be truncated to the MAX_DESCRIPTION_LENGTH.",
  },
  appearance: {
    options: appearances,
    description: "The appearance style of the Flag and related components.",
  },
  duration: {
    description:
      "The duration for which the countdown bar runs. If provided, a countdown bar will appear.",
    table: {
      type: { summary: "number (milliseconds)" },
    },
  },
};

export { parameters, props };
export type { IFlagAppearance };
