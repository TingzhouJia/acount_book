import React,{useState,useEffect} from 'react'
import { Avatar,Dropdown,Menu } from 'antd';
import {Link} from 'react-router-dom'
const AvatarPage: React.FC=()=>{
  
    const content=(<Menu>
        <Menu.Item key="0">
          <Link to="/"></Link>
        </Menu.Item>
        <Menu.Item key="1">
        <Link to="/"></Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3"><Link to="/"></Link></Menu.Item>
      </Menu>)
   
    return  <Dropdown overlay={content} trigger={['click']}>
        <Avatar></Avatar>
    </Dropdown>
}
export default AvatarPage
