import { createContext } from "react";

const NavContext = createContext({
  activeNav: null,
  setActiveNav: () => {},
});
export default NavContext;
