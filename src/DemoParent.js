import React, { Component } from 'react'
import DemoChild from './DemoChild'
import axios from 'axios'

class DemoParent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'zs',
      content: 'ls',
      list: []
    }
    this.myRef = React.createRef();
  }

  render () {
    console.log("parent render")
    return (
      <div>
        姓名（父组件）：{this.state.name}<input ref={(input) => { this.inputRef = input }} value={this.state.name} onChange={this.handleChange} /><br></br>
        <input ref={this.myRef} type="button" onClick={this.handleClick} value="点击" />
        <DemoChild content={this.state.content}></DemoChild>
      </div>
    )
    // return React.createElement('div', {}, 'item')
  }

  componentDidMount () {
    axios.get("/api/list").then((res) => {
      this.setState(() => ({
        list: res
      }))
    })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (e) => {
    // const value = e.target.value
    const value = this.inputRef.value
    // console.log(this.myRef)
    this.setState(() => ({
      name: value
    }), () => {
      // console.log("setState回调函数")
    })
  }

  handleClick = () => {
    alert(this.state.name)
  }

}

export default DemoParent