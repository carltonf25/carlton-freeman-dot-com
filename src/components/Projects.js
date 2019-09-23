import React, { useState } from "react";
import { Spring } from "../dependencies/react-spring/renderprops";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import ReactPlayer from "react-player";
import projects from "../projects.json"

// styled components 💅
const ProjectsWrapper = styled.div`
height: 100vh;
  text-align: center;
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
    @media (max-width: 500px) {
      width: 100%;
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
      {slideIn => (
          <ProjectsWrapper style={slideIn}>
            <h1>Projects</h1>
            <div style={{
              display: `flex`,
              flexWrap: `wrap`,
              alignItems: `stretch`,
              width: `100%`

            }}>
              {projects.map(project => (
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  gitHubURL={project.gitHubURL}
                  liveURL={project.liveURL ? project.liveURL: null}
                />
              ))}
            </div>
          </ProjectsWrapper>
      )}
    </Spring>
  );
};
export default Projects;
