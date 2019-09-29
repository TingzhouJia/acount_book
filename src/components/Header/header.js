import React from 'react'
import { PageHeader, Tag, Button, Statistic, Descriptions, Row } from 'antd';
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import Budget from '../Budget/budget'
class Header extends React.Component{
    
    render(){
        return <PageHeader
           
            title="Welcome to Shark Bookkeeping"
            tags={<Tag color="blue">Running</Tag>}

            extra={[
              <Link to='/viewTable'>
                  <Button key="3">Records</Button>
              </Link>,
              <Budget change={this.change}/>,
              <Link to='/new_record'>
                  <Button key="1" type="primary">
                Bookkeeping
              </Button>
              </Link>
              
            ]} 
          >
            <Row type="flex">
              <Statistic title="Budget" value={0} />
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
Header=connect((state)=>({outgoing:state.Finance.outgoing,income:state.Finance.income}))(Header)
export default withRouter(Header)