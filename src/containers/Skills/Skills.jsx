import React, { useContext } from "react";
import AppWrap from "../../components/Wrapper/AppWrapper";
import "./Skills.scss";
import { images } from "../../constants/images";
import { motion } from "framer-motion";
import NavContext from "../../utils/context";

const knownTechnologies = [
  { img: images.html, tech: "HTML5" },
  { img: images.css, tech: "CSS3" },
  { img: images.sass, tech: "Sass" },
  { img: images.javascript, tech: "Javascript" },
  { img: images.react, tech: "React" },
  { img: images.redux, tech: "Redux" },
  { img: images.nextjs, tech: "NextJS" },
  { img: images.firebase, tech: "Firebase" },
  { img: images.git, tech: "Git" },
];

const learningTechnologies = [
  { img: images.node, tech: "NodeJS" },
  { img: images.mongoDb, tech: "MongoDB" },
  { img: images.sanity, tech: "Sanity" },
  { img: images.socket, tech: "Socket.io" },
  { img: images.typescript, tech: "Typescript" },
];

let parentVariant = {
  animate: {
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

const childVariant = {
  animate: {
    scale: [0, 1],
    opacity: [0, 1],
  },
};

const Skills = () => {
  const ctx = useContext(NavContext);
  return (
    <>
      <h3 className="head-text mt4">
        My <span>Technology</span> Stack
      </h3>

      <motion.div
        className="app__skills"
        onViewportEnter={() => ctx.setActiveNav("skills")}
      >
        <div className="knownSkills">
          <h3>Technologies worked with</h3>

          <motion.ul
            className="tech-stack"
            variants={parentVariant}
            whileInView="animate"
            viewport={{ once: true }}
          >
            {knownTechnologies.map((stack) => (
              <motion.li key={stack.tech} variants={childVariant}>
                <motion.div className="img-wrap">
                  <img src={stack.img} alt={stack.tech} draggable={false} />
                </motion.div>
                <p>{stack.tech}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="plannedSkills">
          <h3>Currently learning</h3>
          <motion.ul
            className="tech-stack"
            variants={parentVariant}
            whileInView="animate"
            viewport={{ once: true }}
          >
            {learningTechnologies.map((stack) => (
              <motion.li key={stack.tech} variants={childVariant}>
                <div className="img-wrap">
                  <img src={stack.img} alt={stack.tech} draggable={false} />
                </div>
                <p>{stack.tech}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </>
  );
};

export default AppWrap(Skills, "skills");
