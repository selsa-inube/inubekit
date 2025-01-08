import { inube } from "../Foundations";

const tokens = {
  avatar: {
    appearance: "primary",
  },
  username: {
    appearance: "dark",
  },
  client: {
    appearance: "gray",
  },
  heading: {
    appearance: "gray",
  },
  item: {
    content: "dark",
    background: {
      hover: inube.palette.neutral.N20,
      disabled: inube.palette.neutral.N20,
    },
  },
  background: {
    color: inube.palette.neutral.N0,
  },
};

export { tokens };
