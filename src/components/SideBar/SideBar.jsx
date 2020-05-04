import React ,{useState}from 'react'
import {Layout,Menu,Button} from 'antd'
import './sideBar.css'
import {Link} from 'react-router-dom'
import {EditOutlined} from '@ant-design/icons'
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
          <Button  onClick={()=>setCollapsed(!collapsed)} style={{ marginBottom: 16 }}>
          <EditOutlined />
        </Button>
        </Sider>
    )
}
