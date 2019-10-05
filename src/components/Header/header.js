import React from 'react'
import { PageHeader, Tag, Button, Statistic,  Row } from 'antd';
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import Budget from '../Budget/budget'
import './header.less'
class Header extends React.Component{
    
    render(){
        return <PageHeader
           
            title="Welcome to Shark Bookkeeping"
            

            extra={[
              <Link to='/viewTable'>
                  <Button key="3">Records</Button>
              </Link>,
              <Budget key="2"/>,
              <Link to='/new_record'>
                <Button key="1" type="primary">Bookkeeping</Button>
              </Link>,
              <Link to="/bill">
                <Button key="4">Bills</Button>
              </Link> 
            ]} 

           
          >
            <Row type="flex">
              <Statistic title="Budget" prefix="$" value={this.props.budget} />
              <Statistic
                title="Outgoings"
                prefix="$"
                value={this.props.outgoing}
                style={{
                  margin: '0 32px',
                }}
              />
              <Statistic title="Income" prefix="$" value={this.props.income} />
            </Row>
          </PageHeader>
    }
}
Header=connect((state)=>({outgoing:state.Finance.outgoing,income:state.Finance.income,budget:state.Finance.budget}))(Header)
export default withRouter(Header)