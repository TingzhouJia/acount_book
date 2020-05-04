import React from 'react'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {Layout,Breadcrumb,Input} from 'antd'
import {} from '@ant-design/icons'
import Avatar from '../Avatar/avatar'
import './header.css'
const {Search}=Input
const {Header}=Layout
const Headers:React.FC=()=>{

  let location=useLocation()
  let site=location.pathname.split('/')
  return(
      <Header style={{borderBottomLeftRadius:40,backgroundColor:"#fdd365",marginLeft:"5vw",height:"5vw"}}>
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
       
            <Avatar className="avatar"></Avatar>
           </div>
          </div>
      </Header>
  )
}
export default Headers;
