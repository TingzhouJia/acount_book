import React ,{useState}from 'react'
import {Layout,Menu,Button,Icon} from 'antd'
import './sideBar.css'
import {Link} from 'react-router-dom'
const {Sider}=Layout

export default function SideBar() {
    const [collapsed,setCollapsed]=useState(false)
    return (
        <Sider collapsible 
        collapsed={collapsed}
        trigger={null}
       style={{borderTopRightRadius:50,backgroundColor:"#fdd365"}}
       >
       <div style={{height:100}}>

       </div>
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          className="siderbar"
        >
           <Menu.Item key="1" className="bar">
           <Link to="/home/viewTable">
           <Icon type="edit" />
            <span>NEW PAYMENT</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" className="bar">
              <Link to="/home/new_record">
              <Icon type="pie-chart" />
                <span>STATISTICS</span>
              </Link>
           
          </Menu.Item>
          <Menu.Item key="3" className="bar">
          <Icon type="account-book" />
            <span>MY PAYMENTS</span>
          </Menu.Item>
          <Menu.Item key="4" className="bar">
          <Icon type="notification" />
            <span>NOTIFICATION</span>
          </Menu.Item>

          </Menu>
          <Button  onClick={()=>setCollapsed(!collapsed)} style={{ marginBottom: 16 }}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        </Sider>
    )
}
