import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
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
              <h1
                style={{
                  fontSize: `3em`,
                  fontWeight: 500
                }}
              >
                Hi, I'm <span className="nameSpan">Carlton</span>.
              </h1>
              <h2
                style={{
                  fontSize: `24px`,
                  fontWeight: 500
                }}
              >
                I build applications and websites using modern web technologies,
                like React, Node, Express, and Laravel.
              </h2>
              <button className="featuredBtn" onClick={() => setToggle(true)}>
                FEATURED PROJECTS
              </button>
              <div className="social-link-container">
                <ul className="social-link-ul">
                  <li>
                    <a target="blank" href="https://github.com/carltonf25">
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
