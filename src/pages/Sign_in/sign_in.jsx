import React,{Component} from 'react'

class Sign extends Component{
    render(){
        return(
            
        <div className="signup-form">
			<h1>Sign Up</h1>
			<input type="text" placeholder="Username" className="txtb"/>
			<input type="email" placeholder="Email" className="txtb"/>
			<input type="password" placeholder="Password" className="txtb"/>
			<input type="submit" value="Create Account" className="sign-btn"/>
			
		</div>
        )
    }
}
export default Sign