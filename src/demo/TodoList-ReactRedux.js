import React, { Component } from 'react'
// import React from 'react'
import { connect } from 'react-redux';

// const TodoListReactRedux = (props) => {
//   return (
//     <div>
//       <div>
//         <input value={props.inputValue} onChange={props.handleChangeInput} />
//         <button onClick={props.handleAddItem}>保存</button>
//       </div>
//       <ul>
//         {props.list.map((item, index) => {
//           return <li key={index} onClick={() => { props.handleItemDelete(index) }}>{item}</li>
//         })}
//       </ul>
//     </div>
//   )
// }
class TodoListReactRedux extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    console.log("render")
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.handleChangeInput} />
          <button onClick={this.props.handleAddItem}>保存</button>
        </div>
        <ul>
          {this.props.list.map((item, index) => {
            return <li key={index} onClick={() => { this.props.handleItemDelete(index) }}>{item}</li>
          })}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: [...state.list],// 这里如果是state的对象或者数组，必须拷贝一份赋值，不然props不会更新
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeInput (e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleAddItem () {
      const action = {
        type: 'add_item',
      }
      dispatch(action)
    },
    handleItemDelete (index) {
      const action = {
        type: 'delete_item',
        index
      }
      dispatch(action)
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoListReactRedux)