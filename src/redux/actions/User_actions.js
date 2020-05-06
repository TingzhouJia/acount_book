

import {
 
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  USER_LOADING,
  FETCH_USER_INFO,
} from './actions_type';


export const verifyAuth=()=>dispatch=>{
  firebase.auth().onAuthStateChanged(user=>{
    if(user !== null){
      dispatch({type: LOGIN_SUCCESS,user})
    }
  })
}
export const fetchUserInfo = () => {

 let user=firebase.auth().currentUser
 
}
const loading=()=>{
   return {
    type: USER_LOADING
  }
}