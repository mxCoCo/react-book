import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionTypes'

const defaultState = {
  inputValue: 'hello',
  list: [1, 2, 3]
}

// 第三步：reducer中处理转发过来的action，并拷贝preState为nextState
// 修改nextState中对应的数据并返回到store里面
export default (preState = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const nextState = { ...preState }
    nextState.inputValue = action.value
    return nextState
  }
  if (action.type === ADD_ITEM) {
    const nextState = { ...preState }
    nextState.list.push(nextState.inputValue)
    nextState.inputValue = ''
    return nextState
  }
  if (action.type === DELETE_ITEM) {
    const nextState = { ...preState }
    nextState.list.splice(action.index, 1)
    return nextState
  }
  return preState
}