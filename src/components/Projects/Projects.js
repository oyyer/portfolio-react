import React, { Component } from 'react'
import './scss/style.scss'
import Modal from 'react-modal'
import Project from './Project/Project'
import project_example01 from './Project/assets/project_example01.jpg'
import project_example02 from './Project/assets/project_example02.jpg'
import project_example03 from './Project/assets/project_example03.jpg'

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class Projects extends Component {
  state = {
    modalIsOpen: false,
    example: '',
  }

  openModal = e => {
    e.preventDefault()
    console.log(e.target.value)
    const example = e.target.name
    this.setState({ modalIsOpen: true, example })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    const { example } = this.state
    return (
      <section id="projects" className="project">
        <div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
            <Project closeModal={this.closeModal} example={example} />
          </Modal>
        </div>
        <div className="project__inner">
          <h2 id="project__title">Personal Projects</h2>
          <ul className="project__list" id="project__list">
            <li className="project__item">
              <div className="project__itemWrap">
                <input
                  type="button"
                  className="project__anchor"
                  name="example01"
                  onClick={this.openModal}
                />
                <img src={project_example01} alt="Visual Translate" />
                <div className="project__detailBox">
                  <p className="project__title">Visual Translate</p>
                </div>
              </div>
            </li>

            <li className="project__item">
              <div className="project__itemWrap">
                <input
                  type="button"
                  className="project__anchor"
                  name="example02"
                  onClick={this.openModal}
                />
                <img src={project_example02} alt="Joyevent" />
                <div className="project__detailBox">
                  <p className="project__title">Joyevent</p>
                </div>
              </div>
            </li>
            <li className="project__item">
              <div className="project__itemWrap">
                <input
                  type="button"
                  className="project__anchor"
                  name="example03"
                  onClick={this.openModal}
                />
                <img src={project_example03} alt="Rei Yoshizawa Portfolio" />
                <div className="project__detailBox">
                  <p className="project__title">Rei Yoshizawa Portfolio</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Projects
