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

  render() {
    let {showModal} = this.state;
    return (
      <div className="App">
      <Modal toggle={this.modalToggle} show={showModal}/> 
      <Header />
      <FrontPage toggle={this.modalToggle}/>
      </div>
    );
  }
}

export default Site;
