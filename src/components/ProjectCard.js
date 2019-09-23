import React, { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: #fbfbfb;
  box-shadow: 0 4px 6px rgba(100, 100, 100, 0.2);
  padding: 1.5em;
  margin: 1em;
  max-width: 300px;
  cursor: pointer;
  transition: 0.2s ease;

  :hover {
    transform: scale(1.02);
  }
`;

const ProjectCard = ({ title, description, tech }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <CardWrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2
        style={{
          width: `50%`,
          margin: `0 auto`,
          borderBottom: hovered ? `4px solid #ff71e0` : `none`,
          transition: `0.2s ease`
        }}
      >
        {title}
      </h2>
      <p>{description}</p>
      {tech.map(t => (
        <img
          title={t.title}
          alt={t.title}
          src={t.img}
          style={{
            width: `2em`,
            marginRight: `1em`
          }}
        />
      ))}
    </CardWrapper>
  );
};

export default ProjectCard;
