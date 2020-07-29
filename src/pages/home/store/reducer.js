import { GET_TOPIC_LIST, GET_AIRTICLE_LIST, GET_AIRTICLE_MORE_LIST, GET_RECOMMEND_LIST, GET_WRITER_LIST, CHANGE_PAGENO_LIST, CHANGE_SHOWSCROLL } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  airticleList: [],
  recommendList: [],
  writerList: [],
  pageNo: 1,
  pageSize: 5,
  totalPage: 0,
  showScroll: false,
})

export default (preState = defaultState, action) => {
  switch (action.type) {
    case GET_TOPIC_LIST:
      return preState.set('topicList', action.topicList)
    case GET_AIRTICLE_LIST:
      return preState.set('airticleList', action.airticleList)
    case GET_AIRTICLE_MORE_LIST:
      return preState.set('airticleList', preState.get('airticleList').concat(action.list))
    case GET_RECOMMEND_LIST:
      return preState.set('recommendList', action.recommendList)
    case GET_WRITER_LIST:
      return preState.merge({
        'writerList': action.writerList,
        'totalPage': action.totalPage,
      })
    case CHANGE_PAGENO_LIST:
      const totalPage = preState.get('totalPage')
      if (action.pageNo > totalPage) {
        action.pageNo = 1
      }
      return preState.set('pageNo', action.pageNo)
    case CHANGE_SHOWSCROLL:
      return preState.set('showScroll', action.showScroll)
    default:
      return preState
  }

}