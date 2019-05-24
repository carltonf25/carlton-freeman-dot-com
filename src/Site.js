import React, { useState } from "react";
import { Spring } from "./dependencies/react-spring/renderprops";
import "./App.css";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import Projects from "./components/Projects";
import Modal from "./components/Modal";

const Site = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      {toggle ? (
        <Modal>
          <Projects
            closeModal={() => {
              setToggle(false);
            }}
          />
        </Modal>
      ) : (
        <React.Fragment>
          <Header />
          <main className="front-page-content">
            <div className="basic-page-info">
              <h1>
                Hi, I'm <span className="nameSpan">Carlton Freeman</span>.{" "}
                <br />
                I'm a full-stack JavaScript developer from Atlanta.
              </h1>
              <button className="featuredBtn" onClick={() => setToggle(true)}>
                FEATURED PROJECTS
              </button>
              <div className="social-link-container">
                <ul className="social-link-ul">
                  <li>
                    <a
                      target="blank"
                      href="https://github.com/carltonf25?tab=stars"
                    >
                      <img
                        className="logo-link"
                        src="img/Github_Logo.png"
                        alt="github-logo"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      target="blank"
                      href="https://www.linkedin.com/in/carlton-freeman-2074b3115/"
                    >
                      <img
                        className="logo-link"
                        src="img/linkedin-logo.png"
                        alt="linkedin-logo"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:carltonfreeman24@gmail.com">
                      <img
                        className="logo-link"
                        src="img/email-logo.png"
                        alt="email-icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </React.Fragment>
      )}
    </div>
  );
};

export default Site;
