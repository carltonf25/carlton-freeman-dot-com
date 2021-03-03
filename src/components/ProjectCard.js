import React, { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: #fbfbfb;
  box-shadow: 0 4px 6px rgba(100, 100, 100, 0.2);
  padding: 1.5em;
  margin: 1em;
  max-width: 300px;
  transition: 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;

  .card-link {
    margin: 1em;
    text-decoration: none;
    transition: 0.2s ease;
    text-transform: uppercase;
    color: #575756;

    :hover {
      border-bottom: 3px solid #ff71e0;
    }
  }

  :hover {
    transform: scale(1.02);
  }

  @media only screen and (max-width: 950px) {
    max-width: 900px;
    width: 100%;
  }
`;

const ProjectCard = ({ title, description, tech, liveURL, gitHubURL }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <CardWrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2
        style={{
          margin: `0 auto`,
          borderBottom: hovered ? `4px solid #ff71e0` : `none`,
          width: `50%`,
          transition: `0.2s ease`,
        }}
      >
        {title}
      </h2>
      <p style={{ textAlign: `left`, fontSize: "1.3rem" }}>{description}</p>
      <div
        style={{
          marginBottom: `1.5em`,
        }}
      >
        {gitHubURL && (
          <a className="card-link" target="blank" href={gitHubURL}>
            GitHub
          </a>
        )}
        {liveURL && (
          <a className="card-link" target="blank" href={liveURL}>
            VIEW
          </a>
        )}
      </div>
      <h4>Built with:</h4>
      <div>
        {tech.map((t) => (
          <img
            title={t.title}
            alt={t.title}
            src={t.img}
            style={{
              width: `2em`,
              maxWidth: `50px`,
              marginRight: `1em`,
            }}
          />
        ))}
      </div>
    </CardWrapper>
  );
};

export default ProjectCard;
