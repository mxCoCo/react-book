import React, {
  Component,
  Fragment
} from 'react'
import './Transition.css';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

class Transition extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: true,
      list: []
    }
  }
  render () {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={2000}
                  classNames="fade"
                  unmountOnExit
                  onEnter={(el) => el.style.color = 'red'}
                  appear={true}
                  key={index}
                >
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    )
  }

  handleAddItem = () => {
    this.setState((preState) => ({
      list: [...preState.list, 'item']
    }))
  }

  handleClick = () => {
    this.setState(() => ({
      show: !this.state.show
    }))
  }

}

export default Transition