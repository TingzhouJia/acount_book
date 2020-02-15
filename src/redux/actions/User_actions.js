import firebase from '../../firebase'

import {
 
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  USER_LOADING,
  FETCH_USER_INFO,
} from './actions_type';
export const signUp=(email,password)=>dispatch=>{
    try{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user=>{
            dispatch({type:LOGIN_SUCCESS,payload:user})
           
        })
        .catch(function(error) {
            // Handle Errors here.
            
           dispatch({type:LOGIN_FAIL,payload:errorMessage})
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }catch(err){
        console.log(err)
    }
}
export const signIn = (email,password) => dispatch=> {
  try{
     
    firebase.auth().signInWithEmailAndPassword(email,password).then(
      (user)=>{
        console.log(user)
          dispatch({type: LOGIN_SUCCESS,payload:user})
          
          
          
      }).catch(
          
            (err)=>  {
               
                dispatch({type:LOGIN_FAIL,payload:err})
            }
          )
  }
  catch(err){
      console.log(err)
    dispatch({type:LOGIN_FAIL,payload:err})
  }

  
}
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