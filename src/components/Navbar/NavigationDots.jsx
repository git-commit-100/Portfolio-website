import React, { useContext } from "react";
import NavContext from "../../utils/context";

const NavigationDots = () => {
  const ctx = useContext(NavContext);
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((item, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          href={`#${item}`}
          onClick={() => ctx.setActiveNav(item)}
          key={item + index}
          className="app__navigation-dot"
          style={ctx.activeNav === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
