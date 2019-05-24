import React, { useState, useEffect } from "react";
import { Spring } from "../dependencies/react-spring/renderprops";
import styled from "styled-components";
import ReactPlayer from "react-player";

// styled components 💅
const VideoSection = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 0px;
  margin-top: 1.5rem;
  video {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const ProjectSwitcher = styled.button`
  border: none;
  color: #ff79c6;
  transition: 0.2s ease-in;
  font-size: 3em;
  background: none;
  :hover {
    transform: scale(1.08);
    cursor: pointer;
    color: #ce609e;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
const ProjectsWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background: #fff;
  text-align: center;
  width: 100%;
  nav {
    background: #fff;
    width: 100%;
    height: 60px;
    transition: 0.2s ease-in-out;
    margin-bottom: 0;
    :hover {
      background: #282a36;
      a {
        color: #fff;
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
      :hover {
        transform: scale(1.5);
        color: #e8d1ff;
      }
    }
  }
`;
const CloseButton = styled.a`
  font-size: 1.5em;
  margin-left: auto;
  transition: 0.2s ease-in-out;
  :hover {
    transform: scale(1.9);
  }
`;

const Projects = closeModal => {
  const video = document.querySelector("video");
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Game Night",
      description:
        "An in-progress application for creating and managing board game nights with friends. Uses the Twilio API to send SMS invites that allow invitees to RSVP and volunteer to bring refreshments.",
      vidURL: "https://carltonfreeman24.wistia.com/medias/4ab8ezqze3",
      gitHubURL: "https://github.com/carltonf25/game-night",
      iDid: [
        "UI Design in Sketch",
        "Front end development using React, JavaScript, CSS, and HTML",
        "Back end logic in Node and Express",
        "Data management with MongoDB"
      ]
    },
    {
      id: 2,
      title: "CRBN",
      description:
        "CRBN is an app that gives users a score for their carbon emissions, " +
        "and encourages them to offset that score by attending events that would reduce carbon emissions.",
      vidURL: "https://carltonfreeman24.wistia.com/medias/bs9zlpqzkp",
      techUsed: "React, Express, Node, HTML, CSS",
      gitHubURL: "https://github.com/carltonf25/CRBN",
      iDid: [
        "UI Design in Sketch",
        "Front end development using React, JavaScript, CSS, and HTML",
        "Back end logic in Node and Express",
        "Database management with Postgres"
      ]
    },
    {
      id: 3,
      title: "Freddie Match",
      description: "A memory game featuring my very photogenic dog, Freddie.",
      vidURL: "https://carltonfreeman24.wistia.com/medias/9bfeu6iqfn",
      techUsed: "React, HTML, CSS",
      gitHubURL: "https://github.com/carltonf25/freddie-match",
      iDid: ["Front end development using React, JavaScript, CSS, and HTML"]
    },
    {
      id: 4,
      title: "ScheduleBot",
      description:
        "A Slack bot that allows users to schedule Slack messages to send " +
        "at a specified date and time.",
      vidURL: "https://carltonfreeman24.wistia.com/medias/pvt62fjtt3",
      techUsed: "Express, Node, Slack API",
      gitHubURL: "https://github.com/carltonf25/schedulebot",
      iDid: [
        "Back end development in Node and Express",
        "Data management in Postgres",
        "Slack interactivity via API"
      ]
    }
  ]);
  const [focusedProject, setFocusedProject] = useState(projects[0]);
  const [loading, setLoading] = useState(false);
  return (
    <Spring from={{ right: -500, opacity: 0 }} to={{ right: 0, opacity: 1 }}>
      {slideIn => (
        <ProjectsWrapper style={slideIn}>
          <nav>
            {projects.map(project => {
              return (
                <a
                  key={project.id}
                  id={project.id}
                  href="#0"
                  onClick={event => {
                    event.preventDefault();
                    let projectId = Number(event.target.id);
                    let clickedProject = projects.filter(p => {
                      return p.id == projectId;
                    });
                    setFocusedProject(clickedProject[0]);
                  }}
                  style={
                    focusedProject.id === project.id
                      ? { borderBottom: `2px solid #ff79c6` }
                      : {}
                  }
                >
                  {project.title}
                </a>
              );
            })}
            <CloseButton
              href="#0"
              onClick={e => {
                e.preventDefault();
                window.location.reload();
              }}
            >
              ✕
            </CloseButton>
          </nav>
          <div className="modalContent">
            {loading ? (
              <p>loading...</p>
            ) : (
              <VideoSection>
                {/* <video key={currentProject.vidURL} style={{
                        width: `83%`,
                        display: `inline`,
                      }} controls autoPlay="true" loop>
                        <source src={currentProject.vidURL} type="video/mp4" />
                      </video> */}
                <ReactPlayer
                  id="wistia-player"
                  url={focusedProject.vidURL}
                  playing
                />
              </VideoSection>
            )}
            <h2>{focusedProject.title}</h2>
            <a
              style={{
                color: `#ff79c6`,
                textDecoration: `underline`,
                textTransform: `uppercase`
              }}
              target="blank"
              href={focusedProject.gitHubURL}
            >
              GitHub Repo
            </a>
            <br />
            <br />
            <p className="projectDescription">{focusedProject.description}</p>
            <h3 style={{ textTransform: `uppercase` }}>What I Did</h3>
            <ul
              style={{
                textAlign: `left`,
                margin: `0 auto`
              }}
            >
              {focusedProject.iDid.map(item => (
                <li style={{ marginLeft: `20%` }}>{item}</li>
              ))}
            </ul>
          </div>
        </ProjectsWrapper>
      )}
    </Spring>
  );
};
export default Projects;
