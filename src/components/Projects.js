import React, { useState } from "react";
import { Spring } from "../dependencies/react-spring/renderprops";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
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
  background: #f3f3f3;
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
  flex-basis: end;
  transition: 0.2s ease-inout;
  :hover {
  }
`;

const Projects = closeModal => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Game Night",
      description:
        "An application for creating and managing game nights with friends. Enter an event code to view an event and RSVP, or log in to create and manage your own events.",
      vidURL: "https://carltonfreeman24.wistia.com/medias/4ab8ezqze3",
      gitHubURL: "https://github.com/carltonf25/game-night",
      tech: [
        {
          title: "React",
          img:
            "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        },
        {
          title: "Figma",
          img:
            "https://i7.pngguru.com/preview/92/808/966/figma-user-interface-design-designer-logo-apps-design.jpg"
        },
        {
          title: "Lumen",
          img:
            "https://freeicons.io/laravel/public/uploads/icons/png/3551373941551941187-512.png"
        }
      ],
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
      tech: [
        {
          title: "React",
          img:
            "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        },
        {
          title: "Figma",
          img:
            "https://i7.pngguru.com/preview/92/808/966/figma-user-interface-design-designer-logo-apps-design.jpg"
        }
      ],
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
      iDid: ["Front end development using React, JavaScript, CSS, and HTML"],
      tech: [
        {
          title: "React",
          img:
            "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        },
        {
          title: "Figma",
          img:
            "https://i7.pngguru.com/preview/92/808/966/figma-user-interface-design-designer-logo-apps-design.jpg"
        }
      ]
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
      ],
      tech: [
        {
          title: "Node",
          img:
            "https://banner2.kisspng.com/20180619/vjl/kisspng-node-js-angularjs-react-javascript-npm-node-js-5b28f6111cb2c9.1605132215294110891176.jpg"
        }
      ]
    }
  ]);
  const [focusedProject, setFocusedProject] = useState(projects[0]);
  const [loading, setLoading] = useState(false);
  return (
    <Spring from={{ right: -500, opacity: 0 }} to={{ right: 0, opacity: 1 }}>
      {slideIn => (
        <React.Fragment>
          <ProjectsWrapper style={slideIn}>
            <CloseButton
              href="#0"
              onClick={e => {
                e.preventDefault();
                window.location.reload();
              }}
            >
              ✕
            </CloseButton>
            <h1>Case Studies</h1>
            <div className="modalContent">
              {projects.map(project => (
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                />
              ))}
            </div>
          </ProjectsWrapper>
        </React.Fragment>
      )}
    </Spring>
  );
};
export default Projects;
