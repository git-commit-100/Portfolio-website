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
        <motion.div
          className="app__about-img-animationBG"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
        ></motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          src={images.profilePic}
          draggable="false"
          alt="Profile"
        />
      </div>

      <motion.div
        className="app__about-info"
        variants={variants}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true }}
        transition="transition"
      >
        <h2 className="head-text">
          something <span>about </span>me
        </h2>

        <div className="app__about-info-info">
          <span>
            <h4>Name :</h4>
            <ul style={{ listStyle: "none" }}>
              <li>Bhargav Kashiya</li>
            </ul>
          </span>

          <motion.span onViewportEnter={() => ctx.setActiveNav("about")}>
            <h4>What Do I Do ?</h4>
            <ul style={{ listStyle: "none" }}>
              <li>
                Currently a final year student pursuing Bachelor of Engineering
                (B.E) in Information Technology from Vidyavardhini's College of
                Engineering and Technology (VCET), Vasai.
              </li>
            </ul>
          </motion.span>

          <span>
            <h4>Hobbies & Interests :</h4>
            <ul className="hobbies-list">
              <li>Basketball</li>
              <li>Gaming</li>
              <li>Trekking</li>
              <li>Football</li>
            </ul>
          </span>

          <span>
            <h4>Extra-curricular Achievements :</h4>
            <ul className="achievements-list"> 
              <li>
                2022-2023 VCET Student Committee Public Relation (PR) Head.
              </li>
              <li>2019-2020 VCET Student Council Admin Team.</li>
            </ul>
          </span>

          <span className="resumeLink">
            <a
              href="https://drive.google.com/file/d/1ewr6dPb-eqDfr7wlvh2egYaB5b0XA7n3/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              My Resume&nbsp;
              <span
                className="iconify"
                data-icon="fa6-regular:share-from-square"
              ></span>
            </a>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrapper(About, "about");
