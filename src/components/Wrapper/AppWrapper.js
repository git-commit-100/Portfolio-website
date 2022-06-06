import React, { useContext } from "react";
import NavContext from "../../utils/context";
import NavigationDots from "../Navbar/NavigationDots";

const AppWrap = (Component, idName, bgColor) =>
  function HOC() {
    const ctx = useContext(NavContext);

    return (
      <div
        id={idName}
        className="app__container"
        style={{
          backgroundColor: bgColor === "primary" ? "#edf2f8" : "#fff",
        }}
      >
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <NavigationDots active={ctx.activeNav} />
      </div>
    );
  };

export default AppWrap;
