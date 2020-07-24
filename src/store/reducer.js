import { combineReducers } from 'redux-immutable'
import { headerReducer } from '../pages/common/header/store'

export default combineReducers({
  header: headerReducer
})
