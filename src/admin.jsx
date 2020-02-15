import React, { useEffect,useState } from 'react'
import Login from './pages/login/login'
import SignUp from './pages/SignUp/SignUp'
import Protector from './components/Protector'
import { Route,Switch } from 'react-router-dom';
import App from './App'
import {useSelector} from 'react-redux'
export const Admin =()=> {
        const isAuthenticated=useSelector(state=>state.User.isAuthenticated)
       
        return (
            <Switch>
            <Route path='/Login' component={Login}></Route>
            {/* <Protector path='/' isAuthenticated={isAuthenticated} component={App}/>
            */}
            <Route path="/home/viewtable" component={App}/>
            <Route path='/SignUp' component={SignUp}/>
        </Switch>
        )
    
}
