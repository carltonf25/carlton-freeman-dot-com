import React from "react";

const FrontPage = ({ toggle }) => (
  <main className="front-page-content">
    <div className="basic-page-info">
      <h1>
        Hi, I'm <span className="nameSpan">Carlton Freeman</span>. <br />
        I'm a full-stack JavaScript developer from Atlanta.
      </h1>
      <button className="featuredBtn" onClick={() => toggle()}>
        FEATURED PROJECTS
      </button>
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
