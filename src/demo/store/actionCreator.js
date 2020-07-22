import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, INIT_DATA, INIT_SAGA_DATA } from './actionTypes'

export const getChangeInputValueAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_ITEM,
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const getInitListDataAction = (data) => ({
  type: INIT_DATA,
  data
})

// 使用redux-thunk创建action函数
export const getTodoListData = () => {
  return (dispatch) => {// 使用redux-thunk之后，派发的函数可以自带默认参数dispatch
    // 假设发送了模拟axios请求数据，listData=[1,2,3]
    const listData = [1, 2, 3]
    const action = getInitListDataAction(listData)
    dispatch(action)
  }
}

// 使用redux-saga创建action
export const getSagaTodoListAction = () => ({
  type: INIT_SAGA_DATA,
})