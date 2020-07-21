// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { put, takeEvery } from 'redux-saga/effects'
import { INIT_SAGA_DATA } from './actionTypes'
import { getInitListDataAction } from './actionCreator'

function* getInitListData () {
  try {
    // const data = yield axios.get(/api/list.json); 
    // throw new Error("假设saga异步请求失败")
    const data = [1, 2, 3] // 假设异步请求获取到数据
    const action = getInitListDataAction(data)
    yield put(action)
  } catch (e) {
    // yield put({type: "USER_FETCH_FAILED", message: e.message});
    console.log(e.message)
  }
}

function* mySaga () {// 入口
  yield takeEvery(INIT_SAGA_DATA, getInitListData);
  // yield takeLatest(INIT_SAGA_DATA, getInitListData);
}

export default mySaga;