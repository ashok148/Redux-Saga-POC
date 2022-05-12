import { call, put,takeEvery, takeLatest, delay} from 'redux-saga/effects'

const getUserName = async () =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const result = await res.json()
  return result[Math.floor(Math.random()*11)].name
}
function* fetchUser() {
   try {
       const userName = yield call(getUserName);
       yield put({type: 'UPDATE_NAME_SUCCESS',payload: userName})
   } catch (e) {
      console.log(e);
   }
}

function* changeAge(){
  yield delay(2000)
  yield put({type: "UPDATE_AGE_SUCCESS", payload:30})
}

function* userSaga() {
  yield takeLatest("UPDATE_NAME", fetchUser);
  yield takeEvery("UPDATE_AGE", changeAge);
}

export default userSaga;