import React from "react";
import styled from "styled-components";

const TitleHeader = styled.h1`
  font-family: "Noto Serif";
  font-weight: "bold";
  color: red;
`;

const FeaturedButton = styled.button`
  cursor: pointer;
  margin-top: 15px;
  padding: 15px;
  color: #2c3551;
  background: #bd93f9;
  box-shadow: 0 4px 6px hsla(0, 0%, 0.2);
  text-transform: uppercase;
  transition: 0.2s ease;
  border: none;
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  max-width: 250px;
  font-family: serif;
  font-weight: 700;

  &:hover {
    transform: scale(1.02);
    color: #2c3551;
    background: #b28ce9;
    box-shadow: 0px 1px 4px 0px rgb(0, 0, 0, 0.14);
  }
`;

const FrontPage = ({ toggle }) => (
  <main className="front-page-content">
    <div className="basic-page-info">
      <TitleHeader>
        Hi, I'm <span className="nameSpan">Carlton Freeman</span>. <br />
        I'm a full-stack JavaScript developer from Atlanta.
      </TitleHeader>
      <FeaturedButton>FEATURED PROJECTS</FeaturedButton>
      <div className="social-link-container">
        <ul className="social-link-ul">
          <li>
            <a target="blank" href="https://github.com/carltonf25?tab=stars">
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
                src="img/medium-logo.jpg"
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
  </main>
);

export default FrontPage;
