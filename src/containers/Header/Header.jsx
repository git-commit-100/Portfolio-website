import React, { useContext } from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { AiOutlineArrowDown } from "react-icons/ai";
import AppWrapper from "../../components/Wrapper/AppWrapper";
import NavContext from "../../utils/context";

const Header = () => {
  const ctx = useContext(NavContext);
  return (
    <div className="app__header-div">
      <div className="background-color"></div>
      <motion.div
        className="app__header"
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <p>Hey ! I am</p>
        <motion.h2 onViewportEnter={() => ctx.setActiveNav("home")}>
          Bhargav Kashiya
        </motion.h2>
        <h3>
          I am&nbsp;
          <Typewriter
            options={{
              strings: [
                "a Student.",
                "interested in Web.",
                "interested in UI/UX.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <br />
        <motion.div
          whileInView={{ y: [0, 40], opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="app__header-go-down"
        >
          <AiOutlineArrowDown className="down-icon" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppWrapper(Header, "home", "primary");
