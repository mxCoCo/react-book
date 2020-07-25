import { CHANGE_FOCUS_VALUE, GET_TIPLIST_FOCUS, CHANGE_MOVEIN_VALUE, CHANGE_PAGENO_VALUE } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  moveInTipList: false,
  tipList: [],
  pageNo: 1,
  pageSize: 5,
  totalPage: 0,
  cacheTipList: false
})

export default (preState = defaultState, action) => {
  switch (action.type) {
    case GET_TIPLIST_FOCUS:
      return preState.merge({
        focused: action.focused,
        cacheTipList: action.cacheTipList,
        totalPage: action.totalPage,
        tipList: action.tipList
      })
    // return preState.set('focused', action.focused)
    //   .set('cacheTipList', action.cacheTipList)
    //   .set('totalPage', action.totalPage)
    //   .set('tipList', action.tipList) // 设置值，返回新的immutable对象
    case CHANGE_FOCUS_VALUE:
      return preState.set('focused', action.focused)
    case CHANGE_MOVEIN_VALUE:
      return preState.set('moveInTipList', action.moveInTipList)
    case CHANGE_PAGENO_VALUE:
      const totalPage = preState.get('totalPage')
      if (action.pageNo > totalPage) {
        action.pageNo = 1
      }
      return preState.set('pageNo', action.pageNo)
    default:
      return preState
  }

}