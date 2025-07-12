import { Box, IBox } from ".";

import { Button } from "../Button";
import { Text } from "../Text";
import { Stack } from "../Stack";
import { ThemeProvider } from "styled-components";
import { palette } from "../Foundations/palette";

const story = {
  title: "layout/Box",
  components: Box,
};

const Default = (args: IBox) => <Box {...args} />;
Default.args = {
  margin: "0px",
  padding: "16px",
  borderRadius: "8px",
  appearance: "light",
};

const Composition = (args: IBox) => (
  <Box {...args}>
    <Stack direction="column" gap="8px">
      <Text>The quick brown fox jumps over the lazy dog</Text>
      <Button appearance="gray" variant="outlined">
        Confirm
      </Button>
    </Stack>
  </Box>
);

const Themed = (args: IBox) => (
  <ThemeProvider theme={theme}>
    <Box {...args} />
  </ThemeProvider>
);
const theme = {
  box: {
    border: {
      color: palette.teal.T300,
    },
  },
};

export { Default, Composition, Themed };
export default story;
