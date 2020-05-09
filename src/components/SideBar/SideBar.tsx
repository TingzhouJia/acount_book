import React from 'react'
import {Layout,Menu} from 'antd'
import './sideBar.css'
import {Link} from 'react-router-dom'
import { BankOutlined, LineChartOutlined, AppstoreAddOutlined, FormOutlined} from '@ant-design/icons'
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
           <AppstoreAddOutlined />
            <span className="sideBar">Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" className="bar">
              <Link to="/new_record">
              <FormOutlined />
                <span className="sideBar">New Records</span>
              </Link>
           
          </Menu.Item>
          <Menu.Item key="3" className="bar">
          <Link to="/lifestyle">
          <LineChartOutlined />
            <span className="sideBar">Statistics</span>
          </Link>
          </Menu.Item>
          <Menu.Item key="4" className="bar">
          <Link to='/bank_account'>
          <BankOutlined />
            <span className="sideBar">Banking Accounts</span>
          </Link>
          </Menu.Item>
          </Menu>
       </div>
        <div style={{position:'absolute',bottom:0}}>
         

        </div>
      
        </Sider>
    )
}
