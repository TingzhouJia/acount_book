
  import {createSlice,PayloadAction} from '@reduxjs/toolkit'
  import firebase from '../../firebaseconfig'
  import {AppThunk} from '../store'
interface userType  {
    user:firebase.User|null,
    loading:boolean,
    isAuthenticated:boolean,
    error:UserError|null
  }

  const initialState:userType = {
    user: null,
    loading:false,
    isAuthenticated:false,
    error:null
  }
  type UserError={
    error:string
  }
  const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        fetchUserStart:startLoading,
        signUpSuccess(state,{payload}:PayloadAction<any>){
            state.loading=false;
            state.isAuthenticated=true
        },
        fetchUserSuccess(state,{payload}:PayloadAction<any>){
              state.loading=false;
              state.isAuthenticated=true;
        },
        fetchUserFailed(state,{payload}:PayloadAction<UserError>){
          state.loading=false;
          state.error=payload
        }
    }
  })
 function startLoading(state:userType){
  state.loading=true;
}
//export reducer
export const {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailed
}=userSlice.actions

export const signIn = (email:string,password:string):AppThunk => async(dispatch)=> {
  try{
     dispatch(fetchUserStart())
    firebase.auth().signInWithEmailAndPassword(email,password).then(
      (user)=>{

          dispatch(fetchUserSuccess(user.user))
                
      }).catch(
            (err)=>  {
               
                dispatch(fetchUserFailed(err.message))
            }
          )
  }
  catch(err){
     
    dispatch(fetchUserFailed(err.message))
  }

  
}
export const signUp=(email:string,password:string):AppThunk=>async(dispatch)=>{
  try{
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user=>{
         
         
      })
      .catch(function(error) {
          // Handle Errors here.
          
         
         
          var errorMessage = error.message;
          dispatch(fetchUserFailed(errorMessage))
          // ...
        });
  }catch(err){
      console.log(err)
  }
}
export const verifyAuth=():AppThunk=>async (dispatch)=>{
  firebase.auth().onAuthStateChanged(user=>{
    if(user !== null){
      dispatch(fetchUserSuccess(user))
    }
  })
}
export default userSlice.reducer