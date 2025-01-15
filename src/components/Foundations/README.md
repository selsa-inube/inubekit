# Foundations

This library publishes core tokens that are used by each individual component. They are core because they set the bare minimum variables that the system applies across the whole set of components that belong to inubekit.

## Installation

The library is publish in npm.

```bash
npm install @inubekit/foundations
```

## Usage

This library exposes then a set of objects that contain the values of some variables considered core for the aesthetics of the whole system. This library also has the mission of serving as the default values of those variables.

It is not expected that the users of inubekit, the developers who use the design system to build interfaces, have to work directly this this specific library. This is because all the components that those developers will end up using already have this dependency installed.

## Personalization

### Structure and values

When the users of this design system need to change the values of these core variables to provide a different aesthetic in their apps, the approach should be to create a token structure that follows the structure that this library offers.

It is vital to follow the structure, since the component expect to extract each value following the structure of the objects that holds it. The only segment that can be change is the `inube` name of the exported object. That value can be whatever you wants as long as that object gets passed to the whole object as `theme` in a Provider.

### Implementation

That new structure could be added directly inside the particular project that needs new values, or by creating a service that returns the data structure depending on some conditions --for example, to make the values dependent per client or user of each specific app--.

To make the personalization work, it would need a particular way of making these variables accessible for all components. In this design system, the way is to use the `<ThemeProvider />` component that is exported from **styled-components**. This also means that the components of the system are built using **styled-components** as its CSS-in-JS approach to create and style its components.

### Typography

This part of the structure is shared among multiple components that need to render some texts (`<Text />`, `<Button />`, `<Link />`, etc). If you need to change the font-face used in an app, keep in mind that adjusting the values of typography tokens is just one of a two-step process.

1. You must change the typography tokens following the structure provided to use the new desired font(s).
2. You must install the font in your application, otherwise the application will try to use the fallback fonts or directly use the default font of the browser if no fallback is provided.

Options for installing fonts:

1. You can manually install the font in your app by using links in your index.html or by installing it directly with @font-face rules in CSS.
2. You can use the `useFonts()` hook provided by [@inubekit/hooks](https://www.npmjs.com/package/@inubekit/hooks) to install fonts dynamically in runtime (useful when your single application must support multiple clients, each one with a different font).
