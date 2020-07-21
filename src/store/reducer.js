const defaultState = {
  inputValue: '123',
  list: [1, 2, 3]
}

// 第三步：reducer中处理转发过来的action，并拷贝preState为nextState
// 修改nextState中对应的数据并返回到store里面
export default (preState = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const nextState = { ...preState }
    nextState.inputValue = action.value
    return nextState
  }
  if (action.type === 'add_item') {
    const nextState = { ...preState }
    nextState.list.push(nextState.inputValue)
    nextState.inputValue = ''
    return nextState
  }
  if (action.type === 'delete_item') {
    const nextState = { ...preState }
    nextState.list.splice(action.value, 1)
    return nextState
  }
  return preState
}