import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Blanket } from "..";
import { StyledBackdropBlanket, StyledButton } from "./styles";

const meta = {
  title: "utils/Blanket",
  component: Blanket,
  parameters: {
    docs: {
      description: {
        component:
          "the Blanket is used when you want to render  a screen lock to interact with a component in the foreground",
      },
    },
  },
  argTypes: {
    children: {
      description:
        "property used to determine if the component is capable of hosting nodes **ReactElement**",
    },
  },
} satisfies Meta<typeof Blanket>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  render: (args) => {
    const [showBlanket, setShowBlanket] = useState(false);

    const handleShowBlanket = () => {
      setShowBlanket(true);
    };

    return (
      <>
        <StyledButton onClick={handleShowBlanket}>Show Blanket</StyledButton>
        {showBlanket && (
          <Blanket {...args}>
            <StyledBackdropBlanket onClick={() => setShowBlanket(false)} />
          </Blanket>
        )}
      </>
    );
  },
};

export default meta;
export { Default };
