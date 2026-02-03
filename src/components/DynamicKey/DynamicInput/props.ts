const parameters = {
  docs: {
    description: {
      component: "Input that allows rendering obfuscated content separately.",
    },
  },
};

const props = {
  placeholder: {
    description: "The placeholder text to display.",
  },
  masked: {
    description: "Whether to display the content as asterisks.",
  },
  type: {
    options: ["numeric", "alphanumeric"],
    control: { type: "select" as const },
    description:
      "The type of input validation. 'numeric' only accepts numbers, 'alphanumeric' accepts any character. Default: 'numeric'.",
    table: {
      defaultValue: { summary: "numeric" },
    },
  },
  size: {
    options: ["wide", "compact"],
    control: { type: "select" as const },
    description:
      "The size of the input. 'compact' is 40x40px, 'wide' is 48x48px. Default: 'wide'.",
    table: {
      defaultValue: { summary: "wide" },
    },
  },
  onChange: {
    description: "Callback function triggered on value change.",
  },
};

const types = ["numeric", "alphanumeric"] as const;
type IDynamicInputType = (typeof types)[number];

const sizes = ["wide", "compact"] as const;
type IDynamicInputSize = (typeof sizes)[number];

interface IDynamicInput {
  value?: string;
  placeholder?: string;
  masked?: boolean;
  type?: IDynamicInputType;
  size?: IDynamicInputSize;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export { parameters, props, types, sizes };
export type { IDynamicInputType, IDynamicInputSize, IDynamicInput };
