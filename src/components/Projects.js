import React, { useState } from "react";
import { Spring } from "react-spring/renderprops";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { PageHeading } from "../Site";
import ReactPlayer from "react-player";
import projects from "../projects.js";

// styled components 💅
const ProjectsWrapper = styled.div`
  text-align: center;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70%;

  .card-container {
    justify-content: center;
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  li {
    margin-left: 15%;
    text-align: left;
    @media (max-width: 500px) {
      margin-left: 0;
    }
  }
  nav {
    background: none;
    width: 100%;
    height: 60px;
    transition: 0.2s ease-in-out;
    margin-bottom: 0;
    :hover {
      background: #282a36;
      a {
        color: #fff;
        :hover {
          color: #dedede;
        }
      }
      a:last-child {
        :hover {
          color: #ff79c6;
        }
      }
    }
    a {
      color: #282a36;
      text-transform: uppercase;
      margin-left: 1em;
      text-decoration: none;
      font-weight: 500;
      transition: 0.2s ease-in-out;
    }
  }
`;

const Projects = () => {
  return (
    <Spring from={{ right: -500, opacity: 0 }} to={{ right: 0, opacity: 1 }}>
      {(slideIn) => (
        <ProjectsWrapper style={slideIn}>
          <PageHeading>My Work</PageHeading>
          <div className="card-container">
            {projects.map((project) => (
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                gitHubURL={project.gitHubURL}
                liveURL={project.liveURL ? project.liveURL : null}
              />
            ))}
          </div>
        </ProjectsWrapper>
      )}
    </Spring>
  );
};
export default Projects;
