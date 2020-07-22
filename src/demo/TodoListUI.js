// import React, { Component } from 'react'
import React from 'react'
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css'

/**无状态组件：函数组件 */
const TodoListUI = (props) => {
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <div style={{ marginBottom: '10px' }}>
        <Input
          value={props.inputValue}
          placeholder="todo info"
          style={{ width: '400px', marginRight: '10px' }}
          onChange={props.handleChangeInput}
        />
        <Button type="primary" onClick={props.handleAddItem}>保存</Button>
      </div>
      <List
        style={{ width: '400px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => { props.handleItemDelete(index) }}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

// class TodoListUI extends Component {
//   render () {
//     return (
//       <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//         <div style={{ marginBottom: '10px' }}>
//           <Input
//             value={this.props.inputValue}
//             placeholder="todo info"
//             style={{ width: '400px', marginRight: '10px' }}
//             onChange={this.props.handleChangeInput}
//           />
//           <Button type="primary" onClick={this.props.handleAddItem}>保存</Button>
//         </div>
//         <List
//           style={{ width: '400px' }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item) => (
//             <List.Item onClick={(index) => { this.props.handleItemDelete(index) }}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUI