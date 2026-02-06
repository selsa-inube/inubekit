const parameters = {
  docs: {
    description: {
      component:
        "Input that allows rendering the behavior of a 2FA. It should be used when you want to represent in the stories a behavior similar to a 2FA.",
    },
  },
};

const props = {
  id: {
    description:
      "The unique identifier for the component. Auto-generated if not provided.",
  },
  length: {
    description: "Number of input boxes. Default: 6.",
  },
  masked: {
    description: "Whether to display the content as asterisks.",
  },
  type: {
    options: ["numeric", "alphanumeric"],
    control: { type: "select" as const },
    description:
      "The type of input to accept: numeric (only numbers) or alphanumeric (letters and numbers). Default: 'numeric'.",
    table: {
      defaultValue: { summary: "numeric" },
    },
  },
  size: {
    options: ["wide", "compact"],
    control: { type: "select" as const },
    description: "The size of the inputs. Default: 'wide'.",
    table: {
      defaultValue: { summary: "wide" },
    },
  },
  onChange: {
    description: "Callback function triggered when the value changes.",
  },
  onComplete: {
    description: "Callback function triggered when all boxes are filled.",
  },
};

const sizes = ["wide", "compact"] as const;
type IDynamicKeySize = (typeof sizes)[number];

const types = ["numeric", "alphanumeric"] as const;
type IDynamicKeyType = (typeof types)[number];

interface IDynamicKey {
  id?: string;
  length?: number;
  masked?: boolean;
  type?: IDynamicKeyType;
  size?: IDynamicKeySize;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
}

export { parameters, props, sizes, types };
export type { IDynamicKeySize, IDynamicKeyType, IDynamicKey };
