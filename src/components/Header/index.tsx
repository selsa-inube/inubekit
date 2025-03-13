import { useContext } from "react";

import { ThemeContext } from "styled-components";
import { IUser, User } from "../User";
import { useMediaQuery } from "../Hooks/useMediaQuery";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { ITextAppearance } from "../Text/props";
import { FullscreenNav, IFullscreenNav } from "../FullscreenNav";

import { IHeaderLink } from "./props";
import {
  StyledHeader,
  StyledFullscreenNav,
  StyledLink,
  StyledUser,
} from "./styles";

import { tokens } from "./tokens";
import { Grid } from "../Grid";

interface IHeader {
  logoURL: JSX.Element;
  navigation?: {
    nav: IFullscreenNav;
    breakpoint?: string;
  };
  user?: {
    username: IUser["username"];
    client?: IUser["client"];
    breakpoint?: string;
  };
  links?: {
    items: IHeaderLink[];
    breakpoint?: string;
  };
  menu: IUser["menu"];
}

const Header = (props: IHeader) => {
  const { navigation, logoURL, user, links, menu = [] } = props;
  const theme = useContext(ThemeContext) as { header: typeof tokens };
  const linkAppearance =
    (theme?.header?.content?.appearance as ITextAppearance) ||
    tokens.content.appearance;

  const userBreakpoint = useMediaQuery(`(max-width: ${user?.breakpoint})`);
  const linksBreakpoint = useMediaQuery(`(min-width: ${links?.breakpoint})`);
  const navigationBreakpoint = useMediaQuery(
    `(max-width: ${navigation?.breakpoint})`,
  );

  return (
    <StyledHeader>
      <Grid
        templateColumns={user ? "auto 1fr auto" : "auto 1fr"}
        alignContent="stretch"
        gap={linksBreakpoint ? "40px" : "16px"}
      >
        <Stack gap="8px" alignItems="center" margin="0 0 0 16px">
          <StyledFullscreenNav $display={navigationBreakpoint}>
            {navigation?.nav && (
              <FullscreenNav
                reactPortalId={navigation.nav.reactPortalId}
                title={navigation.nav.title}
                sections={navigation.nav.sections}
                actions={navigation.nav.actions}
                footerLabel={navigation.nav.footerLogo}
                footerLogo={navigation.nav.footerLogo}
              />
            )}
          </StyledFullscreenNav>
          {logoURL}
        </Stack>
        <Stack alignItems="center" justifyContent="flex-end" gap="16px">
          {links &&
            links.items.length > 0 &&
            linksBreakpoint &&
            links.items.map((link) => (
              <StyledLink key={crypto.randomUUID()} to={link.path}>
                <Text
                  type="label"
                  size="medium"
                  appearance={linkAppearance}
                  weight="bold"
                >
                  {link.label}
                </Text>
              </StyledLink>
            ))}
        </Stack>
        {user && user.username && (
          <StyledUser>
            <User
              username={user.username}
              client={user.client}
              size={userBreakpoint ? "small" : "large"}
              padding="8px 16px"
              menu={menu}
              menuTopPosition="calc(100% + 8px)"
            />
          </StyledUser>
        )}
      </Grid>
    </StyledHeader>
  );
};

export { Header };
export type { IHeader };
