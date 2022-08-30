import React, { useContext, useEffect, useState } from "react";
import "./Works.scss";
import AppWrapper from "../../components/Wrapper/AppWrapper.js";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { client, loadImg } from "../../client";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import NavContext from "../../utils/context";

const variants = {
  animate: {
    x: [-100, 0],
    opacity: [0, 1],
  },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
};

let storedWorks = [];

const tags = ["All", "Vanilla JS", "React", "NextJS"];

const Works = () => {
  const ctx = useContext(NavContext);
  const [activeTag, setActiveTag] = useState("All");
  const [works, setWorks] = useState([]);

  useEffect(() => {
    //perform sanity fetch query
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      storedWorks = [...data];
    });
  }, []);

  const handleFilteringTags = (tag) => {
    setActiveTag(tag);
    if (tag === "All") {
      // reset all works i.e display works from sanity
      setWorks(storedWorks);
      return;
    }
    const filterWorks = storedWorks.filter((work) =>
      work.tags[0].includes(tag)
    );
    setWorks(filterWorks);
  };

  return (
    <AnimateSharedLayout>
      <div className="app__works-div">
        {/* heading */}
        <motion.h3 className="head-text" style={{ marginTop: "1rem" }}>
          My <span>creative</span> work showcase
        </motion.h3>

        {/* tags  */}
        <motion.div
          className="filter-pills-div"
          onViewportEnter={() => ctx.setActiveNav("work")}
        >
          <ul className="filter-pills-list">
            {tags.map((tag, index) => (
              <li
                key={tag + index}
                onClick={() => handleFilteringTags(tag)}
                className={`filter-pills-element ${
                  activeTag === tag ? "active" : ""
                }`}
              >
                {tag}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* work cards */}
        <motion.div
          variants={variants}
          whileInView="animate"
          viewport={{ once: true }}
          className="app__work-div"
        >
          {/* will take care of exit animations */}
          <AnimatePresence>
            {works.map((work, index) => (
              <motion.div
                key={work._id}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="work-card"
                //animate on position changes of sibling work cards
                layout="position"
                exit={{ opacity: [1, 0] }}
              >
                {/* hoverable links */}

                <img
                  src={loadImg(work.imgUrl)}
                  alt="work-profile"
                  draggable="false"
                />

                <div className="work-card-info">
                  <span className="work-tag">{work.tags[0]}</span>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>

                  <div className="code-links">
                    {/* optional link  */}
                    {work.projectLink && (
                      <a
                        href={work.projectLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiFillEye className="icon" />
                        &nbsp; Live
                      </a>
                    )}
                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                      <AiFillGithub className="icon" />
                      &nbsp; Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimateSharedLayout>
  );
};

export default AppWrapper(Works, "work", "primary");
