import React, { useState } from "react";
import "./App.css";
import Projects from "./components/Projects";
import BackToTopButton from "./components/BackToTopButton";
import mediumLogo from "./img/medium-logo.jpg";

const Site = () => {
  const [toggle, setToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  document.onscroll = () => {
    setScrollPosition(window.pageYOffset);
  };
  return (
    <div className="App">
      <React.Fragment>
        <main className="front-page-content">
          <div
            style={{
              height: `100vh`,
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`
            }}
          >
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
                fontWeight: 500,
                textAlign: `left`,
                maxWidth: `560px`
              }}
            >
              I build applications and websites using modern web technologies,
              like React, Node, Express, and Laravel.
            </h2>
            <button
              className="featuredBtn"
              onClick={() =>
                window.scrollTo({
                  top: `850`,
                  behavior: "smooth"
                })
              }
            >
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
                  <a target="blank" href="https://medium.com/@carltonfreeman">
                    <img
                      className="logo-link"
                      src="https://banner2.cleanpng.com/20180328/lvw/kisspng-medium-logo-publishing-blog-i-5abb6adcaa7024.4856922615222320286981.jpg"
                      alt="medium-logo"
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
          <div id="projects-container">
            <Projects />
          </div>
          {scrollPosition > 100 && <BackToTopButton />}
        </main>
      </React.Fragment>
    </div>
  );
};

export default Site;
