import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    
    
  } from '../actions/actions_type';
  import {createSlice,PayloadAction} from '@reduxjs/toolkit'
  import firebase from '../../firebase'
  import {AppThunk} from '../store'
import User from '../model/user'
interface userType  {
    user:User|null,
    loading:boolean,
    isAuthenticated:boolean,
    
  }

  const initialState:userType = {
    user: null,
    loading:false,
    isAuthenticated:false,
  }

  const userSlice=createSlice({
    name:'userData',
    initialState,
    reducers:{
        fetchUserStart:startLoading,
        fetchUserSuccess(state,{payload}:PayloadAction<userType>){
              state.loading=false;
              state.isAuthenticated=true;
        }
    }
  })
function startLoading(state:userType){
  state.loading=true;
}
//export reducer
export const {
  fetchUserStart,
  fetchUserSuccess
}=userSlice.actions

export const signIn = (email:string,password:string):AppThunk => async(dispatch)=> {
  try{
     dispatch(fetchUserStart())
    firebase.auth().signInWithEmailAndPassword(email,password).then(
      (user)=>{
       
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
export const signUp=(email:string,password:string):AppThunk=>async(dispatch)=>{
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
