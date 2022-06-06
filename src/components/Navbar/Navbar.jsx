import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import NavContext from "../../utils/context";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const navLinks = ["home", "about", "work", "skills", "contact"];
  const ctx = useContext(NavContext);

  return (
    <>
      <nav className="app__navbar">
        <a href="#home" className="app__navbar-logo">
          <span
            className="iconify"
            data-icon="eos-icons:abstract-incomplete"
          ></span>
          <p className="brand-name">Bhargav Kashiya</p>
        </a>

        <ul className="app__navbar-links-list">
          {navLinks.map((item) => {
            return (
              <li key={`link-${item}`} className="app__navbar-links">
                <a
                  href={`#${item}`}
                  onClick={() => ctx.setActiveNav(item)}
                  className={ctx.activeNav === item ? "active" : ""}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="app__navbar__mobile-menu">
          <div className="app__navbar__mobile-menu-icon-div">
            <FiMenu
              className="menu-icon"
              onClick={() => setShowMobileNav(true)}
            />
          </div>

          <AnimatePresence>
            {showMobileNav && (
              <motion.div
                className="app__navbar__mobile-nav"
                initial={{ x: "70%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
                exit={{ x: "100%" }}
                key="app__navbar__mobile-nav"
              >
                <AiOutlineClose
                  className="close-icon"
                  onClick={() => setShowMobileNav(false)}
                />
                <ul className="app__navbar__mobile-links-list">
                  {navLinks.map((item) => {
                    return (
                      <li key={`${item}`} className="app__navbar__mobile-links">
                        <a
                          onClick={() => setShowMobileNav(false)}
                          className={ctx.activeNav === item ? "active" : ""}
                          href={`#${item}`}
                        >
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
