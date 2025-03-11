import { createContext, useContext } from "react";

interface IFullscreenNavContext {
  isMenuOpen: boolean;
  onClose: () => void;
}

const FullscreenNavContext = createContext<IFullscreenNavContext>({
  isMenuOpen: false,
  onClose: () => {},
});

const useFullscreenNav = () => useContext(FullscreenNavContext);

export { FullscreenNavContext, useFullscreenNav };
