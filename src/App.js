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
const {Content,Footer}=Layout
class App extends React.Component{
  static PropType={
      changeIncome:PropTypes.number.isRequired,
      changeOutgoings:PropTypes.number.isRequired,
      getFrom:PropTypes.func.isRequired
  }
  
    render(){ 
      return (
        <Layout>
        <Header style={{height:"75px"}}/>
        <Content style={{height:"700px"}}>
          <Switch>
            <Redirect from='/' exact to='/viewTable' ></Redirect>
            <Route path='/viewTable' component={ViewTabs}></Route>
            <Route path='/new_record' component={NewRecord}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
        
      )
    }
}
export default App
