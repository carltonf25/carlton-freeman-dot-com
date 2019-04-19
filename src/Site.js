import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import FrontPage from './components/FrontPage';
import Modal from './components/Modal';

class Site extends Component {
  state = {
    showModal: false
  }

  modalToggle = () => {
    console.log('toggling the modal');
    this.setState({showModal: !this.state.showModal});
  }

  handleEscapePress(e) {
    e.preventDefault();
    if (e.keyCode === 27 ) {
      console.log('Escape key pressed.')
      this.setState({showModal: false});
    }
  }

  render() {
    let {showModal} = this.state;
    return (
      <div className="App" onKeyDown={this.logKey}>
      {showModal === true && 
          <Modal onKeyDown={this.handleEscapePress} toggle={this.modalToggle} show={showModal}/> 
      }
      <Header />
      <FrontPage toggle={this.modalToggle}/>
      </div>
    );
  }
}

export default Site;
