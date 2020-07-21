import React, { Component } from 'react'
import store from './store'
import { getSagaTodoListAction, /**getTodoListData,*/ getChangeInputValueAction, getAddItemAction, getDeleteItemAction } from './store/actionCreator'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()// 同步store中state的数据
    // 第四步：store订阅subscribe数据变化，并做相应处理
    store.subscribe(this.handleChangeStore)
  }

  render () {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleChangeInput={this.handleChangeInput}
        handleAddItem={this.handleAddItem}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  componentDidMount () {
    // 使用redux-thunk之后，能够是action返回的是一个函数，store.dispatch(action)之后，
    // 可以使得返回的action函数，自带默认参数dispatch，然后在action里面进行dispatch派发
    // const action = getTodoListData()
    // store.dispatch(action)

    // 使用redux-saga
    const action = getSagaTodoListAction()
    store.dispatch(action)

  }

  handleItemDelete = (index) => {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  handleAddItem () {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleChangeInput = (e) => {
    // 第一步：定义action
    const action = getChangeInputValueAction(e.target.value)
    // 第二步：dispatch转发action到store中
    store.dispatch(action)
  }

  handleChangeStore = () => {
    this.setState(store.getState())
  }
}

export default TodoList