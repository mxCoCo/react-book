import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from './store'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()// 同步store中state的数据
    // 第四步：store订阅subscribe数据变化，并做相应处理
    store.subscribe(this.handleChangeStore)
  }

  render () {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div style={{ marginBottom: '10px' }}>
          <Input
            value={this.state.inputValue}
            placeholder="todo info"
            style={{ width: '400px', marginRight: '10px' }}
            onChange={this.handleChangeInput}
          />
          <Button type="primary">保存</Button>
        </div>
        <List
          style={{ width: '400px' }}
          bordered
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }

  handleChangeInput = (e) => {
    // 第一步：定义action
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    // 第二步：dispatch转发action到store中
    store.dispatch(action)
  }

  handleChangeStore = () => {
    this.setState(store.getState())
  }
}

export default TodoList