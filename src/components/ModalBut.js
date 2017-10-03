// ModalBut.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import LoginView from '../containers/LoginView'
import RegisterView from '../containers/RegisterView'
// import './tb_styles.css'

const customStyles = {
  overlay : {
    backgroundColor       : 'rgba(0, 0, 0, 0.75)'
  },

  content : {
    top                   : '60%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : 'transparent',
    border                : 'hidden'
  }
};

export default class ModalBut extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="name_modal">
        <button onClick={this.openModal} className="btn btn-#808080 btn-lg">Trivia</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="playerName">

            <div className="modal-content">
              <RegisterView handleUsername={this.props.handleUsername}/>
            </div>

        </Modal>
      </div>
    )
  }
}
