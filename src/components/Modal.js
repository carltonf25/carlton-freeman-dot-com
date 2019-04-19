import React from 'react';
import { Spring } from 'react-spring/renderprops';

class Modal extends React.Component {
  state = {
    focusedProject: 1,
    loading: false,
    projects: [
      {
        id: 4,
        title: 'Game Night',
        description:
          'An in-progress application for creating and managing board game nights with friends. Uses the Twilio API to send SMS invites that allow invitees to RSVP and volunteer to bring refreshments.',
        vidURL: '/video/game-night.mov',
        techUsed: 'React, Express, Node, Twilio API',
        gitHubURL: 'https://github.com/carltonf25/game-night',
      },
      {
        id: 1,
        title: 'CRBN',
        description:
          'CRBN is an app that gives users a score for their carbon emissions, ' +
          'and encourages them to offset that score by attending events that would reduce carbon emissions.',
        vidURL: '/video/crbn.mov',
        techUsed: 'React, Express, Node, HTML, CSS',
        gitHubURL: 'https://github.com/carltonf25/CRBN',
      },
      {
        id: 2,
        title: 'Freddie Match',
        description: 'A memory game featuring my very photogenic dog, Freddie.',
        vidURL: '/video/freddie-match.mov',
        techUsed: 'React, HTML, CSS',
        gitHubURL: 'https://github.com/carltonf25/freddie-match',
      },
      {
        id: 3,
        title: 'ScheduleBot',
        description:
          'A Slack bot that allows users to schedule Slack messages to send ' +
          'at a specified date and time.',
        vidURL: '/video/ScheduleBot.mov',
        techUsed: 'Express, Node, Slack API',
        gitHubURL: 'https://github.com/carltonf25/schedulebot',
      },
    ],
  };

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
                        }}>
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
                      <video style={{
                        width: `100%`,
                      }}controls autoPlay="true" loop>
                        <source src={currentProject.vidURL} type="video/mp4" />
                      </video>
                      <h2>{currentProject.title}</h2>
                      <a target="blank" href={currentProject.gitHubURL}>GitHub Repo</a>
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
