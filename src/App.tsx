import React from 'react';
import {Switch,Route, Redirect} from 'react-router-dom'
import "antd/dist/antd.css";
import {Layout} from 'antd'
import 'antd/dist/antd.css'
import ViewTabs from './pages/viewTab/viewtab'
import Header from './components/Header/header'
import NewRecord from './pages/new_record/new_record'
import NotFound from './pages/NotFound/notFound'
import PropTypes from 'prop-types'
import LifeStyle from './pages/LifeStyle/LifeStyle'
import YearChart from './pages/YearCharts/YearCharts'
import './App.css'
import { SideBar } from 'components/SideBar/SideBar';

const {Content,Footer}=Layout
export const App:React.FC =()=>{

      return (
        <Layout style={{backgroundColor:"#ffeadb" ,minHeight:"100vh"}}>
         <SideBar width={120} style={{
            overflow: 'auto',
            height: "100vh",
            position: 'fixed',
            left: 0,
          }}/>
        <Layout style={{backgroundColor:"#ffeadb",minHeight:"100vh"}}>
        <Header/>   
        <Content style={{backgroundColor:"#f0f1f2"}} >
          <Switch>       
            <Route path='/home/viewTable' component={ViewTabs}></Route>
            <Route path='/new_record' component={NewRecord}></Route>
            <Route path='/lifestyle' component={LifeStyle}/>      
            <Route component={NotFound}></Route>
            <Redirect from='/' to='/home/viewTable' />
          </Switch>
        </Content>
        
        </Layout>
      
      </Layout>
        
      )

}

