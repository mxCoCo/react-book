import React, { Component, Fragment } from 'react'
import './Transition.css';
import {
  CSSTransition,
} from 'react-transition-group';

class Transition extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }
  render () {
    return (
      < Fragment >
        {/* <div className={this.state.show ? 'show' : 'hide'}>
          hello
        </div> */}
        <CSSTransition
          in={this.state.show}
          timeout={2000}
          classNames="fade"
          unmountOnExit
          onEnter={(el) => el.style.color = 'red'}
          onExited={(el) => el.style.color = 'blue'}
        >
          <div>
            hello
        </div>
        </CSSTransition>
        <button onClick={this.handleClick}>toggle</button>
      </Fragment >
    )
  }

  handleClick = () => {
    this.setState(() => ({
      show: !this.state.show
    }))
  }

}

export default Transition