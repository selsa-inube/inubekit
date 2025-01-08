import { ElementType } from "react";
import { FlagPortal } from ".";
import { Button } from "../../Button";
import { FlagProvider } from "../FlagsProvider";
import { useFlag } from "../useFlag";

const story = {
  title: "feedback/FlagPortal",
  components: [FlagPortal],
  decorators: [
    (Story: ElementType) => (
      <FlagProvider>
        <Story />
      </FlagProvider>
    ),
  ],
};

const Default = () => {
  const { addFlag } = useFlag();

  const handleClick = () => {
    addFlag({
      title: "Title",
      description: "Description",
      appearance: "primary",
      duration: 100000,
    });
  };

  return <Button onClick={handleClick}>Show Message</Button>;
};

export { Default };
export default story;
