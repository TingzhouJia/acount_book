import React from 'react'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {Layout,Breadcrumb,Input} from 'antd'
import { BellOutlined } from '@ant-design/icons'
import Avatar from '../Avatar/avatar'
import './header.css'
const {Search}=Input
const {Header}=Layout
const Headers:React.FC=()=>{

  let location=useLocation()
  let site=location.pathname.split('/')
  return(
      <Header style={{backgroundColor:"#eceaf1",height:"5vw"}}>
        <div className="Header_fold">
        
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
           <BellOutlined style={{fontSize:"20px"}} />
            <Avatar className="avatar"></Avatar>
           </div>
          </div>
      </Header>
  )
}
export default Headers;
