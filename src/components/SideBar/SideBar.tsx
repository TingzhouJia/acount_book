import React ,{useState}from 'react'
import {Layout,Menu,Button} from 'antd'
import './sideBar.css'
import {Link} from 'react-router-dom'
import {EditOutlined} from '@ant-design/icons'
const {Sider}=Layout


export const SideBar: React.FC<any|React.HTMLAttributes<HTMLBaseElement>>=()=> {
    return (
        <Sider 
        theme='light'
       >
       <div>
       <div style={{height:100}}></div>
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          className="siderbar"
        >
           <Menu.Item key="1" className="bar">
           <Link to="/home/viewTable">
           <EditOutlined />
            <span>MY PAYMENT</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" className="bar">
              <Link to="/new_record">
                <span>NEW PAYMENT</span>
              </Link>
           
          </Menu.Item>
          <Menu.Item key="3" className="bar">
          <Link to="/lifestyle">
          <EditOutlined />
            <span>STATISTICS</span>
          </Link>
          </Menu.Item>
          <Menu.Item key="4" className="bar">
          <EditOutlined />
            <span>NOTIFICATION</span>
          </Menu.Item>
          </Menu>
       </div>
        <div style={{position:'absolute',bottom:0}}>
         

        </div>
      
        </Sider>
    )
}
