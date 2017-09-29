// Modals.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import LoginView from '../containers/LoginView'
import RegisterView from '../containers/RegisterView'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class ModalBut extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Trivia</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
              {/* <button onClick={this.closeModal}>close</button> */}
              <div id="login-overlay" className="modal-dialog modal-md">
                <div className="modal-content">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#login-view" role="tab">LOGIN</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#register-view" role="tab">REGISTER</a>
                    </li>
                  </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="login-view" role="tabpanel">
                    <LoginView />
                  </div>
                  <div className="tab-pane" id="register-view" role="tabpanel">
                    <RegisterView />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
