import { GET_TOPIC_LIST, GET_AIRTICLE_LIST } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  airticleList: [],
})

export default (preState = defaultState, action) => {
  switch (action.type) {
    case GET_TOPIC_LIST:
      return preState.set('topicList', action.topicList)
    case GET_AIRTICLE_LIST:
      return preState.set('airticleList', action.airticleList)
    default:
      return preState
  }

}