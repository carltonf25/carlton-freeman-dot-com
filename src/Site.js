import React, { useState } from "react";
import "./App.css";
import Projects from "./components/Projects";
import BackToTopButton from "./components/BackToTopButton";
import styled from "styled-components";

const TitleHeader = styled.h1`
  font-weight: "bold";
  font-size: 4rem;
`;

const FeaturedButton = styled.button`
  cursor: pointer;
  margin-top: 15px;
  padding: 15px;
  color: #fff;
  background: #bd93f9;
  box-shadow: 0 4px 6px hsla(0, 0%, 0.2);
  text-transform: uppercase;
  transition: 0.2s ease;
  border: none;
  outline: none;
  border-radius: 3px;
  font-size: 16px;
  max-width: 250px;
  font-family: "Open Sans";
  font-weight: bold;

  &:hover {
    transform: scale(1.02);
    background: #b28ce9;
    box-shadow: 0px 1px 4px 0px rgb(0, 0, 0, 0.14);
  }
`;

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
              alignItems: `center`,
              lineHeight: `2.75rem`,
            }}
          >
            <TitleHeader>
              Hi, I'm <span className="nameSpan">Carlton</span>.
            </TitleHeader>
            <h2
              style={{
                fontSize: `24px`,
                fontWeight: 500,
                textAlign: `left`,
                maxWidth: `560px`,
              }}
            >
              I build applications and websites using modern web technologies,
              like React, Node, Express, and Laravel.
            </h2>
            <FeaturedButton
              onClick={() =>
                window.scrollTo({
                  top: `850`,
                  behavior: "smooth",
                })
              }
            >
              FEATURED PROJECTS
            </FeaturedButton>
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
