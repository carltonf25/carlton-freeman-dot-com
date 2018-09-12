import React from 'react';
class Modal extends React.Component {
  state = {
    focusedProject: 1,
    loading: false,
    projects: [
      {
        id: 1,
        title: 'CRBN',
        description:
          'CRBN is an app that gives users a score for their carbon emissions, ' +
          'and encourages them to offset that score by attending events that would reduce carbon emissions.',
        vidURL: '/video/crbn.mov',
      },
      {
        id: 2,
        title: 'ScheduleBot',
        description:
          'A Slack bot that allows users to schedule Slack messages to send ' +
          'at a specified date and time.',
        vidURL: '/video/ScheduleBot.mov',
      },
    ],
  };

  render() {
    let { focusedProject, projects, loading } = this.state;
    let { show, toggle } = this.props;
    let currentProject = projects.filter(project => {
      if (project.id === Number(focusedProject)) {
        return project;
      }
    });
    currentProject = currentProject[0];
    let overlayClass = show ? 'modal-overlay' : 'modal-overlay invisible';
    return (
      <div className={overlayClass}>
        <div className="modal">
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
              <React.Fragment>
                <video autoPlay loop>
                  <source src={currentProject.vidURL} type="video/mp4" />
                </video>
                <h2>{currentProject.title}</h2>
                <p>{currentProject.description}</p>
              </React.Fragment>
            }
          </section>
        </div>
      </div>
    );
  }
}

export default Modal;
