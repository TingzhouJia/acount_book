import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    
    
  } from '../actions/actions_type';
  import {createSlice,PayloadAction} from '@reduxjs/toolkit'
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
  // export default function(state = initialState, action) {
  //   switch(action.type) {
  //     case AUTH_ERROR:
  //     case LOGIN_FAIL:
  //       return {
  //         ...state,
  //         authError: 'Authentication error.'
  //       }
      
  //     case LOGIN_SUCCESS:
  //       return {
  //         ...state,
          
  //         isLogined:true,
  //         isAuthenticated:true
  //       }
  //     case USER_LOADING:
  //       return {...state,loading:true}
      
      
  //     default:
  //       return state;
  //   }
  // }