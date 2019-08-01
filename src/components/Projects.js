import React, { useState } from "react";
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
  img {
    max-height: 400px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const ProjectsWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background: #fff;
  text-align: center;
  width: 100%;
  height: 100%;
  li {
    margin-left: 15%;
    text-align: left;
    @media (max-width: 500px) {
      margin-left: 0;
    }
  }
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
const CloseButton = styled.a`
  font-size: 1.5em;
  margin-left: auto;
  transition: 0.2s ease-in-out;
  :hover {
  }
`;

const Projects = closeModal => {
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
      title: "Hook Facts",
      description:
        "A celebration of the 1991 cinematic masterpiece, Hook, written using React hooks",
      gif:
        "https://p33.tr1.n0.cdn.getcloudapp.com/items/BlupJw2b/hook-facts.gif",
      techUsed: "React, Styled Components",
      gitHubURL: "https://github.com/carltonf25/hook-facts",
      iDid: [
        "UI Design in Figma",
        "Front end development using React, JavaScript, CSS, and HTML",
        "Mock API server using typicode/json-server"
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
                      return p.id === projectId;
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
                {focusedProject.vidURL ? (
                  <ReactPlayer
                    id="wistia-player"
                    url={focusedProject.vidURL}
                    playing
                  />
                ) : (
                  <img alt="project-gif" src={focusedProject.gif} />
                )}
                {/* <video key={currentProject.vidURL} style={{
                        width: `83%`,
                        display: `inline`,
                      }} controls autoPlay="true" loop>
                        <source src={currentProject.vidURL} type="video/mp4" />
                      </video> */}
              </VideoSection>
            )}
            <div
              style={{
                width: `60%`,
                margin: `0 auto`
              }}
            >
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
                  textAlign: `left`
                }}
              >
                {focusedProject.iDid.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </ProjectsWrapper>
      )}
    </Spring>
  );
};
export default Projects;
