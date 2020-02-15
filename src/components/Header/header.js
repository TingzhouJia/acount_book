import React from 'react'

import {useSelector} from 'react-redux'
import {Link,useLocation} from 'react-router-dom'
import {Layout,Breadcrumb,Input,Icon} from 'antd'

import Avatar from '../Avatar/avatar'
import './header.css'
const {Search}=Input
const {Header}=Layout
const Headers=(props)=>{
  const {outgoing,income,budget}=useSelector(state=>state.Finance)
  let location=useLocation()
  let site=location.pathname.split('/')
  return(
      <Header style={{borderBottomLeftRadius:40,backgroundColor:"#fdd365",marginLeft:"5vw"}}>
        <div className="Header_fold">
        <span className="header_title">Shark Finance</span>
          <Breadcrumb className="sites">
          {
            site.map(each=>{
              return (
                <Breadcrumb.Item key={each}>
                  {each}
                </Breadcrumb.Item>
              )
            })
          }
          </Breadcrumb>
          
           <div className="header_icon">
           <Icon type="search" className="each_icon" />
           <Icon type="mail" className="each_icon"/>
           <Icon type="alert" className="each_icon"/>
            <Avatar className="avatar"></Avatar>
           </div>
          </div>
      </Header>
  )
}
export default Headers;
