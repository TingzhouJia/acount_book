import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    
    
  } from '../actions/actions_type';
  
  const initialState = {
    user: {},
    loading:false,
    isAuthenticated:false,
    isLogined:false,
    authError: null
  }
  
  export default function(state = initialState, action) {
    switch(action.type) {
      case AUTH_ERROR:
      case LOGIN_FAIL:
        return {
          ...state,
          authError: 'Authentication error.'
        }
      
      case LOGIN_SUCCESS:
        return {
          ...state,
          
          isLogined:true,
          isAuthenticated:true
        }
      case USER_LOADING:
        return {...state,loading:true}
      
      
      default:
        return state;
    }
  }