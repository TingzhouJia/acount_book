import React, { Component } from 'react'
import {Redirect,Route} from 'react-router-dom'

const ProtectedRoute=({component:Component,isAuthenticated})=>{
   

    return (
        <Route render={props=>isAuthenticated?<Component {...props} />:
 <Redirect to={{
  pathname: "/Login",
  state: { from: props.location }
}}></Redirect>}/>
    )
}

export default ProtectedRoute