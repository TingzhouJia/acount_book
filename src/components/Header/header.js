import React from 'react'

import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import Budget from '../Budget/budget'
import Avatar from '../Avatar/avatar'
import './header.css'
class Header extends React.Component{
    
    render(){
        return(<div className="Header_fold">
            <h3>Shark Bookkeeping</h3>
            <div className="recordList">
              <li>Outcomes:{this.props.outgoing}</li>
              <li>Incomes:{this.props.income}</li>
              <li>Balance:{this.props.budget}</li>
            </div>
            <div className="router_list">
              <p><Link to="/viewTable">My Records</Link></p>
              <p><Link to="/viewTable">My Chars</Link></p>
              <p><Link to="/new_record">Add Records</Link></p>
            </div>
            <Avatar className="avatar"></Avatar>
          </div>)
        
    }
}
Header=connect((state)=>({outgoing:state.Finance.outgoing,income:state.Finance.income,budget:state.Finance.budget}))(Header)
export default withRouter(Header)