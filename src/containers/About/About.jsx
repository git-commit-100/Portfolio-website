import React, { useContext } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants/images";
import AppWrapper from "../../components/Wrapper/AppWrapper";
import NavContext from "../../utils/context";

const variants = {
  hidden: {
    opacity: 0,
  },
  animate: {
    x: [-100, 0],
    opacity: [0, 1],
  },
  transition: {
    duration: 0.5,
  },
};

const About = () => {
  const ctx = useContext(NavContext);
  return (
    <div className="app__about-div">
      <div className="app__about-img">
        <img src={images.profile} alt="Profile" />
      </div>

      <motion.div
        className="app__about-info"
        variants={variants}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true }}
        transition="transition"
      >
        <h2 className="head-text">About Me</h2>

        <div className="app__about-info-info">
          <span>
            <h4>Name :</h4>
            <p>Bhargav Kashiya</p>
          </span>

          <motion.span onViewportEnter={() => ctx.setActiveNav("about")}>
            <h4>Date Of Birth :</h4>
            <p>28 August, 2001</p>
          </motion.span>

          <span>
            <h4>Address :</h4>
            <p>Vasai, Maharashtra - 401202</p>
          </span>

          <span>
            <h4>Phone :</h4>
            <p>+91 9175899936</p>
          </span>

          <span>
            <h4>Email :</h4>
            <p>bhargavkashiya2408@gmail.com</p>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrapper(About, "about");
