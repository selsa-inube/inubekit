import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { tokens } from "../tokens";

import { Stack } from "../../Stack";
import { Text } from "../../Text";
import { NavLink } from "../../Nav/NavLink";

import { IFullscreenNavSection } from "..";
import { ITextAppearance } from "src/components/Text/props";

function FullscreenNavSection(props: IFullscreenNavSection) {
  const { subtitle, links, onClose } = props;

  const theme = useContext(ThemeContext) as { fullscreenNav: typeof tokens };

  return (
    <>
      <Text
        as="h2"
        type="title"
        size="small"
        appearance={
          (theme?.fullscreenNav?.subtitle?.appearance
            ?.regular as ITextAppearance) || tokens.subtitle.appearance.regular
        }
        padding="26px 16px 10px"
        weight="bold"
      >
        {subtitle}
      </Text>
      <Stack direction="column">
        {links.map((link) => (
          <NavLink
            key={link.id}
            id={link.id}
            label={link.label}
            icon={link.icon}
            path={link.path}
            onClick={onClose}
          />
        ))}
      </Stack>
    </>
  );
}

export { FullscreenNavSection };
