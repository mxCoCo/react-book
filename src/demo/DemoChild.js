import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types' //prop-types属性校验

class DemoChild extends Component {
  static propTypes = {// 类型检查
    content: PropTypes.string,
    test: PropTypes.string.isRequired,// 设置必传,需要默认值defaultProps
  }
  static defaultProps = {// 默认值defaultProps
    test: 'hello test'
  }
  constructor(props) {
    super(props)
    this.state = {}
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    }
    return false

  }

  componentWillReceiveProps () {
    // 子组件存在于父组件，第一次不会被执行，只有父组件中的props发生改变，之后的这个生命周期函数会被执行
    console.log("child componentWillReceiveProps")
  }

  render () {
    console.log("child render")
    return (
      < Fragment >
        <div>
          姓名（子组件）：({this.props.test})--{this.props.content}<br></br>
        </div>
      </Fragment >
    )
  }

}

// DemoChild.propTypes = {
//   content: PropTypes.string
// };

export default DemoChild