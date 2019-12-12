import React,{useState,useEffect} from 'react'
import { Avatar, Icon,Dropdown,Menu } from 'antd';
import {Link} from 'react-router-dom'
function AvatarPage(){
  
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
