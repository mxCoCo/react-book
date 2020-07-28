import { GET_TOPIC_LIST, GET_AIRTICLE_LIST } from './actionTypes'
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

