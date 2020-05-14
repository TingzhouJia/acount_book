import React from 'react'
import Login from './pages/login/login'
import SignUp from './pages/SignUp/SignUp'
import Protector from './components/Protector'
import { Route, Switch } from 'react-router-dom';
import { App } from 'App';

export const Admin: React.FC = () => {
    //const isAuthenticated=useSelector(state=>state.User.isAuthenticated)
    return (
        <Switch>
            <Route path='/Login' component={Login}></Route>
            {/* <Protector path='/' isAuthenticated={isAuthenticated} component={App}/>
            */}
            <Route path="/" component={App} />
            <Route path='/SignUp' component={SignUp} />
        </Switch>
    )

}
