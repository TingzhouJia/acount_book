import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react'
import {Link,Redirect,withRouter} from 'react-router-dom'
import {signIn} from '../../redux/actions/User_actions'

import {connect} from 'react-redux'
import './login.css'
class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        
     
       this.props.signIn(values.username,values.password)
      
      }
      else{
          
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    if(this.props.auth){
      return <Redirect to='/home/*'/>
    }
    return (
      <div className="back">
        <h1 className="login_title">Shark Finance</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
             
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to='/SignUp'><a href="">register now!</a></Link>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return{
    auth:state.User.isAuthenticated
  }
}
export default connect(mapStateToProps,{signIn})(withRouter(Login))