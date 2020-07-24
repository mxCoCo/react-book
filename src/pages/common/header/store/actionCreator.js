import { CHANGE_FOCUS_VALUE, GET_TIPLIST_FOCUS, CHANGE_MOVEIN_VALUE, CHANGE_PAGENO_VALUE } from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

export const focusTipValuesAction = (focused, tipList, cacheTipList, totalPage, pageSize) => ({
  type: GET_TIPLIST_FOCUS,
  focused,
  tipList: fromJS(tipList),
  cacheTipList: fromJS(cacheTipList),
  totalPage: Math.ceil(totalPage / pageSize),
})

export const changeFocusValueAction = (focused) => ({
  type: CHANGE_FOCUS_VALUE,
  focused,
})

export const changeMoveInAction = (moveInTipList) => ({
  type: CHANGE_MOVEIN_VALUE,
  moveInTipList,
})

export const changePageNoAction = (pageNo) => ({
  type: CHANGE_PAGENO_VALUE,
  pageNo,
})

// 使用redux-thunk封装返回一个函数
export const getFocusTipValuesAction = (focused, cacheTipList, pageSize) => {
  return (dispatch) => {
    if (!cacheTipList) {
      axios.get("/api/tipList.json").then((res) => {
        console.log(res)
        const tipList = res.data
        const action = focusTipValuesAction(focused, tipList, true, tipList.length, pageSize)
        dispatch(action)
      }).catch(() => {
        console.log('error')
        const action = changeFocusValueAction(focused)
        dispatch(action)
      })
    } else {
      const action = changeFocusValueAction(focused)
      dispatch(action)
    }
  }
}

