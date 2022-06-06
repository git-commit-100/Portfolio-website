import React, { useContext, useState } from "react";
import "./Footer.scss";
import AppWrap from "../../components/Wrapper/AppWrapper";
import { images } from "../../constants/images";
import { motion } from "framer-motion";
import NavContext from "../../utils/context";
import useInput from "../../utils/hooks/useInput";
import { client } from "../../client";

// for cards animation
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

const Footer = () => {
  const [showForm, setShowForm] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const ctx = useContext(NavContext);
  let isFormValid = false;

  const {
    value: nameInput,
    isValid: isNameValid,
    hasError: hasNameError,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    resetInput: resetName,
  } = useInput((name) => name.trim() !== "");

  const {
    value: emailInput,
    isValid: isEmailValid,
    hasError: hasEmailError,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    resetInput: resetEmail,
  } = useInput(
    (email) => email.trim() !== "" && email.includes("@") && email.includes(".")
  );

  const {
    value: msgInput,
    isValid: isMsgValid,
    hasError: hasMsgError,
    handleInputChange: handleMsgChange,
    handleInputBlur: handleMsgBlur,
    resetInput: resetMsg,
  } = useInput((msg) => msg.trim() !== "");

  if (isNameValid && isEmailValid && isMsgValid) {
    isFormValid = true;
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    //sanity POST request
    const reqObj = {
      _type: "contact",
      name: nameInput,
      email: emailInput,
      message: msgInput,
    };

    setLoading(true);

    client
      .create(reqObj)
      .then(() => {
        //successful POST request
        setLoading(false);
        setShowForm();
      })
      .catch((err) => {
        //some error
        setLoading(false);
        setError(err.message);
      })
      .finally(() => {
        // resetting all inputs
        resetName();
        resetEmail();
        resetMsg();
      });
  }

  //DOM helpers
  const nameErrorJsx = hasNameError ? (
    <motion.p
      className="error-text"
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    >
      * Name cannot be empty
    </motion.p>
  ) : (
    ""
  );

  const emailErrorJsx = hasEmailError ? (
    <motion.p
      className="error-text"
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    >
      * Please enter a valid email
    </motion.p>
  ) : (
    ""
  );

  const msgErrorJsx = hasMsgError ? (
    <motion.p
      className="error-text"
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    >
      * Message cannot be empty
    </motion.p>
  ) : (
    ""
  );

  return (
    <div className="app__footer-div">
      <h3 className="head-text">
        Let's get a <span>coffee</span> or <span>chat</span> with me
      </h3>

      {/* contact cards  */}
      <motion.div
        className="contact-div"
        variants={parentVariant}
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div className="contact-email" variants={childVariant}>
          <img src={images.mail} alt="E-Mail" />
          <a href="mailto:bhargavkashiya2408@gmail.com">
            bhargavkashiya2408@gmail.com
          </a>
        </motion.div>
        <motion.div className="contact-phone" variants={childVariant}>
          <motion.img
            src={images.phone}
            alt="Phone"
            onViewportEnter={() => ctx.setActiveNav("contact")}
          />
          <a href="tel:+91 9175899936">(+91) 9175899936</a>
        </motion.div>
      </motion.div>

      {/* contact form  */}
      {showForm && (
        <div className="contact-form">
          <form>
            <div className="input-wrap">
              <div className="form-field">
                <input
                  id="input-name"
                  autoComplete="none"
                  placeholder="Your Name"
                  value={nameInput}
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                  className={hasNameError ? "input-invalid" : ""}
                />
                <span
                  className="iconify"
                  data-icon="carbon:user-avatar-filled-alt"
                ></span>
              </div>
              {nameErrorJsx}
            </div>

            <div className="input-wrap">
              <div className="form-field">
                <input
                  id="input-email"
                  type="email"
                  autoComplete="none"
                  placeholder="Your Email"
                  value={emailInput}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  className={hasEmailError ? "input-invalid" : ""}
                />
                <span className="iconify" data-icon="entypo:email"></span>
              </div>
              {emailErrorJsx}
            </div>

            <div className="input-wrap">
              <div className="form-field">
                <textarea
                  id="input-msg"
                  placeholder="Your Message"
                  value={msgInput}
                  onChange={handleMsgChange}
                  onBlur={handleMsgBlur}
                  className={hasMsgError ? "input-invalid" : ""}
                />
                <span className="iconify" data-icon="bx:message-detail"></span>
              </div>
              {msgErrorJsx}
            </div>

            <button
              className="submit-btn"
              type="submit"
              disabled={!isFormValid}
              onClick={handleFormSubmit}
            >
              Send Message
            </button>
          </form>
        </div>
      )}

      {/* showing thank you page */}
      {!showForm && !error && (
        <div className="thank_you">
          <h3 className="head-text">
            Thank You for <span>getting</span> in touch !
          </h3>

          <motion.img
            src={images.thankYou}
            alt="Thank You"
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          />
        </div>
      )}

      {/* if some error occurred */}
      {error && (
        <div className="error-div">
          <h3 className="head-text">Oops something went wrong :(</h3>
          <h4>Please refresh the page and try again !</h4>
        </div>
      )}

      {/* loading screen  */}
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};

export default AppWrap(Footer, "contact", "primary");
