import { GET_TOPIC_LIST, GET_AIRTICLE_LIST, GET_AIRTICLE_MORE_LIST, GET_RECOMMEND_LIST, GET_WRITER_LIST, CHANGE_PAGENO_LIST, CHANGE_SHOWSCROLL } from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

export const topicListAction = (topicList) => ({
  type: GET_TOPIC_LIST,
  topicList: fromJS(topicList),
})

// 使用redux-thunk封装返回一个函数
export const getTopicListAction = () => {
  return (dispatch) => {
    axios.get("/api/topicList.json").then((res) => {
      const topicList = res.data
      const action = topicListAction(topicList)
      dispatch(action)
    }).catch(() => {
      console.log('error')
      const action = topicListAction([])
      dispatch(action)
    })
  }
}

export const airticleListAction = (airticleList) => ({
  type: GET_AIRTICLE_LIST,
  airticleList: fromJS(airticleList),
})

// 使用redux-thunk封装返回一个函数
export const getAirticleListAction = () => {
  return (dispatch) => {
    axios.get("/api/airticleList.json").then((res) => {
      const airticleList = res.data
      const action = airticleListAction(airticleList)
      dispatch(action)
    }).catch(() => {
      console.log('error')
      const action = airticleListAction([])
      dispatch(action)
    })
  }
}

export const airticleMoreListAction = (airticleMoreList) => ({
  type: GET_AIRTICLE_MORE_LIST,
  list: fromJS(airticleMoreList),
})

export const getAirticleMoreListAction = () => {
  return (dispatch) => {
    axios.get("/api/airticleList_more.json").then((res) => {
      const airticleMoreList = res.data
      const action = airticleMoreListAction(airticleMoreList)
      dispatch(action)
    }).catch(() => {
      console.log('error')
      const action = airticleMoreListAction([])
      dispatch(action)
    })
  }
}

export const recommendListAction = (recommendList) => ({
  type: GET_RECOMMEND_LIST,
  recommendList: fromJS(recommendList),
})

// 使用redux-thunk封装返回一个函数
export const getRecommendListAction = () => {
  return (dispatch) => {
    axios.get("/api/recommendList.json").then((res) => {
      const recommendList = res.data
      const action = recommendListAction(recommendList)
      dispatch(action)
    }).catch(() => {
      console.log('error')
      const action = recommendListAction([])
      dispatch(action)
    })
  }
}

export const writerListAction = (writerList, total, pageSize) => ({
  type: GET_WRITER_LIST,
  writerList: fromJS(writerList),
  totalPage: fromJS(Math.ceil(total / pageSize))
})

// 使用redux-thunk封装返回一个函数
export const getWriterListAction = (pageSize) => {
  return (dispatch) => {
    axios.get("/api/writerList.json").then((res) => {
      const writerList = res.data
      const action = writerListAction(writerList, writerList.length, pageSize)
      dispatch(action)
    }).catch(() => {
      console.log('error')
      const action = writerListAction([])
      dispatch(action)
    })
  }
}

export const changePageNoAction = (pageNo) => ({
  type: CHANGE_PAGENO_LIST,
  pageNo,
})
export const changeShowScrollAction = (showScroll) => ({
  type: CHANGE_SHOWSCROLL,
  showScroll,
})
