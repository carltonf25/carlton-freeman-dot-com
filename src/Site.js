import React, { useState } from "react";
import "./App.css";
import Projects from "./components/Projects";
import BackToTopButton from "./components/BackToTopButton";
import { About } from "./components";
import styled from "styled-components";

export const PageHeading = styled.h1`
  font-weight: "bold";
  font-size: 3.75rem;
  text-align: left;
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
  margin: 0 auto;

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
    <React.Fragment>
      <div
        className="App"
        style={{
          display: `flex`,
          flexDirection: `column`,
          width: "100%",
          paddingTop: "150px",
          paddingBottom: "400px",
        }}
      >
        <PageHeading>
          Hi, I'm <span className="nameSpan">Carlton</span>.
        </PageHeading>
        <h2
          style={{
            fontSize: `24px`,
            fontWeight: 500,
            textAlign: `left`,
            maxWidth: `560px`,
          }}
        >
          I build applications and websites using modern web technologies, like
          React, Typescript, Node, and GraphQL.
        </h2>
        <FeaturedButton
          onClick={() =>
            window.scrollTo({
              top: `1200`,
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
        {/* 
        
        <About />
        */}
        <Projects />
      </div>
      {scrollPosition > 100 && <BackToTopButton />}
    </React.Fragment>
  );
};

export default Site;
