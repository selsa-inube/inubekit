import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from ".";
import { Button } from "../Button";
import { Text } from "../Text";
import { Stack } from "../Stack";
import { ThemeProvider } from "styled-components";
import { palette } from "../Foundations/palette";
import { parameters, props } from "./props";

const meta = {
  title: "layout/Box",
  component: Box,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Box>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    margin: "0px",
    padding: "16px",
    borderRadius: "8px",
  },
};

const Composition: Story = {
  args: {
    margin: "0px",
    padding: "16px",
    borderRadius: "8px",
  },
  render: (args) => (
    <Box {...args}>
      <Stack direction="column" gap="8px">
        <Text>The quick brown fox jumps over the lazy dog</Text>
        <Button appearance="gray" variant="outlined">
          Confirm
        </Button>
      </Stack>
    </Box>
  ),
};

const theme = {
  box: {
    border: {
      color: palette.teal.T300,
    },
  },
};

const Themed: Story = {
  args: {
    margin: "0px",
    padding: "16px",
    borderRadius: "8px",
  },
  render: (args) => (
    <ThemeProvider theme={theme}>
      <Box {...args} />
    </ThemeProvider>
  ),
};

export default meta;
export { Default, Composition, Themed };
