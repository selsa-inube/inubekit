import { useState } from "react";
import { CountryFlags } from "../../CountryFlags";
import { countries, CountryCode } from "../../../assets/countries/countries";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CountryFlags> = {
  title: "components/CountryFlags",
  component: CountryFlags,
  tags: ["autodocs"],
  argTypes: {
    code: {
      control: {
        type: "select",
        options: Object.keys(countries) as CountryCode[],
      },
      description: "Código del país para mostrar la bandera",
      defaultValue: "USA",
    },
    width: { control: "text" },
    height: { control: "text" },
    maxWidth: { control: "text" },
    maxHeight: { control: "text" },
    padding: { control: "text" },
    margin: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof CountryFlags>;

type CountryFlagsProps = React.ComponentProps<typeof CountryFlags>;

const SelectableFlagComponent = (args: CountryFlagsProps) => {
  const [selectedCode, setSelectedCode] = useState<CountryCode>(args.code);

  return (
    <div
      style={{
        gap: "8px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <select
        value={selectedCode}
        onChange={(e) => setSelectedCode(e.target.value as CountryCode)}
      >
        {Object.entries(countries).map(([code, country]) => (
          <option key={code} value={code}>
            {country.name}
          </option>
        ))}
      </select>
      <CountryFlags {...args} code={selectedCode} />
    </div>
  );
};

export const SelectableFlag: Story = {
  render: (args) => <SelectableFlagComponent {...args} />,
  args: {
    code: "USA",
    width: "24px",
    height: "24px",
  },
};
