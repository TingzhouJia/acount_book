import React from 'react';
import {Redirect,Switch,Route} from 'react-router-dom'
import "antd/dist/antd.css";
import {Layout} from 'antd'
import 'antd/dist/antd.css'

import ViewTabs from './pages/viewTab/viewtab'
import Header from './components/Header/header'
import NewRecord from './pages/new_record/new_record'
import NotFound from './pages/NotFound/notFound'
import PropTypes from 'prop-types'
import Share from './pages/Share/Share'
import YearChart from './pages/YearCharts/YearCharts'
import './App.css'
const {Content}=Layout
class App extends React.Component{
  static PropType={
      changeIncome:PropTypes.number.isRequired,
      changeOutgoings:PropTypes.number.isRequired,
      getFrom:PropTypes.func.isRequired
  }
  
    render(){ 
      return (
        <Layout>
        <Header />
        <Content style={{height:"90vh",width:"100vw"}} >
          <Switch>
            <Redirect from='/' exact to='/home/viewTable'/>
            <Route path="/home/*">
            <div className="router">
            <YearChart/>
            <Route path='/home/viewTable' component={ViewTabs}></Route>
            <Route path='/home/new_record' component={NewRecord}></Route>
            </div>
            </Route>
            <Route path='/share' component={Share}/>
           
            
            <Route component={NotFound}></Route>
          </Switch>
        </Content>
       
      </Layout>
        
      )
    }
}
export default App
