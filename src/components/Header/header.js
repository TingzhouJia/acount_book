import React from 'react'

import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Budget from '../Budget/budget'
import Avatar from '../Avatar/avatar'
import './header.css'

const Header=(props)=>{
  const {outgoing,income,budget}=useSelector(state=>state.Finance)
  return(<div className="Header_fold">
            <h3>Shark Bookkeeping</h3>
            <div className="recordList">
              <li>Outcomes:{outgoing}</li>
              <li>Incomes:{income}</li>
              <li>Balance:{budget}</li>
            </div>
            <div className="router_list">
              <p><Link to="/home/viewTable">My Records</Link></p>
              <p><Link to="/viewTable">Saving Society</Link></p>
              <p><Link to="/home/new_record">Add Records</Link></p>
            </div>
            <Avatar className="avatar"></Avatar>
          </div>)
}
export default Header;
