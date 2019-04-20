import React from 'react';
import { Spring } from '../dependencies/react-spring/renderprops';
import styled from 'styled-components';
import ReactPlayer from 'react-player'

// styled components 💅
const VideoSection = styled.div`
  display: flex;
  align-content: center;
  padding: 0px;
  video {
    height: 420px;
    margin: 0 1em;
  }
`;
const ProjectSwitcher = styled.button`
  background: none;
  border: none;
  color: #ff79c6;
  transition: 0.2s ease-in;
  font-size: 3em;
  :hover {
    transform: scale(1.08);
    cursor: pointer;
    color: #ce609e;
  }

  @media 
  and (min-device-width : 375px) 
  and (max-device-width : 667px) {
    display: none;
  }
`;

class Modal extends React.Component {
  state = {
    focusedProject: 1,
    loading: false,
    projects: [
      {
        id: 1,
        title: 'Game Night',
        description:
          'An in-progress application for creating and managing board game nights with friends. Uses the Twilio API to send SMS invites that allow invitees to RSVP and volunteer to bring refreshments.',
        vidURL: 'https://carltonfreeman24.wistia.com/medias/4ab8ezqze3',
        techUsed: 'React, Express, Node, Twilio API',
        gitHubURL: 'https://github.com/carltonf25/game-night',
      },
      {
        id: 2,
        title: 'CRBN',
        description:
          'CRBN is an app that gives users a score for their carbon emissions, ' +
          'and encourages them to offset that score by attending events that would reduce carbon emissions.',
        vidURL: 'https://carltonfreeman24.wistia.com/medias/bs9zlpqzkp',
        techUsed: 'React, Express, Node, HTML, CSS',
        gitHubURL: 'https://github.com/carltonf25/CRBN',
      },
      {
        id: 3,
        title: 'Freddie Match',
        description: 'A memory game featuring my very photogenic dog, Freddie.',
        vidURL: 'https://carltonfreeman24.wistia.com/medias/9bfeu6iqfn',
        techUsed: 'React, HTML, CSS',
        gitHubURL: 'https://github.com/carltonf25/freddie-match',
      },
      {
        id: 4,
        title: 'ScheduleBot',
        description:
          'A Slack bot that allows users to schedule Slack messages to send ' +
          'at a specified date and time.',
        vidURL: 'https://carltonfreeman24.wistia.com/medias/pvt62fjtt3',
        techUsed: 'Express, Node, Slack API',
        gitHubURL: 'https://github.com/carltonf25/schedulebot',
      },
    ],
  };

  increment() {
    let { focusedProject, projects } = this.state;

    if (focusedProject >= projects.length) {
      this.setState({ focusedProject: 1 });
    } else {
      this.setState({
        focusedProject: focusedProject + 1
    })
    }
  }

  render() {
    let { focusedProject, projects, loading } = this.state;
    let { show, toggle, onKeyDown } = this.props;
    let currentProject = projects.filter(project => {
      if (project.id === Number(focusedProject)) {
        return project;
      }
    });
    currentProject = currentProject[0];
    return (
      <Spring from={{ opacity: 0, marginTop: -500}} to={{ opacity: 1, marginTop: 0 }} >
        {props => (
            <div style={props} className='modal-overlay'>
              <div className="modal" onKeyDown={onKeyDown}>
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
                          let clickedProject = this.state.projects.filter(p => {
                            return p.id === projectId;
                          })
                          let video = document.querySelector('video');
                          this.setState({ focusedProject: projectId })
                          video.setAttribute('src', clickedProject[0].vidURL)
                        }}
                        style={currentProject.id === project.id ? {borderBottom: `2px solid #ff79c6`,} : {}} 
                        >
                        {project.title}
                      </a>
                    );
                  })}
                  <a href="#0" onClick={toggle}>
                    ✕
            </a>
                </nav>
                <section className="project-info">
                  {this.state.loading
                    ? <img className="loader" src="img/site-loader.gif" />
                    :
                    <div className="modalContent">

                    <VideoSection>
                      <ProjectSwitcher
                        onClick={ 
                          e => {
                            e.preventDefault()
                            focusedProject !== projects[0].id 
                            ? this.setState({ focusedProject: focusedProject - 1 }) 
                            : this.setState({ focusedProject: 1 })
                          }
                        }  
                      >
                      ‹
                      </ProjectSwitcher>
                      {/* <video key={currentProject.vidURL} style={{
                        width: `83%`,
                        display: `inline`,
                      }} controls autoPlay="true" loop>
                        <source src={currentProject.vidURL} type="video/mp4" />
                      </video> */}
                      <ReactPlayer url={currentProject.vidURL} playing />
                      <ProjectSwitcher
                        onClick={ 
                          e => {
                            e.preventDefault()
                            focusedProject !== projects.length 
                            ? this.setState({ focusedProject: focusedProject + 1 }) 
                            : this.setState({ focusedProject: 1 })
                          }
                        }  
                      >
                      ›
                      </ProjectSwitcher>
                    </VideoSection>
                      
                      <h2>{currentProject.title}</h2>
                      <a style={{color: `#ff79c6`, textDecoration: `underline`}}target="blank" href={currentProject.gitHubURL}>GitHub Repo</a>
                      <br />
                      <br />
                      <p className="projectDescription">{currentProject.description}</p>
                      <h3>Technologies Used:</h3>
                      <p className="techUsed">
                        {currentProject.techUsed}
                      </p>
                    </div>
                  }
                </section>
              </div>
            </div>
        )}
      </Spring>
    );
  }
}

export default Modal;
